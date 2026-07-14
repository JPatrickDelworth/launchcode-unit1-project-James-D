// CONCEPT 1
import { useNavigate } from 'react-router-dom';
import './Layout.css'
// TODO: more to come...

function Header () {
    const navigate = useNavigate();
    return (
        <div>
            <div id="header">
                <div id="button-container">
                    <button onClick={() => navigate("/")} className="header-button">Home</button>
                    <button onClick={() => navigate("/char")} className="header-button">Races/Classes</button>
                    <button onClick={() => navigate("/price")} className="header-button">Price and Fees</button>
                    
                </div>
            </div>
        </div>
    );
}

export default Header;



/*====================================================================================================================*/

// CONCEPT 2

// TODO: Create vertical layout on left side of page.

// TODO: Add four buttons vertically in the center of the header.

// TODO: Add copyright info at the bottom center of the vertical header.

// TODO: Route the buttons to the appropriate pages.

// TODO: Export.

// TODO: more to come...