import { cryptocurrency, result } from "../references";

class UI {

    fillCryptocurrency( cryptocurrencies ) {
        cryptocurrencies.forEach( crypto => {
            const { FullName, Name } = crypto.CoinInfo;

            const option        = document.createElement( 'option' );
            option.textContent  = FullName;
            option.value        = Name;

            cryptocurrency.appendChild( option );
        });
    }

    showError( message ) {
        const existAlert = document.querySelector( '.error' );

        if( !existAlert ) {
            const divMessage = document.createElement( 'div' );
            divMessage.classList.add( 'error' );
            divMessage.textContent = message;

            result.appendChild( divMessage );
            setTimeout( () => {
                divMessage.remove();
            }, 3000 );
        }
    }

}

export default UI;