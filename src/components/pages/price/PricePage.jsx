import Footer from '../../layout/Footer'
import logo from '../../../../public/logos/FFXIV Logo V3.png'
import './Price.css'

// TODO: Create free trial vs paid sub table.

// TODO: Add data to free trial vs paid sub table.

// TODO: Create price and fees table.

// TODO: Add data to price and fees table.

// TODO: Add region buttons.

// TODO: Add server cards.

// TODO: more to come...

function Price () {


    return (
        <div id="price-page">
            
            <div id="price-container">
                <div id="price-gap1"></div>
                <div id="logo-container">
                    <img src={logo} id="logo" alt="Final Fantasy XIV Title Logo"/>
                </div>
                <div id="price-gap2"></div>
                <div id="vs-container">
                    <p>Vs Table</p>
                </div>
                <div id="price-gap3"></div>
                <div id="fees-container">
                    <p>Fees Table</p>
                </div>
                <div id="price-gap4"></div>
                <div id="region-container">
                    <p>Region Buttons</p>
                </div>
                <div id="price-gap5"></div>
                <div id="server-container">
                    <p>Server List</p>
                </div>
                <div id="price-gap6"></div>
            </div>
            <Footer id="price-footer"/>
        </div>
    );
}

export default Price;