import UI from './classes/ui.class.js';

// References
export const form              = document.querySelector( '#formulario' ),
             currency          = document.querySelector( '#moneda' ),
             cryptocurrency    = document.querySelector( '#criptomonedas' ),
             result            = document.querySelector( '#resultado' );

// Instances
export const ui = new UI();
