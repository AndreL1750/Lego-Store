import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {

    const [selectedTheme, setSelectedTheme] = useState(null);

    const handleThemeSelect = (theme) => {
        setSelectedTheme(theme);
    };

    return (
        <header className="Header">
            <Navbar handleThemeSelect={handleThemeSelect} selectedTheme={selectedTheme} />
        </header>
    );
}