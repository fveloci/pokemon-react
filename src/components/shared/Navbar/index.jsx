import "./index.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate()
    return (
        <header id="navbar">            
            <img id="navbar-image" onClick={() => navigate('/')} alt="pokemon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"></img>            
        </header>
    );
}

export default Navbar;