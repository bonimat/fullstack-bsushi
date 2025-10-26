import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Fullstack BSushi</span>
            </div>
            </nav>
        );
    }
}   

export default Navbar;
