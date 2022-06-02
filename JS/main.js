 import {
     preguntas
 } from "./preguntas.js";

 const container = document.querySelector('.container');


 const nivel = {
     nivel: 1
 }



 export class UI {



     static crearDom(datos) {

         const divNiveles = document.createElement('div');
         const divPregunta = document.createElement('div');
         const divpreguntas = document.createElement('div')
         const titulo = document.createElement('h2')
         const preguntaActual = Datos.elegirpregunta()
         const divContainerNibeles = this.recorrerNiveles(datos);
         const respuestas = Object.values(preguntaActual);
         const contenedorRespuestas = document.createElement('div');
         const btn_a = document.createElement('button');
         const btn_b = document.createElement('button');
         const btn_c = document.createElement('button');
         const btn_d = document.createElement('button');
         const btn_siguiente = document.createElement('button');
         const btn_nuevo_intento = document.createElement('button');
         btn_nuevo_intento.className = 'btn btn-danger'
         btn_nuevo_intento.textContent = 'Intentalo nuevamente'
         btn_nuevo_intento.style.display = 'none'
         btn_siguiente.className = 'btn btn-info'
         btn_siguiente.textContent = 'Siquiente Pregunta'
         btn_siguiente.style.display = 'none'
         container.className = 'row container'
         divNiveles.className = 'col-3';
         divPregunta.className = 'col-9';
         divpreguntas.className = 'card border-success mb-3 containerPreguntas';
         titulo.textContent = this.mostrarPregunta(preguntaActual)
         divpreguntas.appendChild(titulo)
         divPregunta.appendChild(divpreguntas)
         divNiveles.appendChild(divContainerNibeles);
         container.appendChild(divNiveles);
         container.appendChild(divPregunta);
         btn_a.className = 'btn btn-outline-warning btn_r'
         btn_b.className = 'btn btn-outline-warning btn_r'
         btn_c.className = 'btn btn-outline-warning btn_r'
         btn_d.className = 'btn btn-outline-warning btn_r'
         btn_a.textContent = respuestas[1];
         btn_b.textContent = respuestas[2];
         btn_c.textContent = respuestas[3];
         btn_d.textContent = respuestas[4];
         divpreguntas.append(btn_a, btn_b, btn_c, btn_d,btn_siguiente,btn_nuevo_intento)
         divpreguntas.appendChild(contenedorRespuestas)





     }

    static cambiarcolor (e){
        console.log( e.target)
    }

     static mostrarPregunta(pregunta) {
         return pregunta.pregunta

     }



     static recorrerNiveles(niveles) {
         const contenedorPreguntas = document.createElement('div');
         contenedorPreguntas.className = 'row p-1 card border-secondary mb-3';
         let numNiveles = Object.keys(niveles[0]).length;


         for (let i = 0; i < numNiveles; i++) {
             console.log(i)
             const divNivel = document.createElement('div');
             divNivel.className = 'col-12 niveles'
             const h4Nivel = document.createElement('h4')
             h4Nivel.textContent = Object.keys(niveles[0])[i]
             divNivel.appendChild(h4Nivel);
             contenedorPreguntas.appendChild(divNivel);

         }


         return contenedorPreguntas

     }

     static cargarDom() {
         console.log('hello')
     }
 }

 export class Datos {
     static elegirpregunta() {
         const nivelPreguntas = this.traerpreguntas()
         let numero = Math.floor((Math.random() * ((Object.keys(preguntas[0].nivel1).length - 1) - 0 + 1)) + 0)
         switch (numero) {
             case 0:
                 return nivelPreguntas.pregunta1
             case 1:
                 return nivelPreguntas.pregunta2
             case 2:
                 return nivelPreguntas.pregunta3
             case 3:
                 return nivelPreguntas.pregunta4
             default:
                 return nivelPreguntas.pregunta5

         }
     }
     static traerpreguntas() {

         if (nivel.nivel == 1) {
             return preguntas[0].nivel1

         }else{
            return preguntas[0].nivel2
         }
     }

     static comprobarRespuesta(respuesta){
        console.log(respuesta)
     }
 }


  


 document.addEventListener('DOMContentLoaded', UI.crearDom(preguntas));


 btn_a.addEventListener('click',comprobarRespuesta(1) );
 btn_b.addEventListener('click',comprobarRespuesta(2) );
 btn_c.addEventListener('click',comprobarRespuesta(3) );
 btn_d.addEventListener('click',comprobarRespuesta(4) ); 