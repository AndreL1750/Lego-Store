import Navbar from "./Navbar";

export default function Header({ handleThemeSelect, selectedTheme, handleText, text }) {

    

    return (
        <header className="Header">
            <Navbar handleText={handleText} text={text} handleThemeSelect={handleThemeSelect} selectedTheme={selectedTheme} />
        </header>
    );
}