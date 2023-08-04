import { Link } from "react-router-dom";

import '../styles/navigation.scss';

const Navigation = () => {
    return (
        <nav>
            <div className="logo">
                IMG Placeholder
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/donate">Donate</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;