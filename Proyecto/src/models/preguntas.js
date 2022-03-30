const pool = require("../db");
module.exports = class Preguntas {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nivel_craft, nivel_people, nivel_business) {
        this.nv_craft = nivel_craft;
        this.nv_people = nivel_people;
        this.nv_business = nivel_business;
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    fetchAll() {
        console.log('Fetch all:');

        var preguntas ={};
         pool.execute(
            `SELECT * FROM banco_preguntas WHERE dimension_pregunta='craft' and nivel_pregunta=1.0;`)
         .then(([rows, fieldData]) => {//Se envian todas las preguntas en rows
           return rows
         })
         .catch((err) => {
           console.log(err);});
    

    preguntas.general=['array de general'];
    preguntas.people=['array de people'];
    preguntas.business=['array de business'];
    
    return preguntas;
    }
}