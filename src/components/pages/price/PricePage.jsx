import Footer from '../../layout/Footer'
import logo from '../../../assets/logos/FFXIV Logo V3.png'
import { useState } from 'react'
import { dataRegions } from '../../data/datacenters'
import './Price.css'

// TODO: Create free trial vs paid sub table.

// TODO: Add data to free trial vs paid sub table.

// TODO: Create price and fees table.

// TODO: Add data to price and fees table.

// TODO: more to come...

function Price () {

    const regions = Object.values(dataRegions);
    const [selectedRegion, setSelectedRegion] = useState(dataRegions.na);

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
                    <h2 id="datacenter-head">Data Centers</h2>
                    <div id="region-button-container">
                        {
                            regions.map((region) => (
                                <button className="region-button" key={region.region} onClick={() => setSelectedRegion(region)}>
                                    {region.region}
                                </button>
                            ))
                        }

                    </div>
                </div>
                <div id="price-gap5"></div>
                <div id="server-container">
                    {
                        selectedRegion.datacenter.map((datacenter) => (
                           <div key={datacenter.name} className="datacenter-card">

                                <h2 className="datacenter-title">{datacenter.name}</h2>
                                
                                <div className="world-list">
                                    {
                                        datacenter.worlds.map ((world) => (
                                            <p key={world} className="world-name">
                                                {world}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }  
                </div>
                <div id="price-gap6"></div>
            </div>
            <Footer id="price-footer"/>
        </div>
    );
}

export default Price;