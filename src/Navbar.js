import React from "react";
import "./App.css";


class Navbar extends React.Component {
    
    render() {
        return (
            <div>
            <div className="nav">
                <ul className="topnav" id="dropdownClick">
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                    <li className="topnav-right"><a href="#signup">Sign In</a></li>
                    <li className="topnav-right"><a href="#signup">Sign Up</a></li>
          
                </ul>
            </div>
            <div>
            <h1>9 eye</h1>
            </div>
            </div>
        );
    }

}
export default Navbar;