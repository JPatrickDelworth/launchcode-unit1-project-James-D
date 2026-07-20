import './JobCard.css'

function JobCard (props) {

    return (
        <div id="jobCard">
            <div id="bg-container">
                <img src={props.job.art} alt={props.job.name} />
            </div>
            <div id="job-info">
                <h2 id="job-title">{props.job.name}</h2>
                <div id="job-stats">
                    <p className="job-points">Class: {props.job.base}</p>
                    <p className="job-points">Weapon: {props.job.weapon}</p>
                    <p className="job-points">Position: {props.job.position}</p>
                    <p className="job-points">Expansion: {props.job.expansion}</p>
                </div>
                <div id="description-container">
                    <p id="job-description">{props.job.description}</p>
                </div>
            </div>
        </div>
    )
}

export default JobCard;