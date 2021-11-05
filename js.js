const botonsito = document.querySelectorAll('button');
let opcionJugador;
let opcionMaquina;
let grupoDeRespuesta = ["piedra","papel","tijera"];
let imagenPLayer= document.createElement('img');
let imagenMaquina= document.createElement('img');
let puntajePlayer= document.getElementById('conteoPlayer');
let puntajeMaquina= document.getElementById('conteoMaquina');
let carro= 0;
let carroAdversario=0;
botonsito.forEach((button) => { 
  button.addEventListener('click', () => {        
        //Aqui voy a poner una imagen en el div sobre los puntajes
        opcionJugador=button.innerText;
        opcionMaquina= grupoDeRespuesta[Math.floor(Math.random()*grupoDeRespuesta.length)];                
        let imagenPLayerDiv= document.getElementById('resultadoPlayer')
        let imagenMaquinaDiv= document.getElementById('resultadoMaquina')
        imagenPLayer.src= "images/"+opcionJugador+".png";
        imagenMaquina.src= "images/"+opcionMaquina+".png";
        imagenPLayerDiv.appendChild(imagenPLayer);
        imagenMaquinaDiv.appendChild(imagenMaquina);       
        if(opcionJugador=="piedra" && opcionMaquina=="papel")
          {
          carroAdversario+=1
          }
        else if(opcionJugador=="piedra" && opcionMaquina=="tijera")
         {
          carro+=1
          }
        else if(opcionJugador=="papel" && opcionMaquina=="tijera")
          {
          carroAdversario+=1
          }
        else if(opcionJugador=="papel" && opcionMaquina=="piedra")
         {
          carro+=1
         }
        else if(opcionJugador=="tijera" && opcionMaquina=="piedra")
          {
          carroAdversario+=1
         }
        else if(opcionJugador=="tijera" && opcionMaquina=="papel")
         {
          carro+=1
         }
        puntajePlayer.textContent=carro;
        puntajeMaquina.textContent=carroAdversario;
        if(carro==5)
        {          
          carro=0;
          carroAdversario=0;
          document.getElementById('1').disabled= true;
          document.getElementById('2').disabled= true;
          document.getElementById('3').disabled= true;
          winner=document.createElement('div');
          winner.textContent= "Ganaste";
          let ganador= document.getElementById('ganador');
          ganador.appendChild(winner)
          let crearBoton=document.createElement('button');
          let reset=document.getElementById('reset');
          crearBoton.textContent="Try Again";
          crearBoton.className='clasedelreset';
          reset.appendChild(crearBoton);
          crearBoton.addEventListener('click', ()=>{
            window.location.reload();

          })
          

        }
        else if(carroAdversario==5)
        {
          
          carro=0;
          carroAdversario=0;
          document.getElementById('1').disabled= true;
          document.getElementById('2').disabled= true;
          document.getElementById('3').disabled= true;
          winner=document.createElement('div');
          winner.textContent= "Perdiste";
          let ganador= document.getElementById('ganador');
          ganador.appendChild(winner)
          let crearBoton=document.createElement('button');
          let reset=document.getElementById('reset');
          crearBoton.textContent="Try Again";
          crearBoton.className='clasedelreset';
          reset.appendChild(crearBoton);
          crearBoton.addEventListener('click', ()=>{
            window.location.reload();

          })

        }
        puntajePlayer.textContent=carro;
        puntajeMaquina.textContent=carroAdversario;
        
  });
});



