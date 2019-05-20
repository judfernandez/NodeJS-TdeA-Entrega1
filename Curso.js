//Definimos la lista de cursos con sus respectivos atributos
let cursos = [
    {
        id: 101,
        nombre: 'Matematicas',
        duracion: '48 horas',
        valor: 150000
    },
    {
        id: 102,
        nombre: 'Español',
        duracion: '32 horas',
        valor: 50000
    },
    {
        id: 103,
        nombre: 'Ingles',
        duracion: '32 horas',
        valor: 50000
    },
    {
        id: 104,
        nombre: 'Programacion',
        duracion: '48 horas',
        valor: 150000
    },
    {
        id: 105,
        nombre: 'Redes',
        duracion: '48 horas',
        valor: 100000
    }
];

//Funcion que muestra info curso 1
let infoCurso1 = (id_curso, callback) => {
    setTimeout(function () {
        let resultado = ("El curso: " + cursos[id_curso].nombre +
            " con id: " + cursos[id_curso].id + "\r\n" +
            "Tiene una duracion de: " + cursos[id_curso].duracion +
            " y tiene un costo de: " + cursos[id_curso].valor);
        callback(resultado);
    }, 2000);
};

//Funcion que muestra info curso 2
let infoCurso2 = (id_curso, callback) => {
    setTimeout(function () {
        let resultado = ("El curso: " + cursos[id_curso].nombre +
            " con id: " + cursos[id_curso].id + "\r\n" +
            "Tiene una duracion de: " + cursos[id_curso].duracion +
            " y tiene un costo de: " + cursos[id_curso].valor);
        callback(resultado);
    }, 4000);
};

//Funcion que muestra info curso 3
let infoCurso3 = (id_curso, callback) => {
    setTimeout(function () {
        let resultado = ("El curso: " + cursos[id_curso].nombre +
            " con id: " + cursos[id_curso].id + "\r\n" +
            "Tiene una duracion de: " + cursos[id_curso].duracion +
            " y tiene un costo de: " + cursos[id_curso].valor);
        callback(resultado);
    }, 6000);
};

//Funcion que muestra info curso 4
let infoCurso4 = (id_curso, callback) => {
    setTimeout(function () {
        let resultado = ("El curso: " + cursos[id_curso].nombre +
            " con id: " + cursos[id_curso].id + "\r\n" +
            "Tiene una duracion de: " + cursos[id_curso].duracion +
            " y tiene un costo de: " + cursos[id_curso].valor);
        callback(resultado);
    }, 8000);
};

//Funcion que muestra info curso 5
let infoCurso5 = (id_curso, callback) => {
    setTimeout(function () {
        let resultado = ("El curso: " + cursos[id_curso].nombre +
            " con id: " + cursos[id_curso].id + "\r\n" +
            "Tiene una duracion de: " + cursos[id_curso].duracion +
            " y tiene un costo de: " + cursos[id_curso].valor);
        callback(resultado);
    }, 10000);
};

//Funcion que recibe un ID de curso y devuelve el curso correspondiente
let cursoPorID = (id_curso) => {
    let curso = cursos.find(cursoID => cursoID.id == id_curso);
    console.log(curso);
    return curso;
}

//Exportamos los metodos que usaremos en la funcion Principal
module.exports = {
    infoCurso1,
    infoCurso2,
    infoCurso3,
    infoCurso4,
    infoCurso5,
    cursoPorID
};