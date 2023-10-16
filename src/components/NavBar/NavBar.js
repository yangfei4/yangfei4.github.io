import React from "react";
import './NavBar.scss';

const NavBar = () => {
    return (
        <header>
            <div class="header-title">
                <h2>YANGFEI PROFILE</h2>
            </div>
            <nav>
                <a href="#about" class="navbar-item active">About</a>
                <a href="#projects" class="navbar-item">Projects</a>
                <a href="#moments" class="navbar-item">Moments</a>
                <a href="#contact" class="navbar-item">Contact</a>
            </nav>
        </header>
    );
};

export default NavBar;