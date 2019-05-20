//Usamos './Curso' para toda la manipulacion de cursos
const { infoCurso1, infoCurso2, infoCurso3,
    infoCurso4, infoCurso5, cursoPorID } = require('./Curso');

//Usamos fs para el manejo de archivos
const fs = require('fs');

//Declaramos las opciones para el YARGS
const opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
}

//Declaramos argv para el uso de YARGS
const argv = require('yargs')
    .command('inscribir', 'Inscripcion a cursos', opciones)
    .argv

let crearArchivo = (id_curso) => {
    let curso = cursoPorID(id_curso);
    if (curso != null) {
        textoNombre = ('El estudiante: ' + argv.n);
        textoCedula = (' con cedula: ' + argv.c);
        textoNombreCurso = ('Se ha inscrito en el curso: ' + curso.nombre);
        textoIdCurso = (' con id: ' + curso.id);
        textoDuracionCurso = ('El curso tiene una duracion de: ' + curso.duracion);
        textoValorCurso = (' y un valor de: ' + curso.valor);
        textoCompleto = textoNombre + textoCedula + '\r\n' +
            textoNombreCurso + textoIdCurso + '\r\n' +
            textoDuracionCurso + textoValorCurso;

        fs.writeFile('Matricula.txt', textoCompleto, (err) => {
            if (err) throw (err);
            console.log('Se ha creado el archivo')
        })
    } else {
        console.log("El curso ingresado no existe");
        console.log('A continuacion se mostraran los cursos disponibles');
        console.log('____________________________________________________________________________');
        infoCurso1(0, function (resultado) {
            console.log(resultado);
        });
        infoCurso2(1, function (resultado) {
            console.log(resultado);
        });
        infoCurso3(2, function (resultado) {
            console.log(resultado);
        });
        infoCurso4(3, function (resultado) {
            console.log(resultado);
        });
        infoCurso5(4, function (resultado) {
            console.log(resultado);
        });
    }
}

//Verificamos si se envio comando inscribir, en caso contrario mostrar cursos
console.log(argv.id);
if (argv.id >= 0) {
    crearArchivo(argv.i);
} else {
    infoCurso1(0, function (resultado) {
        console.log(resultado);
    });
    infoCurso2(1, function (resultado) {
        console.log(resultado);
    });
    infoCurso3(2, function (resultado) {
        console.log(resultado);
    });
    infoCurso4(3, function (resultado) {
        console.log(resultado);
    });
    infoCurso5(4, function (resultado) {
        console.log(resultado);
    });
};


