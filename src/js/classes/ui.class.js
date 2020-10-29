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
            this.cleanHTML();

            const divMessage = document.createElement( 'div' );
            divMessage.classList.add( 'error' );
            divMessage.textContent = message;

            result.appendChild( divMessage );
            setTimeout( () => {
                divMessage.remove();
            }, 3000 );
        }
    }

    showCotizationHTML( cotization ) {
        this.cleanHTML();

        const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotization;

        const price = document.createElement( 'p' );
        price.classList.add( 'precio' );
        price.innerHTML = `El precio es: <span>${ PRICE }</span>`;
    
        const highPrice = document.createElement( 'p' );
        highPrice.innerHTML = `<p>Precio más alto del día <span>${ HIGHDAY }</span></p>`;
    
        const lowPrice = document.createElement( 'p' );
        lowPrice.innerHTML = `<p>Precio más bajo del día <span>${ LOWDAY }</span></p>`;
    
        const lastHours = document.createElement( 'p' );
        lastHours.innerHTML = `<p>Variación últimas 24 horas <span>${ CHANGEPCT24HOUR }%</span></p>`;
    
        const lastUpdate = document.createElement( 'p' );
        lastUpdate.innerHTML = `<p>Última Actualización <span>${ LASTUPDATE }</span></p>`;

        result.appendChild( price );
        result.appendChild( highPrice );
        result.appendChild( lowPrice );
        result.appendChild( lastHours );
        result.appendChild( lastUpdate );
    }

    showSpinner() {
        this.cleanHTML();

        const divSpinner = document.createElement( 'div' );
        divSpinner.classList.add( 'spinner' );
        divSpinner.innerHTML = `
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        `;

        result.appendChild( divSpinner );
    }

    cleanHTML() {
        while( result.firstChild ) {
            result.removeChild( result.firstChild );
        }
    }

}

export default UI;