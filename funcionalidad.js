// Variables para el juego
let cont = 0; // Contador de posición actual en la frase
let puntos = 0; // Puntuación del jugador
let contIncorrectos = 0; // Contador de teclas incorrectas presionadas
const mensaje = document.getElementById("mensaje"); // Elemento de mensaje para mostrar la puntuación
const nextButton = document.getElementById("next"); // Botón para pasar a la siguiente frase
const textoInput = document.getElementById("texto"); // Área de texto para la frase a escribir
mensaje.textContent = mensaje.textContent + puntos; // Inicializa el mensaje de puntuación

// Conjunto de frases
const frases = [
    "Uno",
    "Dos",
    "Tres"
];

const frasesUtilizadas = new Set(); // Conjunto para almacenar frases utilizadas

function obtenerNuevaFrase() {
    let nuevaFrase;

    // Obtiene una frase que aún no se haya utilizado
    do {
        nuevaFrase = frases[Math.floor(Math.random() * frases.length)];
    } while (frasesUtilizadas.has(nuevaFrase));

    // Registra la frase como utilizada
    frasesUtilizadas.add(nuevaFrase);

    return nuevaFrase;
}

function cambiarFrase() {
    if (frasesUtilizadas.size === frases.length) {
        // Todas las frases se han utilizado, muestra la pantalla de fin de juego
        document.getElementById("gameContainer").style.display = "none";
        document.getElementById("endContainer").style.display = "block";

        // Muestra la puntuación final
        document.getElementById("puntuacionFinal").textContent = puntos;
    } else {
        // Elige una nueva frase
        const nuevaFrase = obtenerNuevaFrase();

        // Establece la nueva frase como texto
        textoInput.innerHTML = nuevaFrase;
        cont = 0;
        contIncorrectos = 0;

        // Deshabilita el botón "Siguiente" al cambiar la frase
        nextButton.disabled = true;
    }
}

const caracteres = [];//Almacenará los caracteres del texto

