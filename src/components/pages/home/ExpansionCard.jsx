import "./ExpansionCard.css";

function ExpansionCard ({ expansion, expanded, onClick}) {
    return (
        <div
            className={`expansion-card ${expanded ? "expanded" : ""}`}
            onClick={onClick}
        >
            <div className="expansion-logo">
                <img
                src={expansion.logo}
                alt={expansion.name}
                className={expanded ? "expanded-logo" : "collapsed-logo"}
                />
            </div>

            {expanded && (
                <div className="expansion-overall">
                    <div className="expansion-details-container">
                        <p className="expansion-details"><strong>Release:</strong> {expansion.release}</p>

                        <p className="expansion-details"><strong>Level Cap:</strong> {expansion.maxLvl}</p>

                        <div className="expansion-jobs">
                            <p className="expansion-jobs"><strong>Jobs:</strong> {expansion.addedJobs.join(", ")}</p>
                        </div>
                    </div>

                        <h3 className="expansion-overview-heading">Overview</h3>
                        <p className="expansion-overview-details">{expansion.personalDescription}</p>
                </div>
            )}
        </div>
    );
}

export default ExpansionCard;