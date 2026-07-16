import { useState } from 'react'
import Footer from '../../layout/Footer'
import logo from '../../../assets/logos/FFXIV Logo V3.png'
import CharCard from './CharCard'
import { jobs  } from '../../data/jobs'
import { playableRaces } from '../../data/characters'
import './CharNClass.css'
import JobCard from './JobCard'

// TODO: Create layout for playable race icons and info card.

// TODO: Create layout for class icons.

// TODO: Implement playable race icon to info pane buttons

// TODO: Implement class card overlay on click

// TODO: more to come...

function CharNClass () {
    const [selectedRace, setSelectedRace] = useState(playableRaces[0]);
    const [selectedJob, setSelectedJob] = useState(jobs.mainJobs[0]);
    const [showJobCard, setShowJobCard] = useState(false);
    const combatJobs = [...jobs.mainJobs, ...jobs.limitedJobs];

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
                        {
                            playableRaces.map((race) => (
                                <button
                                    key={race.name}
                                    className='race-button'
                                    onClick={() => setSelectedRace(race)}
                                >
                                {race.name}
                                </button>
                            ))
                        }   
                    </div>
                    <div id="char-col2" ><p></p></div>
                    <div id="char-main">
                        <CharCard character={selectedRace}/>
                        
                    </div>
                    <div id="char-col3" ><p></p></div>
                </div>
                <div id="char-gap3" />
                <div className="class-container">
            
                    <div className="char-col4"><p></p></div>
                    <div id="classes">
                        {
                            showJobCard && (
                                <div id="job-card-page-overlay" onClick={() => setShowJobCard(false)}>
                                    <div id="job-card" onClick={(event) => event.stopPropagation()}>
                                        <JobCard job={selectedJob} />
                                    </div>
                                </div>
                            )
                        }
                        <h2 id="job-section-title">Jobs</h2>
                        <div className="rows">
                            {combatJobs.slice(0, 10).map((job) => (
                                <button
                                        key={job.name}
                                        className='job-button'
                                        onClick={() => {
                                            setSelectedJob(job);
                                            setShowJobCard(true);
                                        }}
                                    >
                                        <img
                                            src={job.icon}
                                            alt={job.main}
                                        />
                                    </button>
                            ))}
                        </div>
                        <div className="rows">
                            {combatJobs.slice(10, 20).map((job) => (
                                <button
                                        key={job.name}
                                        className='job-button'
                                        onClick={() => {
                                            setSelectedJob(job);
                                            setShowJobCard(true);
                                        }}
                                    >
                                        <img
                                            src={job.icon}
                                            alt={job.main}
                                        />
                                    </button>
                            ))}
                            </div>
                            <div className="rows">
                                {combatJobs.slice(20).map((job) => (
                                <button
                                        key={job.name}
                                        className='job-button'
                                        onClick={() => {
                                            setSelectedJob(job);
                                            setShowJobCard(true);
                                        }}
                                    >
                                        <img
                                            src={job.icon}
                                            alt={job.main}
                                        />
                                    </button>
                            ))}
                            </div>
                            
                            
                            {/*
                            {
                                jobs.mainJobs.map((job) => (
                                    <button
                                        key={job.name}
                                        className='job-button'
                                        onClick={() => setSelectedJob(job)}
                                    >
                                        <img
                                            src={job.icon}
                                            alt={job.main}
                                        />
                                    </button>
                                ))
                            }
                            {
                                jobs.limitedJobs.map((job) => (
                                    <button
                                        key={job.name}
                                        className='job-button'
                                        onClick={() => setSelectedJob(job)}
                                    >
                                        <img
                                            src={job.icon}
                                            alt={job.main}
                                        />
                                    </button>
                                ))
                            } */}
                    </div>
                    <div className="char-col5"><p></p></div>
                </div>
                
                <div id="char-gap4" />

            </div>
            <Footer id="char-footer"/>  
        </div>
    )
}


export default CharNClass;