import { Link } from "react-router-dom"
import React from "react"
import "./components/nav/Nav.css"


export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link fs-3" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-3" to="/bugs">Bugs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-3" to="/:verb/:adjective/:noun">Words</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-3" to="/pokemon-pretty">Pokemon</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}