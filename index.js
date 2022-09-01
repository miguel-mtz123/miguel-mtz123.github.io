/**
 * Función de ayuda para crear nuevas 
 * producciones en el área de entrada.
 */

function agregarRegla () {
    
    // Obtiene las reglas.
    var current_productions = document.getElementById('reglas');
    
    // Crea una nueva fila para la regla.
    var newProduction = document.createElement("div");
    newProduction.classList.add("d-flex");
    newProduction.classList.add("flex-row");
    newProduction.classList.add("flex-wrap");

    // Crea el espacio para el lado izquierdo de la regla (no terminal)
    var my_div = document.createElement("div");
    my_div.classList.add("p-2");
    my_div.setAttribute("style", "width: 15%");
    var my_input = document.createElement("input");
    my_input.setAttribute("type", "text");
    //my_input.setAttribute("maxlength", "1");
    my_input.classList.add("form-control");
    my_input.classList.add("NT");
    my_div.appendChild(my_input);
    newProduction.appendChild(my_div);

    // Crea el la flecha de conección
    var my_div = document.createElement("div");
    my_div.classList.add("p-2");
    my_div.setAttribute("style", "margin-top: 1%");
    var my_p = document.createElement("p");
    var node = document.createTextNode("→");
    my_p.appendChild(node);
    my_div.appendChild(my_p);
    newProduction.appendChild(my_div);
    
    // Crea un espacio para introducir la nueva regla (terminal).
    var my_div = document.createElement("div");
    my_div.classList.add("p-2");
    my_div.setAttribute("style", "width: 15%");
    my_div.setAttribute("onkeydown", "keyAction(event)");
    var my_input = document.createElement("input");
    my_input.setAttribute("type", "text");
    my_input.setAttribute("placeholder", "λ");
    my_input.classList.add("form-control");
    my_input.classList.add("first");
    my_div.appendChild(my_input);
    newProduction.appendChild(my_div);
    
    // Botón para eliminar la regla.
    var my_div = document.createElement("div");
    my_div.classList.add("p-2");
    my_div.setAttribute("style", "width: 10%");
    var my_img = document.createElement("img");
    my_img.setAttribute("src", "imagenes/icons8-close.svg");
    my_img.setAttribute("width", "25");
    my_img.setAttribute("height", "25");
    my_img.setAttribute("onclick", "eliminarRegla(this)");
    my_img.classList.add("hov");
    my_div.appendChild(my_img);
    newProduction.appendChild(my_div);

    // Añadir una nueva regla al DOM
    current_productions.appendChild(newProduction);
}


function eliminarRegla(element) {
    element.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode)
}


function teclaPulsada(event) {

    // Encuentra el elemento de destino.
    var target_element = event.target.parentNode.parentNode;

    // Si la tecla es Enter significa que se debe de crear una nueva regla.
    if (event.keyCode === 13) {
        agregarRegla();
    }
    
    // Si se teclea '|', se añade un condición o regla nueva en la misma regla.
    if (event.key === "|") {
        
        // Ignora el carácter '|' como si fuera parte de la regla.
        event.preventDefault();

        // Si se trata de la primera fila.
        if (target_element.id === "startrow") {
            
            // Crea el espacio para la nueva regla.
            var my_div = document.createElement("div");
            my_div.classList.add("p-2");
            my_div.setAttribute("style", "margin-top: 1%");
            var my_p = document.createElement("p");
            var node = document.createTextNode("|");
            my_p.appendChild(node);
            my_div.appendChild(my_p);
            target_element.appendChild(my_div);
            
            // Crea el espacio para la regla a introducir.
            var my_div = document.createElement("div");
            my_div.classList.add("p-2");
            my_div.setAttribute("style", "width: 15%");
            my_div.setAttribute("onkeydown", "keyAction(event)");
            var my_input = document.createElement("input");
            my_input.setAttribute("type", "text");
            my_input.setAttribute("placeholder", "λ");
            my_input.classList.add("form-control");
            my_div.appendChild(my_input);
            target_element.appendChild(my_div);
        }
        else {
            
            // Crea el espacio para la nueva regla.
            var my_div = document.createElement("div");
            my_div.classList.add("p-2");
            my_div.setAttribute("style", "margin-top: 1%");
            var my_p = document.createElement("p");
            var node = document.createTextNode("|");
            my_p.appendChild(node);
            my_div.appendChild(my_p);
            target_element.appendChild(my_div);
            
            // Crea el espacio para la regla a introducir.
            var my_div = document.createElement("div");
            my_div.classList.add("p-2");
            my_div.setAttribute("style", "width: 15%");
            my_div.setAttribute("onkeydown", "keyAction(event)");
            var my_input = document.createElement("input");
            my_input.setAttribute("type", "text");
            my_input.setAttribute("placeholder", "λ");
            my_input.classList.add("form-control");
            my_div.appendChild(my_input);
            target_element.appendChild(my_div);
            
            // Se agrega el botón para borrar la regla aquí.
            var my_div = document.createElement("div");
            my_div.classList.add("p-2");
            my_div.setAttribute("style", "width: 10%");
            var my_img = document.createElement("img");
            my_img.setAttribute("src", "icons8-close.svg");
            my_img.setAttribute("width", "30");
            my_img.setAttribute("height", "30");
            my_img.setAttribute("vertical-align", "middle");
            
            my_img.setAttribute("onclick", "eliminarRegla(this)");
            my_img.classList.add("hov");
            my_div.appendChild(my_img);
            target_element.appendChild(my_div);
        }
    }
}
