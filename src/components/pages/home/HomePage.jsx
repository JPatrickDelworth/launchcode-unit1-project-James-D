import Footer from '../../layout/Footer'
import logo from '../../../assets/logos/FFXIV Logo V3.png'
import './Home.css'
import { hook } from '../../data/overview'

// TODO: Place big image hook.

// TODO: Create image gallery.

// TODO: Implement expansion cards.

//TODO: Edit gameplay hook text.

// TODO: more to come...

function Home () {

    return (
        <div id="home-page">
            <div className="home-container">
                <div id="home-gap1" />
                <div id="logo-container">

                        <img src={logo} id="logo" alt="Final Fantasy XIV Title Logo" />

                </div>
                <div id="home-gap2" />
                <div id="overview">
                    <div className="text-container">
                        <p className="hook">{hook.gameplay}</p>
                    </div>
                </div>
                <div id="home-gap3" />
                <div id="img-hook">
                    <div id="img-standin"><p>Plot Image</p></div>
                </div>
                <div id="plot">
                    <div className="text-container">
                        <p className="hook">{hook.plot}</p>
                    </div>
                </div>
                <div id="gallery">
                    <div id="gallery-container">
                        <p>Image Gallery</p>
                    </div>
                </div>
                <div id="home-gap4" />
                <div id="expansions">
                    <p>Expansion Cards</p>
                </div>
                <div id="home-gap5" />
            </div>
            <Footer id="home-footer" />
        </div>
    );
}


export default Home
