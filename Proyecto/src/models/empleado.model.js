import pool from "../database/db";
import { queryUpdatePass, pag, orderBy, filter } from "../util/query";
const bcrypt = require("bcrypt");
require("dotenv").config();

export class Empleado {
  constructor(
    id_empleado,
    nombre,
    apellido_paterno,
    apellido_materno,
    nivel_general,
    nivel_craft,
    nivel_business,
    nivel_people,
    activo,
    _correo_electronico,
    password,
    equipo,
    id_chapter,
    imagen_perfil,
    id_rol
  ) {
    this.id_empleado = id_empleado;
    this.nombre = nombre;
    this.apellido_paterno = apellido_paterno;
    this.apellido_materno = apellido_materno;
    this.nivel_general = nivel_general;
    this.nivel_craft = nivel_craft;
    this.nivel_business = nivel_business;
    this.nivel_people = nivel_people;
    this.activo = activo;
    this.correo_electronico = _correo_electronico;
    this.password = password;
    this.equipo = equipo;
    this.id_chapter = id_chapter;
    this.imagen_perfil = imagen_perfil;
    this.id_rol = id_rol;
  }

  async generatorPass() {
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT));
    this.password = await bcrypt.hash(this.password, salt);
  }
  static async generatorPassNew(pass) {
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT));
    const newPass = await bcrypt.hash(pass, salt);
    return newPass;
  }
  static async updatePass(passwords) {
    const [rows, fields] = await pool.execute(queryUpdatePass(passwords));
  }

  static async findId(id) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT e.id_empleado, e.nombre,  e.apellido_paterno,  e.apellido_materno, e.imagen_perfil,  
        e.nivel_general, e.nivel_craft, e.nivel_business, e.nivel_people, e.correo_electronico, e.id_chapter, 
        p.id_periodo, p.estatus_periodo, r.id_rol, e.equipo
        FROM empleado e, empleado_rol r, periodo p
        WHERE e.id_empleado = ${id} AND
              r.id_empleado = e.id_empleado AND
              p.id_chapter = e.id_chapter AND
              p.estatus_periodo = "Vigente"`
      );
      return rows[0] || null;
    } catch (err) {
      return null;
    }
  }

  static async findEmail(correo) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT e.id_empleado, e.nombre,  e.apellido_paterno,  e.apellido_materno, e.imagen_perfil,  
        e.nivel_general, e.nivel_craft, e.nivel_business, e.nivel_people, e.correo_electronico, 
        e.password, r.id_rol, p.id_periodo, e.equipo
        FROM empleado e, empleado_rol r, periodo p
        WHERE e.activo = true AND
          e.correo_electronico = '${correo}' 
          AND p.estatus_periodo = 'Vigente'
          AND r.id_empleado = e.id_empleado 
        ORDER BY r.fecha_rol DESC
        LIMIT 1;`
      );
      return rows[0] || null;
    } catch (err) {
      return null;
    }
  }

  async getDataEmpleado() {

    try {
      const [rows, fields] = await pool.execute(
        `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil, nivel_business, nivel_craft, nivel_people  
           FROM empleado WHERE id_empleado = ${this.id_empleado}
           `
      );
      console.log(rows)
      return rows[0];
    } catch (err) {
      console.log(err)
      throw { err };
    }
  }

  static async getAllDataEmpleado() {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil
        FROM empleado 
        ${orderBy("nombre", "ASC")}
        ${pag(1, 15)}`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  static async getNotRequested(
    page,
    filterName,
    id_periodo,
    id_empleado
  ) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil
        FROM empleado
        WHERE ${filter("nombre", filterName)} AND
              id_empleado NOT IN 
                (SELECT id_empleado_evaluador
                  FROM evaluacion
                  WHERE id_empleado_evaluado = ${id_empleado} AND
                        id_periodo = ${id_periodo})
        ${orderBy("nombre", "ASC")}
        ${pag(page, 15)}`
      );
      //console.log(rows);
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  static async getSearchDataEmpleado(page, filterName) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil
        FROM empleado
        WHERE ${filter("nombre", filterName)}
        ${orderBy("nombre", "ASC")}
        ${pag(page, 15)}`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  async postEmpleado() {
    let conn = null;
    try {
      conn = await pool.getConnection();

      await conn.beginTransaction();

      const [rows, fields] = await conn.query(`
      INSERT INTO empleado (
              nombre, 
              apellido_paterno, 
              apellido_materno, 
              nivel_general, 
              nivel_craft, 
              nivel_business, 
              nivel_people, 
              activo, 
              correo_electronico, 
              password, 
              equipo, 
              id_chapter, 
              imagen_perfil)
      VALUES (
          '${this.nombre}',
          '${this.apellido_paterno}',
          '${this.apellido_materno}',
          ${this.nivel_general},
          ${this.nivel_craft},
          ${this.nivel_business},
          ${this.nivel_people},
          1,
          '${this.correo_electronico}',
          'Interfectorem-Eros',
          '${this.equipo}',
          ${this.id_chapter},
          'http://localhost:8080/img/user_default.png'
      );
        `);

      await conn.query(`
      INSERT INTO empleado_rol (id_empleado, id_rol) 
      VALUES (
        (SELECT id_empleado from empleado WHERE correo_electronico='${this.correo_electronico}'),
        3
        );`);

      await conn.commit();
      await conn.release();
    } catch (error) {
      console.log(error);
      if (conn) {
        await conn.rollback();
        await conn.release();
      }
      throw error;
    }
  }

  async updateChapterMember() {
    try {
      const [rows, fields] = await pool.execute(
        `
        UPDATE empleado SET empleado.password = '${this.password}', empleado.imagen_perfil = '${this.imagen_perfil}' 
        WHERE empleado.id_empleado = ${this.id_empleado};
      `
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  static async updateImageProfile(id, urlImage) {
    try {
      const [rows, fields] = await pool.execute(
        `
        UPDATE empleado SET empleado.imagen_perfil = '${urlImage}'
        WHERE empleado.id_empleado = ${id};
      `
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  async updateCMasCL() {
    try {
      const [rows, fields] = await pool.execute(
        `
        UPDATE empleado SET empleado.nombre = '${this.nombre}', empleado.apellido_paterno = '${this.apellido_paterno}', 
        empleado.apellido_materno = '${this.apellido_materno}', empleado.activo = ${this.activo}, empleado.equipo = '${this.equipo}'
        WHERE empleado.id_empleado = ${this.id_empleado};
      `
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }
}
