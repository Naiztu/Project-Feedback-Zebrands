import pool from "../database/db";
import { UpdatePass, pag, orderBy, filter } from "../util/query";
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
  static async updatePass(password, id_empleado) {
    try {
      const [rows, fields] = await pool.execute(
        `UPDATE empleado SET ` +
          "`" +
          `password` +
          "`" +
          ` = '${password}' WHERE id_empleado = ${id_empleado};`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  static async findId(id) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT e.id_empleado, e.nombre,  e.apellido_paterno,  e.apellido_materno, e.imagen_perfil,  
        e.nivel_general, e.nivel_craft, e.nivel_business, e.nivel_people, e.correo_electronico, 
        e.id_chapter, r.id_rol, e.equipo
        FROM empleado e, empleado_rol r
        WHERE e.id_empleado = ${id} AND
              r.id_empleado = e.id_empleado`
      );
      return rows[0] || null;
    } catch (err) {
      return null;
    }
  }

  static async findPass(id) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT e.password
        FROM empleado e
        WHERE e.id_empleado = ${id} `
      );
      return rows[0] || null;
    } catch (err) {
      return null;
    }
  }

  static async findEmail(correo) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT e.id_empleado, e.nombre, e.id_chapter, e.apellido_paterno,  e.apellido_materno, e.imagen_perfil,  
        e.nivel_general, e.nivel_craft, e.nivel_business, e.nivel_people, e.correo_electronico, 
        e.password, r.id_rol, e.equipo
        FROM empleado e, empleado_rol r
        WHERE e.activo = true AND
          e.correo_electronico = '${correo}'
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
        `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil, nivel_business, nivel_craft, nivel_people, activo
           FROM empleado WHERE id_empleado = ${this.id_empleado}
           `
      );
      console.log(rows);
      return rows[0];
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }

  static async getAllDataEmpleado() {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil, activo
        FROM empleado 
        ${orderBy("nombre", "ASC")}
        ${pag(1, 10)}`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  static async getNotRequested(page, filterName, id_periodo, id_empleado) {
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
                AND id_empleado <> ${id_empleado}
        ${orderBy("nombre", "ASC")}
        ${pag(page, 10)}`
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
        `SELECT e.id_empleado, 
        e.nombre,
        e.apellido_paterno, 
           e.apellido_materno, 
           e.imagen_perfil,
           e.nivel_general,
           e.activo,
           e.equipo,
           r.id_rol,
           r.nombre_rol,
           max(er.fecha_rol) 
           FROM empleado e, empleado_rol er, rol r
            WHERE
             er.id_empleado = e.id_empleado AND r.id_rol=er.id_rol
        AND ${filter("nombre", filterName)}
             GROUP BY id_empleado
             ${orderBy("nombre", "ASC")}
             ${pag(page, 10)}

        `
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
          '${this.password}',
          '${this.equipo}',
          ${this.id_chapter},
          'http://ec2-52-24-74-180.us-west-2.compute.amazonaws.com:8080/img/user_default.png'
      );
        `);

      await conn.query(`
      INSERT INTO empleado_rol (id_empleado, id_rol) 
      VALUES (
        (${rows.insertId}),
        ${this.id_rol}
        );`);

      await conn.commit();
      await conn.release();
      return "user creted correct";
    } catch (error) {
      console.log(error);
      if (conn) {
        await conn.rollback();
        await conn.release();
      }
      throw error;
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

  static async getNotAssigned(page, filterName) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT empleado.id_empleado, empleado.nombre, empleado.apellido_paterno, empleado.apellido_materno, empleado.imagen_perfil, lastrol.id_rol
        FROM empleado
         INNER JOIN 
                (SELECT id_empleado, id_rol ,max(fecha_rol)
                FROM empleado_rol
                GROUP BY id_empleado) AS lastrol ON 
                  lastrol.id_empleado = empleado.id_empleado
        WHERE empleado.id_empleado NOT IN (
            SELECT DISTINCT id_empleado_member
             FROM asignacion
             WHERE vigente=1
             )
             AND id_rol=3
             AND ${filter("nombre", filterName)}
             ${orderBy("nombre", "ASC")}
             ${pag(page, 10)}`
      );
      return rows;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }

  static async updateNotActivo(id_empleado) {
    try {
      const [rows, fields] = await pool.execute(
        `UPDATE empleado 
        SET activo = 0
        WHERE id_empleado = ${id_empleado}`
      );
      console.log(rows);
      return rows;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }

  async updateDataEmpleado() {
    try {
      const [rows, fields] = await pool.execute(
        `UPDATE empleado 
        SET nombre = '${this.nombre}', 
        apellido_paterno = '${this.apellido_paterno}', 
        apellido_materno = '${this.apellido_materno}',
        nivel_general = ${this.nivel_general}, 
        nivel_craft = ${this.nivel_craft}, 
        nivel_business = ${this.nivel_business}, 
        nivel_people = ${this.nivel_people},
        correo_electronico = '${this.correo_electronico}',
        equipo = '${this.equipo}',
        id_chapter = ${this.id_chapter} 
        WHERE id_empleado = ${this.id_empleado}`
      );
      console.log(rows);
      return rows;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
}
