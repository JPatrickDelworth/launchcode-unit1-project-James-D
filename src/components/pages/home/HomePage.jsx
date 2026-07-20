import Footer from '../../layout/Footer'
import logo from '../../../assets/logos/FFXIV Logo V3.png'
import './Home.css'
import { hook } from '../../data/overview'
import ExpansionSection from "../../pages/home/ExpansionSection"
import plotHook from '../../../assets/hook/Hook Image.png'
import Gallery from './Gallery'

function Home () {

    return (
        <div id="home-page">
            <div className="home-container">
                <div className="home-gap" />
                <div id="logo-container">

                        <img src={logo} id="logo" alt="Final Fantasy XIV Title Logo" />

                </div>
                <div className="home-gap" />
                <div id="overview">
                    <div className="text-container">
                        <p className="hook">{hook.gameplay}</p>
                    </div>
                </div>
                <div className="home-gap" />
                <div id="img-hook">
                    <img src={plotHook} id="personal-image" alt="Schelt Adalweise" />
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
                <div className="home-gap" />
                <div id="expansions">
                    <ExpansionSection />
                </div>
                <div className="home-gap" />
            </div>
            <Footer id="home-footer" />
        </div>
    );
}


export default Home
