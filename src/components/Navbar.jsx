import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    
    const [display, setDisplay] = useState(false);

    console.log("nav " + display)

    function handleDisplay() {
        if(!display) {
            setDisplay(true);
        }
        else {
            setDisplay(false);
        }
    }
    const menu = (display) => {

        if(display) {
            return (
                <div className="HambMenu">
                    <div className="first-btn">
                        <ul>
                            <li><button type="button">New Sets</button></li>
                            <li><button type="button">Sets By Theme</button></li>
                            <li><button type="button">Best Sellers</button></li>
                        </ul>
                    </div>
                </div>
            );
        }
    }

    return (
        <nav className="Navbar">
            <div>
                <NavLink to="/"><img src="images/lego-logo.svg" alt="" /></NavLink>
            </div>
            <div className="first-btn-out">
                <button className="btn-menu-out" type="button" onClick={() => handleDisplay()}>explore</button>       
                {menu(display)}
            </div>        
        </nav>
    );
}