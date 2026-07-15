// TODO: Import global card.

// TODO: Customize card for class layout

// TODO: Populate with data

// TODO: Export

// TODO: more to come...

function JobCard (props) {

    return (
        <div id="jobCard">
            <div id="bg-container">

            </div>
            <div id="job-info">









                <h2 id="job-title">{props.job.name}</h2>










                <h3>Base: {props.job.base}</h3>
                <h3>Weapon: {props.job.weapon}</h3>
                <h3>Position: {props.job.position}</h3>
                <h3>Expansion: {props.job.expansion}</h3>
            </div>
        </div>
    )
}

export default JobCard;