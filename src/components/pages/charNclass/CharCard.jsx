import './CharCard.css'
// TODO: Import global card.
// TODO: Customize card for character layout

// TODO: Populate with data

// TODO: Export

// TODO: more to come...


function CharCard (props) {

    return (
        <div className="charCard">
            <div id="content-container">
                <h2 id="race-name">{props.character.name}</h2>
                <div className="content-orientation">
                    <p id="background" className="info">{props.character.overview}</p>
                </div>
                <div className="content-orientation">
                    <p id="naming-convention" className="info">{props.character.namingConvention}</p>
                </div>
                <div id="clan-container">
                    <button id="clan1">{props.character.sub1}</button>
                    <button id="clan2">{props.character.sub2}</button>
                </div>
            </div>
            <div className="photo">Photo</div>

        </div>
    )
}


export default CharCard;