//La ventana permanece a la escucha de las teclas presionadas por el usuario
document.addEventListener("keydown", function (event) {

    //Recorre la cadena de texto para almacenar los caracteres en el arreglo
    for (let index = 0; index < textoInput.textContent.length; index++) {
        const letra = textoInput.textContent[index];
        caracteres[index] = letra;
    }
    // Se asegura de que el texto no esté vacío antes de entrar a la condicional, y de que no se puedan ingresar las teclas de control
    if (textoInput.textContent !== "" && /^[a-zA-ZáéíóúÁÉÍÓÚüÜ0-9,.'"\[\]!@#$%^&*()_+-=<>?:;{}|\\/¿ñ ]$/
        .test(event.key)) {
        // Compara la tecla presionada con la primera letra de la cadena de texto
        if (event.key.toLowerCase() === caracteres[cont].toLowerCase()) {
            //Se asegura de que no pueda ingresar una letra incorrecta más de 1 vez
            if (contIncorrectos == 0) {
                textoInput.textContent = textoInput.textContent.substring(1);//Si la tecla es correcta, elimina dicha letra en la cadena de texto.
                puntos += 2;//Aumenta 2 puntos por cada acierto
            }
        } else if (event.key != "Backspace" && event.key.toLowerCase() != caracteres[cont]) {
            // Si la tecla es incorrecta, agrega el caracter al inicio del texto y lo colorea de rojo
            textoInput.innerHTML = `<span class='incorrecto'>${event.key}</span>` + textoInput.textContent;
            contIncorrectos++;//Actualiza el contador de incorrectos para controlar los caracteres que se puedan borrar
            puntos -= 1;//Elimina un punto por cada incorrecto
        }
        // Permite borrar caracteres, siempre y cuando existan caracteres incorrectos
    } else if (contIncorrectos > 0 && event.key === "Backspace") {
        textoInput.textContent = textoInput.textContent.substring(1);//Elimina el caracter incorrecto.
        contIncorrectos--;//Actualiza el contador de incorrectos para controlar los caracteres que se puedan borrar
        // Si ya ha escrito toda la frase, habilita el botón para acceder a una nueva frase
    } else if (textoInput.textContent === "") {
        nextButton.disabled = false;
    }
    mensaje.textContent = "Puntos: " + puntos;//Actualiza los puntos en pantalla
});
// Agrega un evento al botón "Siguiente"
nextButton.addEventListener("click", cambiarFrase);
// Agrega un evento al botón "Reintentar"
document.getElementById("reintentar").addEventListener("click", function () {
    // Reinicia el juego
    frasesUtilizadas.clear();
    puntos = 0;
    mensaje.textContent = "Puntos: " + puntos;//Actualiza los puntos en pantalla
    cambiarFrase();

    // Oculta el contenedor de fin de juego y muestra el contenedor del juego
    document.getElementById("gameContainer").style.display = "block";
    document.getElementById("endContainer").style.display = "none";
});

// Inicializa el primer texto
cambiarFrase();

/* ----------------------------------------------------------------------------- */

function handleKeyDown(event) {
    const keyPressed = event.key.toUpperCase(); // Obtener la tecla presionada
    const keys = document.querySelectorAll('.key'); // Obtener todas las teclas

    keys.forEach(function (key) {
        // Remover la clase de tecla presionada de todas las teclas
        key.classList.remove('key-pressed');
    });

    switch (event.key) {
        /* Sector Mano Izquierda */
        case '1':
        case '!':
            handleKeyHighlight('key-1');
            break;
        case '2':
        case '"':
            handleKeyHighlight('key-2');
            break;
        case '3':
        case '#':
            handleKeyHighlight('key-3');
            break;
        case '4':
        case '$':
            handleKeyHighlight('key-4');
            break;
        case '5':
        case '%':
            handleKeyHighlight('key-5');
            break;
        case 'q':
        case 'Q':
            handleKeyHighlight('key-q');
            break;
        case 'w':
        case 'W':
            handleKeyHighlight('key-w');
            break;
        case 'e':
        case 'E':
            handleKeyHighlight('key-e');
            break;
        case 'r':
        case 'R':
            handleKeyHighlight('key-r');
            break;
        case 't':
        case 'T':
            handleKeyHighlight('key-t');
            break;
        case 'a':
        case 'A':
            handleKeyHighlight('key-a');
            break;
        case 's':
        case 'S':
            handleKeyHighlight('key-s');
            break;
        case 'd':
        case 'D':
            handleKeyHighlight('key-d');
            break;
        case 'f':
        case 'F':
            handleKeyHighlight('key-f');
            break;
        case 'g':
        case 'G':
            handleKeyHighlight('key-g');
            break;
        case 'z':
        case 'Z':
            handleKeyHighlight('key-z');
            break;
        case 'x':
        case 'X':
            handleKeyHighlight('key-x');
            break;
        case 'c':
        case 'C':
            handleKeyHighlight('key-c');
            break;
        case 'v':
        case 'V':
            handleKeyHighlight('key-v');
            break;
        case 'b':
        case 'B':
            handleKeyHighlight('key-b');
            break;

        /* Sector Mano Derecha */
        case '6':
        case '&':
            handleKeyHighlight('key-6');
            break;
        case '7':
        case '/':
            handleKeyHighlight('key-7');
            break;
        case '8':
        case '(':
            handleKeyHighlight('key-8');
            break;
        case '9':
        case ')':
            handleKeyHighlight('key-9');
            break;
        case '0':
        case '=':
            handleKeyHighlight('key-0');
            break;
        case "'":
        case '?':
            handleKeyHighlight('key-apos');
            break;
        case '¡':
        case '¿':
            handleKeyHighlight('key-question');
            break;
        case 'y':
        case 'Y':
            handleKeyHighlight('key-y');
            break;
        case 'u':
        case 'U':
            handleKeyHighlight('key-u');
            break;
        case 'i':
        case 'I':
            handleKeyHighlight('key-i');
            break;
        case 'o':
        case 'O':
            handleKeyHighlight('key-o');
            break;
        case 'p':
        case 'P':
            handleKeyHighlight('key-p');
            break;
        case '*':
        case '+':
            handleKeyHighlight('key-asterisk');
            break;
        case ']':
        case '}':
            handleKeyHighlight('key-close-bracket');
            break;
        case 'h':
        case 'H':
            handleKeyHighlight('key-h');
            break;
        case 'j':
        case 'J':
            handleKeyHighlight('key-j');
            break;
        case 'k':
        case 'K':
            handleKeyHighlight('key-k');
            break;
        case 'l':
        case 'L':
            handleKeyHighlight('key-l');
            break;
        case 'ñ':
        case 'Ñ':
            handleKeyHighlight('key-ñ');
            break;
        case '[':
        case '{':
            handleKeyHighlight('key-open-bracket');
            break;
        case 'n':
        case 'N':
            handleKeyHighlight('key-n');
            break;
        case 'm':
        case 'M':
            handleKeyHighlight('key-m');
            break;
        case ',':
        case ';':
            handleKeyHighlight('key-comma');
            break;
        case '.':
        case ':':
            handleKeyHighlight('key-dot');
            break;
        case '-':
        case '_':
            handleKeyHighlight('key-hyphen');
            break;

        /* Teclas Especiales */
        case 'Enter':
            handleKeyHighlight('key-enter-up');
            handleKeyHighlight('key-enter-down');
            break;
        case 'Control':
            handleKeyHighlight('key-ctrl-left');
            handleKeyHighlight('key-ctrl-right');
            break;
        case 'Alt':
            handleKeyHighlight('key-alt-left');
            handleKeyHighlight('key-alt-right');
            break;
        case ' ':
            handleKeyHighlight('key-space-left');
            handleKeyHighlight('key-space-right');
            break;
        case 'Shift':
            handleKeyHighlight('key-shift-left');
            handleKeyHighlight('key-shift-right');
            break;
        case 'CapsLock':
            handleKeyHighlight('key-caps-lock');
            break;
        case 'Tab':
            handleKeyHighlight('key-tab');
            break;
        case 'AltGraph':
            handleKeyHighlight('key-altgr');
            break;

        /* Default */
        default:
            console.log("Tecla no manejada: " + event.key);
            break;
    }
}

function handleKeyHighlight(keyId) {
    const key = document.getElementById(keyId);
    if (key) {
        key.classList.add('key-pressed');
    }
}

document.addEventListener('keydown', handleKeyDown);