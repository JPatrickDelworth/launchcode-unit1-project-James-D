import Footer from '../../layout/Footer'
import logo from '../../../assets/logos/FFXIV Logo V3.png'
import './Home.css'
import { hook } from '../../data/overview'
import ExpansionSection from "../../pages/home/ExpansionSection"
import plotHook from '../../../assets/hook/Hook Image.png'
import Gallery from './Gallery'

// TODO: Place big image hook.

// TODO: Create image gallery.

//TODO: Edit gameplay hook text.

//TODO: Format gameplay and plot text.

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
                    <img src={plotHook} id="personal-image"/>
                </div>
                <div id="plot">
                    <div className="text-container">
                        <p className="hook">{hook.plot}</p>
                    </div>
                </div>
                <div id="gallery">
                    <div id="gallery-container">
                        <Gallery />
                    </div>
                </div>
                <div id="home-gap4" />
                <div id="expansions">
                    <ExpansionSection />
                </div>
                <div id="home-gap5" />
            </div>
            <Footer id="home-footer" />
        </div>
    );
}


export default Home
