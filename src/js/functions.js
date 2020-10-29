import { ui, searchObj, cryptocurrency, currency, form } from './references.js';

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

// Obtiene los valores de los inputs
const obtainValues = event => {
    searchObj[ event.target.name ] = event.target.value;
}

// Consulta la API
const consultAPI = () =>  {
    ui.showSpinner();

    const { moneda, criptomoneda } = searchObj;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ criptomoneda }&tsyms=${ moneda }`;

    fetch( url )
        .then( response => response.json() )
        .then( result => { ui.showCotizationHTML( result.DISPLAY[ criptomoneda ][ moneda ] ); } );
}

// Valida el formulario
const validateForm = event => {
    event.preventDefault();

    const { moneda, criptomoneda } = searchObj;

    if( moneda === '' || criptomoneda === '' ) {
        ui.showError( 'Ambos campos son obligatorios' );
        return;
    }

    consultAPI();
}

// EVENTS
const startEventListeners = () => {
    document.addEventListener( 'DOMContentLoaded', consultCryptocurrency );

    cryptocurrency.addEventListener( 'change', obtainValues );

    currency.addEventListener( 'change', obtainValues );

    form.addEventListener( 'submit', validateForm );
}

export {
    startEventListeners
}