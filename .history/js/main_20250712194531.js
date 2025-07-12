/*
         * Lógica JavaScript para la interacción de la carta
         */

        // Obtiene referencias a los elementos HTML por su ID
        const openLetterButton = document.getElementById('openLetterButton');
        const cover = document.getElementById('cover');
        const mainCard = document.getElementById('mainCard');
        const revealButton = document.getElementById('revealButton');
        const secretMessage = document.getElementById('secretMessage');

        // Agrega un "event listener" al botón de la cubierta
        // Cuando se hace clic en este botón, la cubierta se oculta y la carta principal se muestra.
        openLetterButton.addEventListener('click', function() {
            cover.classList.add('hide'); // Añade la clase 'hide' para ocultar la cubierta
            mainCard.classList.add('show'); // Añade la clase 'show' para mostrar la carta principal
        });

        // Agrega un "event listener" al botón para revelar el mensaje secreto
        // Alterna la visibilidad del mensaje secreto al hacer clic.
        revealButton.addEventListener('click', function() {
            if (secretMessage.classList.contains('show')) {
                // Si el mensaje secreto ya está visible, lo oculta
                secretMessage.classList.remove('show');
                this.textContent = '¡Haz clic para un mensaje secreto!'; // Cambia el texto del botón
            } else {
                // Si el mensaje secreto está oculto, lo muestra
                secretMessage.classList.add('show');
                this.textContent = 'Ocultar mensaje secreto'; // Cambia el texto del botón
            }
        });

        // Función para ajustar el tamaño del lienzo (no se usa directamente en esta carta,
        // pero es una buena práctica para aplicaciones con elementos <canvas>)
        function setCanvasSize() {
            // En este caso, la responsividad se maneja principalmente con CSS.
            // Si hubiera un elemento <canvas>, aquí se ajustarían sus dimensiones.
        }

        // Llama a setCanvasSize cuando la ventana se carga y cuando se redimensiona
        window.onload = setCanvasSize;
        window.onresize = setCanvasSize;