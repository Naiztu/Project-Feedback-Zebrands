import pool from "../database/db";

export class Empleado {
  constructor(id_empleado, nombre, apellido_paterno, apellido_materno, nivel_general, nivel_craft, nivel_business, nivel_people, 
              activo, _correo_electronico, password, equipo, id_chapter, imagen_perfil, id_rol) {
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

  async getDataEmpleado() {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil, nivel_business, nivel_craft, nivel_people  
                FROM empleado WHERE id_empleado = ${this.id_empleado}`
      );
      return rows[0];
    } catch (err) {
      throw { err };
    }
  }

  async getAllDataEmpleado() {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil
                FROM empleado LIMIT 7,6;`
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
          "123",
          '${this.equipo}',
          ${this.id_chapter},
          '${this.imagen_perfil}'
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

  async updateChapterMember(){
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
}
