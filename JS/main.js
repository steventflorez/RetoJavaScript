 import {
     preguntas
 } from "./preguntas.js";

 const container = document.querySelector('.container');
 let puntaje =parseInt(localStorage.getItem('puntaje')) 
 let nivelIndicador = 35
 const nivel = {
     nivel: 1
 }


 if( puntaje == null){
     localStorage.setItem('puntaje',0)
    puntaje = parseInt(localStorage.getItem('puntaje')) 
 }
 




 export class UI {

    static cambioPreguntas(btn){
        UI.cambiarDisplay(btn);
        UI.cambiarcolor(5)

     preguntaActual = Datos.elegirpregunta()
     console.log(preguntaActual)
     respuestas = Object.values(preguntaActual);
     titulo.textContent = UI.mostrarPregunta(preguntaActual)
     btn_a.textContent = respuestas[1];
     btn_b.textContent = respuestas[2];
     btn_c.textContent = respuestas[3];
     btn_d.textContent = respuestas[4];

    }

     static cambiarcolor(r, btn, correcta) {
         if (r) {

             switch (btn) {
                 case 1:
                     btn_a.className = 'btn btn-success btn_r'
                     UI.cambiarDisplay(true)
                     break
                 case 2:
                     btn_b.className = 'btn btn-success btn_r'
                     UI.cambiarDisplay(true)
                     break
                 case 3:
                     btn_c.className = 'btn btn-success btn_r'
                     UI.cambiarDisplay(true)
                     break
                 case 4:
                     UI.cambiarDisplay(true)
                     btn_d.className = 'btn btn-success btn_r'

                     break
                 default:
                     btn_a.className = 'btn btn-outline-warning btn_r'
                     btn_b.className = 'btn btn-outline-warning btn_r'
                     btn_c.className = 'btn btn-outline-warning btn_r'
                     btn_d.className = 'btn btn-outline-warning btn_r'
                     break


             }
         } else {
             UI.cambiarDisplay(false)
             UI.mostrarCorrecta(correcta)
             switch (btn) {
                 case 1:
                     btn_a.className = 'btn btn-danger btn_r'

                     break
                 case 2:
                     btn_b.className = 'btn btn-danger btn_r'

                     break
                 case 3:
                     btn_c.className = 'btn btn-danger btn_r'

                     break
                 default:
                     btn_d.className = 'btn btn-danger btn_r'

                     break

             }
         }
     }

     static mostrarCorrecta(correcta){
        switch (correcta) {
            case 1:
                btn_a.className = 'btn btn-success disabled btn_r'

                break
            case 2:
                btn_b.className = 'btn btn-success disabled btn_r'

                break
            case 3:
                btn_c.className = 'btn btn-success disabled btn_r'

                break
            default:
                btn_d.className = 'btn btn-success disabled btn_r'

                break

        }

     }
     static cambiarDisplay(btn) {

         if (btn) {

             if (btn_siguiente.style.display == 'none') {
                 btn_siguiente.style.display = 'block'
             } else {
                 btn_siguiente.style.display = 'none'
             }
         } else {
             if (btn_nuevo_intento.style.display == 'none') {
                 btn_nuevo_intento.style.display = 'block'
             } else {
                 btn_nuevo_intento.style.display = 'none'
             }
         }
     }

     static mostrarPregunta(pregunta) {
         return pregunta.pregunta

     }



     static recorrerNiveles(niveles) {
         const contenedorPreguntas = document.createElement('div');
         contenedorPreguntas.className = 'row p-1 card border-secondary mb-3';
         let numNiveles = Object.keys(niveles[0]).length;


         for (let i = 0; i < numNiveles; i++) {

             const divNivel = document.createElement('div');
             divNivel.className = 'col-12 niveles'
             const h4Nivel = document.createElement('h4')
             h4Nivel.textContent = Object.keys(niveles[0])[i]
             divNivel.appendChild(h4Nivel);
             contenedorPreguntas.appendChild(divNivel);

         }


         return contenedorPreguntas

     }

     static moverIndicador(e){
        if(e){
            nivelIndicador+=35
            indicador.style.top = `${nivelIndicador}px`
        }else{
            nivelIndicador = 35
            indicador.style.top = `${nivelIndicador}px`
        }
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

         } else {
             return preguntas[0].nivel2
         }
     }

     static comprobarRespuesta(respuesta) {
         const correcta = Object.values(preguntaActual)[5]
         if (respuesta == correcta) {
             UI.cambiarcolor(true, respuesta, correcta);
         } else {
             UI.cambiarcolor(false, respuesta, correcta);
         }
     }

     static sumarPuntaje(){
         puntaje+=5
         localStorage.setItem('puntaje', puntaje)
         console.log(localStorage.getItem('puntaje'))
         historiaPuntaje.textContent = `Puntaje Acomulado: ${puntaje}`


     }
     static restaurarjuego (){
         
     }

     static restarPuntaje(){
        localStorage.setItem('puntaje', 0)
        puntaje = parseInt(localStorage.getItem('puntaje'))
        historiaPuntaje.textContent = `Puntaje Acomulado: ${puntaje}`
     }

     
 }


 const divNiveles = document.createElement('div');
 const divPregunta = document.createElement('div');
 const divpreguntas = document.createElement('div')
 const titulo = document.createElement('h2')
 let preguntaActual = Datos.elegirpregunta()
 let divContainerNibeles = UI.recorrerNiveles(preguntas);
 let respuestas = Object.values(preguntaActual);
 const contenedorRespuestas = document.createElement('div');
 let btn_a = document.createElement('button');
 let btn_b = document.createElement('button');
 let btn_c = document.createElement('button');
 let btn_d = document.createElement('button');
 const btn_siguiente = document.createElement('button');
 const btn_nuevo_intento = document.createElement('button');
 const containerUsuario = document.createElement('div');
 let historiaPuntaje = document.createElement('h2');
 const indicador = document.createElement('div')
 indicador.className = 'indicador';  
