import { Link } from "react-router-dom";
import hero from "/Users/shaniquacoston/Pursuit/practice-module-3-asssesment/practic-ghilbi-app/src/assets/gilbiLogo.jpeg"
export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                
                <div className="" id="navbarSupportedContent">
                <img className="img-thumbnail" src={hero}  alt="logo"></img>
                <ul className="navbar-nav mx-center mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link fs-3" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-3" to="/films">Films</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-3" to="/people">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-3" to="/locations">Locations</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}




