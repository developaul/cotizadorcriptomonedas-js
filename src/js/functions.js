import { ui, searchObj, cryptocurrency, currency, form } from './references.js';

// FUNCTIONS
// Obtiene las criptomonedas
const obtainCryptocurrency = cryptocurrencies => new Promise( resolve => {
    resolve( cryptocurrencies );
});

// Llena el selector de criptomonedas con las 10 criptomonedas más top del momento.
const consultCryptocurrency = async () => {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    try {
        const response          = await fetch( url );
        const result            = await response.json();
        const cryptocurrencies  = await obtainCryptocurrency( result.Data );

        ui.fillCryptocurrency( cryptocurrencies );
    } catch( error ) {
        ui.showError( 'No se pudo descargar las últimas 10 criptomonedas, intente de nuevo' );
    }
}

// Obtiene los valores de los inputs
const obtainValues = event => {
    searchObj[ event.target.name ] = event.target.value;
}

// Consulta la API
const consultAPI = async () =>  {
    ui.showSpinner();

    const { moneda, criptomoneda } = searchObj;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ criptomoneda }&tsyms=${ moneda }`;

    try {
        const response  = await fetch( url );
        const result    = await response.json();
        
        ui.showCotizationHTML( result.DISPLAY[ criptomoneda ][ moneda ] );
    } catch( error ) {
        ui.showError( 'No se pudo realizar la cotización, Intente de nuevo' );
    }
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