historiaPuntaje.textContent = `Puntaje Acomulado: ${puntaje}`
containerUsuario.className = 'col-12 card border-info mb-3 containerPuntaje'
 btn_nuevo_intento.className = 'btn btn-secondary'
 btn_nuevo_intento.textContent = 'Intentalo nuevamente'
 btn_nuevo_intento.style.display = 'none'
 btn_siguiente.className = 'btn btn-info'
 btn_siguiente.textContent = 'Siquiente Pregunta'
 btn_siguiente.style.display = 'none'
 container.className = 'row container'
 divNiveles.className = 'col-3';
 divPregunta.className = 'col-9';
 divpreguntas.className = 'card border-success mb-3 containerPreguntas';
 titulo.textContent = UI.mostrarPregunta(preguntaActual)
 divpreguntas.appendChild(titulo)
 divPregunta.appendChild(divpreguntas)
 divNiveles.appendChild(indicador)
 divNiveles.appendChild(divContainerNibeles);
 containerUsuario.appendChild(historiaPuntaje);
 container.appendChild(containerUsuario);
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
 divpreguntas.append(btn_a, btn_b, btn_c, btn_d, btn_siguiente, btn_nuevo_intento)
 divpreguntas.appendChild(contenedorRespuestas)








 btn_a.addEventListener('click', (e) => {
     Datos.comprobarRespuesta(1)
 });

 btn_b.addEventListener('click', (e) => {
     Datos.comprobarRespuesta(2)
 });

 btn_c.addEventListener('click', (e) => {
     Datos.comprobarRespuesta(3)
 });

 btn_d.addEventListener('click', (e) => {
     Datos.comprobarRespuesta(4)
 });

 btn_siguiente.addEventListener('click', (e) => {

     nivel.nivel++

     if (nivel.nivel <= 5) {
         UI.cambioPreguntas(true)
         UI.moverIndicador(true)

     }else{
         nivel.nivel = 1
         UI.moverIndicador(false)
         UI.cambioPreguntas(true)
         Datos.sumarPuntaje()
         
     }
 })

 btn_nuevo_intento.addEventListener('click', (e)=>{

     nivel.nivel = 1
     UI.moverIndicador(false)
     UI.cambioPreguntas(false)
     Datos.restarPuntaje()

 })
 /*  btn_b.addEventListener('click',  Datos.comprobarRespuesta(2) );
  btn_c.addEventListener('click', Datos.comprobarRespuesta(3) );
  btn_d.addEventListener('click', Datos.comprobarRespuesta(4) );  */