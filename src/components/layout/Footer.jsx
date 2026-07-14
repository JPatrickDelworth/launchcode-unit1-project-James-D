// CONCEPT 1
import { useNavigate } from 'react-router-dom';
import './Layout.css'

// TODO: more to come...

function Footer () {
    const navigate = useNavigate();

    return (
        <div id="footer">
            <div id="button-container">
                <button onClick={() => navigate("/about")} className="header-button">About</button>
            </div>
            <div id="copyright-container">&copy; J Patrick Delworth 2026</div>
        </div>
    );
}

export default Footer;



/*====================================================================================================================*/

// CONCEPT 2

// TODO: N/A