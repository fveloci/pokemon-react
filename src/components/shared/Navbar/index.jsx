import "./index.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate()
    return (
        <header id="navbar">
            <h1 onClick={() => navigate('/')}>Pokemon</h1>
        </header>
    );
}

export default Navbar;