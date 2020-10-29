import { ui } from './references.js';

// FUNCTIONS
// Obtiene las criptomonedas
const obtainCryptocurrency = cryptocurrencies => new Promise( resolve => {
    resolve( cryptocurrencies );
});

// Llena el selector de criptomonedas con las 10 criptomonedas más top del momento.
const consultCryptocurrency = () => {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    fetch( url )
        .then( response => response.json() )
        .then( result => obtainCryptocurrency( result.Data ) )
        .then( cryptocurrencies => ui.fillCryptocurrency( cryptocurrencies ) );
}


// EVENTS
const startEventListeners = () => {
    document.addEventListener( 'DOMContentLoaded', consultCryptocurrency );
}

export {
    startEventListeners
}