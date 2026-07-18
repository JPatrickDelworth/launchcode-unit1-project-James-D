import Footer from '../../layout/Footer'
import logo from '../../../assets/logos/FFXIV Logo V3.png'
import { useState } from 'react'
import { dataRegions } from '../../data/datacenters'
import { fees } from '../../data/fees'
import './Price.css'

// TODO: Create free trial vs paid sub table.

// TODO: Add data to free trial vs paid sub table.

// TODO: Create price and fees table.

// TODO: Add data to price and fees table.

// TODO: more to come...

function Price () {

    const regions = Object.values(dataRegions);
    const [showUpgradePopup, setShowUpgradePopup] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState(dataRegions.na);

    return (
        <div id="price-page">
            
            <div id="price-container">
                <div id="logo-container">
                    <img src={logo} id="logo" alt="Final Fantasy XIV Title Logo"/>
                </div>
                <div id="vs-container">
                    <p>Vs Table</p>
                </div>
                <div id="fees-container">
                    <h2 className="price-page-title"> Game Editions</h2>
                    <div className="price-card">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Edition</th>
                                        <th>Price</th>
                                        <th>Includes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fees.gameCost.map((game) => (
                                        <tr key={game.name}>
                                            <td>{game.name}</td>
                                            <td>{game.price}</td>
                                            <td>{game.contains}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div id="upgrade-note-container">
                                <p id="upgrade-note">{fees.upgrade.note}</p>
                                <button id="upgrade-btn" onClick={() => setShowUpgradePopup(true)}> View Collector's Edition Upgrades</button>
                                { showUpgradePopup && (
                                    <div className="popup-overlay" onClick={() => setShowUpgradePopup(false)}>
                                        <div id="upgrade-popup" onClick={(event) => event.stopPropagation()}>
                                            <div id="upgrade-title-container">
                                                <h3 className="price-page-title">Collector's Edition Digital Upgrades</h3>
                                                <h5 id="upgrade-subtitle">Purchasing The Complete Collector's Edition Includes All The Below Upgrades</h5>
                                            </div>
                                                {fees.upgrade.editions.map((upgrade) => (
                                                    <div className="upgrade-card" key={upgrade.name}>
                                                        <div className="upgrade-header">
                                                            <h4 className="upgrade-title">{upgrade.name}</h4>
                                                            <span className="price-badge">{upgrade.price}</span>
                                                        </div>
                                                        
                                                        
                                                        <p className="upgrade-points"><strong>Includes:</strong></p>
                                                        <ul className="upgrade-points">
                                                            {upgrade.contains.map((item) => (
                                                                <li key={item}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            <div id="close-btn-container">

                                                <button id="close-btn" onClick={() => setShowUpgradePopup(false)}>Close</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                    </div>
                    <h2 className="price-page-title">Subscription Fees</h2>
                    <div className="price-card">
                        <table>
                            <thead>
                                <tr>
                                    <th>Tier</th>
                                    <th>Length</th>
                                    <th>Price</th>
                                    <th>Characters / Server</th>
                                    <th>Characters / Data Center</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fees.subscription.map((subscription) => (
                                    subscription.subLength.map((length, index) => (
                                        <tr>
                                            <td>{subscription.tier}</td>
                                            <td>{length}</td>
                                            <td>{subscription.price[index]}</td>
                                            <td>{subscription.charPerSrvr}</td>
                                            <td>{subscription.charPerDC}</td>
                                        </tr>
                                    ))
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h2 className="price-page-title">Services</h2>
                    <div id="services-container">
                        {fees.services.map((service) => (
                            <div className="service-card" key={service.name}>

                                <div className="service-header">
                                <h4 className="service-title">{service.name}</h4>
                                <span className='price-badge'>{service.price}</span>
                                </div>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                        <div id="services-note-container">
                            <p className="service-blurb">* Free of charge if transferring to a Preferred+ World or if transferring from a Congested World to a Preferred World</p>
                            <p className="service-blurb">** Per retainer per month</p>
                            <p className="service-blurb">*** Per month</p>
                        </div>
                    </div>
                </div>
                <div id="region-container">
                    <h2 className="price-page-title">Data Centers</h2>
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
            </div>
            <Footer id="price-footer"/>
        </div>
    );
}

export default Price;