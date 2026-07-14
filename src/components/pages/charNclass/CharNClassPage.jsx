import { useState } from 'react'
import Footer from '../../layout/Footer'
import logo from '../../../assets/logos/FFXIV Logo V3.png'
import paladin from '../../../assets/job-icons/01 - Paladin/Paladin SVG.svg'
import warrior from '../../../assets/job-icons/02 - Warrior/Warrior SVG.svg'
import dragoon from '../../../assets/job-icons/03 - Dragoon/Dragoon SVG.svg'
import monk from '../../../assets/job-icons/04 - Monk/Monk - SVG.svg'
import bard from '../../../assets/job-icons/05 - Bard/Bard - SVG.svg'
import blackMage from '../../../assets/job-icons/06 - Black Mage/Black Mage - SVG.svg'
import whiteMage from '../../../assets/job-icons/07 - White Mage/White Mage - SVG.svg'
import summoner from '../../../assets/job-icons/08 - Summoner/Summoner - SVG.svg'
import scholar from '../../../assets/job-icons/09 - Scholar/Scholar - SVG.svg'
import ninja from '../../../assets/job-icons/10 - Ninja/Ninja - SVG.svg'
import darkKnight from '../../../assets/job-icons/11 - Dark Knight/Dark Knight - SVG.svg'
import machinist from '../../../assets/job-icons/12 - Machinist/Machinist - SVG.svg'
import astrologian from '../../../assets/job-icons/13 - Astrologian/Astrologian - SVG.svg'
import samurai from '../../../assets/job-icons/14 - Samurai/Samurai - SVG.svg'
import redMage from '../../../assets/job-icons/15 - Red Mage/Red Mage - SVG.svg'
import gunbreaker from '../../../assets/job-icons/16 - Gunbreaker/Gunbreaker - SVG.svg'
import dancer from '../../../assets/job-icons/17 - Dancer/Dancer - SVG.svg'
import reaper from '../../../assets/job-icons/18 - Reaper/Reaper - SVG.svg'
import sage from '../../../assets/job-icons/19 - Sage/Sage - SVG.svg'
import viper from '../../../assets/job-icons/20 - Viper/Viper - SVG.svg'
import pictomancer from '../../../assets/job-icons/21 - Pictomancer/Pictomancer - SVG.svg'
import blueMage from '../../../assets/job-icons/22 - Blue Mage/Blue Mage - SVG.svg'
//import beastmaster from '../../../assets/job-icons/23 - Beastmaster/'
import CharCard from './CharCard'
import { jobs,  } from '../../data/jobs'
import { playableRaces } from '../../data/characters'
import './CharNClass.css'

// TODO: Create layout for playable race icons and info card.

// TODO: Create layout for class icons.

// TODO: Implement playable race icon to info pane buttons

// TODO: Implement class card overlay on click

// TODO: more to come...

function CharNClass () {
    const [selectedRace, setSelectedRace] = useState(playableRaces[0]);
    const [selectedJob, setSelectedJob] = useState();

    return (
        <div id="char-page">
            <div id="char-container">
                <div id="char-gap1"/>
                <div id="logo-container">
                    <img src={logo} id="logo" alt="Final Fantasy XIV Logo" />
                </div>
                <div id="char-gap2"/>
                <div id="char">
                    <div id="char-col1" ><p></p></div>
                    <div id="char-logos">
                        <button onClick={() => setSelectedRace(playableRaces[0])} className="race-button">Hyur</button>
                        <button onClick={() => setSelectedRace(playableRaces[1])} className="race-button">Elezen</button>
                        <button onClick={() => setSelectedRace(playableRaces[2])} className="race-button">Roegadyn</button>
                        <button onClick={() => setSelectedRace(playableRaces[3])} className="race-button">Lalafell</button>
                        <button onClick={() => setSelectedRace(playableRaces[4])} className="race-button">Miqo'te</button>
                        <button onClick={() => setSelectedRace(playableRaces[5])} className="race-button">Au Ra</button>
                        <button onClick={() => setSelectedRace(playableRaces[6])} className="race-button">Viera</button>
                        <button onClick={() => setSelectedRace(playableRaces[7])} className="race-button">Hrothgar</button>
                    </div>
                    <div id="char-col2" ><p></p></div>
                    <div id="char-main">
                        <CharCard character={selectedRace}/>
                        
                    </div>
                    <div id="char-col3" ><p></p></div>
                </div>
                <div id="char-gap3" />
                <div class="class-container">
            
                    <div class="char-col4"><p></p></div>
                    <div id="class1">
                        <div id="row1">
                            <button onClick={() => setSelectedJob(jobs.mainJobs[0])} class="job-button"><img src={paladin} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[1])} class="job-button"><img src={warrior} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[2])} class="job-button"><img src={dragoon} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[3])} class="job-button"><img src={monk} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[4])} class="job-button"><img src={bard} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[5])} class="job-button"><img src={blackMage} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[6])} class="job-button"><img src={whiteMage} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[7])} class="job-button"><img src={summoner} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[8])} class="job-button"><img src={scholar} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[9])} class="job-button"><img src={ninja} /></button>
                        </div>
                        <div id="row2">
                            <button onClick={() => setSelectedJob(jobs.mainJobs[10])} class="job-button"><img src={darkKnight} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[11])} class="job-button"><img src={machinist} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[12])} class="job-button"><img src={astrologian} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[13])} class="job-button"><img src={samurai} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[14])} class="job-button"><img src={redMage} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[15])} class="job-button"><img src={gunbreaker} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[16])} class="job-button"><img src={dancer} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[17])} class="job-button"><img src={reaper} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[18])} class="job-button"><img src={sage} /></button>
                            <button onClick={() => setSelectedJob(jobs.mainJobs[19])} class="job-button"><img src={viper} /></button>
                        </div>
                    </div>
                    <div class="char-col5"><p></p></div>
                </div>
                <div class="class2-container">
                    <div class="char-col4"><p></p></div>
                    <div id="class2">
                        <button onClick={() => setSelectedJob(jobs.mainJobs[20])} class="job-button"><img src={pictomancer} /></button>
                        <button onClick={() => setSelectedJob(jobs.limitedJobs[0])} class="job-button"><img src={blueMage} /></button>
                        <button onClick={() => setSelectedJob(jobs.limitedJobs[1])} class="job-button">Beastmaster</button>
                    </div>
                    <div class="char-col5"><p></p></div>

                </div>
                <div id="char-gap4" />

            </div>
            <Footer id="char-footer"/>  
        </div>
    )
}


export default CharNClass;