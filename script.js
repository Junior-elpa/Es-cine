function drama(){
    let elemento_respuesta = document.getElementById("texto_alarma");

    let elemento_edad = document.getElementById("edad");

    let edad = elemento_edad.value;

    if(edad < 13)
        {
        elemento_respuesta.textContent = "casa blanca"
        }

        else{
            if(edad >= 13 && edad < 16){
                elemento_respuesta.textContent = "The Shawshank Redemption"
            }else{
                elemento_respuesta.textContent = "Taxi driver"
            }
        }
    
}

function comedia(){
    let elemento_respuesta = document.getElementById("texto_alarma");

    let elemento_edad = document.getElementById("edad");

    let edad = elemento_edad.value;

    if(edad < 13)
        {
        elemento_respuesta.textContent = "Back to the Future"
        }

        else{
            if(edad >= 13 && edad < 16){
                elemento_respuesta.textContent = "The Truman show"
            }else{
                elemento_respuesta.textContent = "The wolf of wall street"
            }
        }
    
}

function musical(){
    let elemento_respuesta = document.getElementById("texto_alarma");

    let elemento_edad = document.getElementById("edad");

    let edad = elemento_edad.value;

    if(edad < 13)
        {
        elemento_respuesta.textContent = "La La Land"
        }

        else{
            if(edad >= 13 && edad < 16){
                elemento_respuesta.textContent = "Los miserables"
            }else{
                elemento_respuesta.textContent = "The Rocky Horror Picture Show"
            }
        }
    
}

function crimen(){
    let elemento_respuesta = document.getElementById("texto_alarma");

    let elemento_edad = document.getElementById("edad");

    let edad = elemento_edad.value;

    if(edad < 13)
        {
        elemento_respuesta.textContent = "No hay peliculas para esta edad"
        }

        else{
            if(edad >= 13 && edad < 16){
                elemento_respuesta.textContent = "El secreto de sus ojos"
            }else{
                elemento_respuesta.textContent = "The Godfather"
            }
        }
    
}