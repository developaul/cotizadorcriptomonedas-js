import { cryptocurrency } from "../references";

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

}

export default UI;