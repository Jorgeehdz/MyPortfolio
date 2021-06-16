import React from 'react';
import './navbar.css';

function Navbar({ isScrolling }) {

    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    return (
        <nav className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>Jorge Alberto Hernandez Sanchez</div>
        </nav >
    )
}

export default Navbar