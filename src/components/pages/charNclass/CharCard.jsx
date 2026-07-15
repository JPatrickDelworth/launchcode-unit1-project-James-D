import './CharCard.css'
// TODO: Import global card.
// TODO: Customize card for character layout

// TODO: Populate with data

// TODO: Export

// TODO: more to come...


function CharCard (props) {

    return (
        <div id="char-card">
            <div id="content-container">
                <h2 id="race-name">{props.character.name}</h2>
                <div className="content-orientation">
                    <p id="background" className="info">{props.character.overview}</p>
                </div>
                <div className="content-orientation">
                    <p id="naming-convention" className="info">{props.character.namingConvention}</p>
                </div>
                <div id="clan-container">
                    <h4 id="clan-title">Clans</h4>
                    <div id="clans">
                        <button className="clan">{props.character.sub1}</button>
                        <button className="clan">{props.character.sub2}</button>
                    </div>
                </div>
            </div>
            {/*TODO: Find out if "alt" below actually works. */}
            <div className="photo"><img src={props.character.art} alt={props.character.name} /></div>

        </div>
    )
}


export default CharCard;