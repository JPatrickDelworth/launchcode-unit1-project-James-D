
import { useNavigate } from 'react-router-dom';
import './Layout.css'

function Header () {
    const navigate = useNavigate();
    return (
        <div>
            <div id="header">
                <div id="button-container">
                    <button onClick={() => navigate("/")} className="header-button">Home</button>
                    <button onClick={() => navigate("/char")} className="header-button">Races & Jobs</button>
                    <button onClick={() => navigate("/price")} className="header-button">Price & Fees</button>
                    
                </div>
            </div>
        </div>
    );
}

export default Header;