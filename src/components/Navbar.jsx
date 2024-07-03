import { useEffect, useState } from "react";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";

export default function Navbar({ handleThemeSelect, selectedTheme, handleText, text }) {
    
    const [menuStatus, setMenuStatus] = useState(false);
    
    const [border1, setBorder1] = useState(false);
    const [border2, setBorder2] = useState(false);
    const [border3, setBorder3] = useState(false);
    
    const [displayContent1, setDisplayContent1] = useState(false);
    const [displayContent2, setDisplayContent2] = useState(false);
    const [displayContent3, setDisplayContent3] = useState(false);
    
    const handleDisplayContent1 = () => {setDisplayContent1(!displayContent1); setDisplayContent2(false); setDisplayContent3(false); setBorder1(!border1); setBorder2(false); setBorder3(false); setMenuStatus(!border1);};   
    const handleDisplayContent2 = () => {setDisplayContent2(!displayContent2); setDisplayContent1(false); setDisplayContent3(false); setBorder2(!border2); setBorder1(false); setBorder3(false); setMenuStatus(!border2);};   
    const handleDisplayContent3 = () => {setDisplayContent3(!displayContent3); setDisplayContent1(false); setDisplayContent2(false); setBorder3(!border3); setBorder1(false); setBorder2(false); setMenuStatus(!border3);};  
    
    const content1 = !displayContent1 ? "none" : "block";
    const content2 = !displayContent2 ? "none" : "block";
    const content3 = !displayContent3 ? "none" : "block";
    
    const borderDisplay1 = !border1 ? "none" : "2px solid #000" ;
    const borderDisplay2 = !border2 ? "none" : "2px solid #000" ;
    const borderDisplay3 = !border3 ? "none" : "2px solid #000" ;

    // Content1
    const [themeStatus, setThemeStatus] = useState(false);
    const [ageStatus, setAgeStatus] = useState(false);
    const [priceStatus, setPriceStatus] = useState(false);
    const [prodStatus, setProdStatus] = useState(false);
    const [intStatus, setIntStatus] = useState(false);
    const [pabStatus, setPabStatus] = useState(false);

    
    const menuDisplay = !menuStatus ? "none" : "block";
    const themeDisplay = !themeStatus ? "none" : "block";
    const ageDisplay = !ageStatus ? "none" : "block"; 
    const priceDisplay = !priceStatus ? "none" : "block";
    const prodDisplay = !prodStatus ? "none" : "block";
    const intDisplay = !intStatus ? "none" : "block";
    const pabDisplay = !pabStatus ? "none" : "block";

    
    const handleThemeBtn = () => {setThemeStatus(!themeStatus); setAgeStatus(false); setPriceStatus(false); setProdStatus(false); setIntStatus(false); setPabStatus(false);};
    const handleAgeBtn = () => {setAgeStatus(!ageStatus); setThemeStatus(false); setPriceStatus(false); setProdStatus(false); setIntStatus(false); setPabStatus(false);};
    const handlePriceBtn = () => {setPriceStatus(!priceStatus); setThemeStatus(false); setAgeStatus(false); setProdStatus(false); setIntStatus(false); setPabStatus(false);};
    const handleProdBtn = () => {setProdStatus(!prodStatus); setThemeStatus(false); setAgeStatus(false); setPriceStatus(false); setIntStatus(false); setPabStatus(false);};
    const handleIntBtn = () => {setIntStatus(!intStatus); setThemeStatus(false); setAgeStatus(false); setPriceStatus(false); setProdStatus(false); setPabStatus(false);};
    const handlePabBtn = () => {setPabStatus(!pabStatus); setThemeStatus(false); setAgeStatus(false); setPriceStatus(false); setProdStatus(false); setIntStatus(false);};
    
    // Content2
    const [valStatus, setValStatus] = useState(false);
    const [appStatus, setAppStatus] = useState(false);
    const [magStatus, setMagStatus] = useState(false);

    const handleValBtn = () => {setValStatus(!valStatus); setAppStatus(false); setMagStatus(false);};
    const handleAppBtn = () => {setAppStatus(!appStatus); setValStatus(false); setMagStatus(false);};
    const handleMagBtn = () => {setMagStatus(!magStatus); setValStatus(false); setAppStatus(false);};

    const valDisplay = !valStatus ? "none" : "block";
    const appDisplay = !appStatus ? "none" : "block";
    const magDisplay = !magStatus ? "none" : "block";

    const [contentMaxWidth, setContentMaxWidth] = useState("");

    useEffect(() => {
        if(themeStatus) {
            setContentMaxWidth("1500px");
        }
        else if(intStatus) {
            setContentMaxWidth("1300px");
        }
        else {
            setContentMaxWidth("1200px");
        }
    }, [themeStatus, intStatus]);

    function menuClose() {
        setDisplayContent1(false); 
        setDisplayContent2(false); 
        setDisplayContent3(false); 
        setBorder1(false); 
        setBorder2(false); 
        setBorder3(false); 
        setMenuStatus(false);
    }

    const handleChange = (event) => {
        handleText(event.target.value);
    };

    const [inputStatus, setInputStatus] = useState(false);

    const inputDisplay = inputStatus ? "block" : "none";

    const url = ["Architecture", "Ideas", "Marvel", "Batman", "Jurassic-World", "Minecraft", "The-Botanical-Collection", "LEGO-Animal-Crossing", "Minifiguras", "BrickHeadz", "LEGO-Art", "NINJAGO", "City", "LEGO-Avatar", "Powered-UP", "Classic", "LEGO-Braille-Bricks", "SERIOUS-PLAY", "Creator-3in1", "LEGO-DREAMZzz™", "Sonic-the-Hedgehog", "Creator-Expert", "LEGO-DUPLO", "Speed-Champions", "DC", "LEGO-Education", "Spider-Man", "Gru-O-Maldisposto-4", "Star-Wars", "Disney", "LEGO-Icons", "Technic"];

    const themesarr = ["Architecture", "Ideas", "Marvel", "Batman", "Jurassic World", "Minecraft", "A Coleção Botânica", "LEGO Animal Crossing", "Minifiguras", "BrickHeadz", "LEGO Art", "NINJAGO", "City", "LEGO Avatar", "Powered UP", "Classic", "LEGO Braille Bricks", "SERIOUS PLAY", "Creator 3in1", "LEGO DREAMZzz™", "Sonic the Hedgehog", "Creator Expert", "LEGO DUPLO", "Speed Champions", "DC", "LEGO Education", "Spider-Man", "Gru: O Maldisposto 4", "Star Wars", "Disney", "LEGO Icons", "Technic" ];

    console.log(inputStatus);
    

    return (
        <nav className="Navbar">
            <div className="menu-wrapper">
                <div>
                    <div className="Nav-Btn">
                        <NavLink className="logo" to="/">
                            <svg viewBox="0 0 180 180" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.223 1.204V178.8H178.82l-.001-177.596H1.223Z" fill="#fff"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.223 178.8V1.204h177.595l.001 177.596H1.223Zm162.171-86.743c1.555-4.606 3.316-11.5 3.606-17.033.221-4.174-.341-10.02-4.278-14.174-3.141-3.319-7.94-4.994-14.264-4.994-7.989 0-14.426 2.82-19.136 8.397l-1.243 1.466-.826-1.734c-.674-1.413-1.156-1.992-1.89-2.82-3.219-3.642-8.617-5.488-16.044-5.487-6.804 0-12.95 2.039-17.308 5.742l-1.103.937-.76-1.237c-2.058-3.345-7.188-5.51-13.065-5.51-8.456.002-16.988 1.15-22.135 9.447l-2.133 3.424-.167-4.033c-.13-3.12-.415-4.416-1.866-5.952-1.596-1.693-4.282-2.516-8.21-2.513-5.768 0-10.103 2.515-13.256 7.694-4.853 7.752-16.583 33.25-16.324 45.369.17 7.865 5.418 12.679 14.043 12.878 7.108.172 12.758-1.652 16.347-5.274l.916-.926.88.952c3.226 3.502 8.13 5.432 13.811 5.432 7.234 0 13.42-2.248 16.973-6.171l.97-1.069.912 1.121c3.326 4.086 8.466 6.228 14.863 6.202 8.343-.037 16.135-3.871 21.376-10.512l1.374-1.741.767 2.083c3.23 8.783 11.984 10.092 16.921 10.095 16.765 0 24.005-11.503 30.249-30.059Z" fill="#FFED00"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.223 178.8V1.204h177.595l.001 177.596H1.223Zm163.283-73.742c2.321-4.784 6.688-16.757 7.495-23.222l.009-.071c.984-7.892 1.915-15.36-3.41-22.781-3.786-5.274-10.237-8.813-20.052-8.814-7.419 0-14.045 2.01-19.343 6.416-4.537-4.49-11.044-6.528-19.802-6.526-6.853 0-12.605 1.567-17.614 4.574-3.636-2.889-7.904-4.694-14.704-4.694-6.164-.001-14.818.32-21.347 5.863-1.509-3.079-4.577-5.497-13.04-5.497-7.796 0-14.156 3.688-18.327 10.535-5.569 8.895-17.39 34.582-17.088 48.614.225 10.563 8.146 17.84 19.62 18.113 6.895.161 12.767-1.315 17.248-4.289 4.052 2.92 9.23 4.497 14.984 4.497 6.886.001 13.098-1.807 17.704-5.053 4.173 3.308 9.648 5.096 15.842 5.096 8.036.003 15.503-2.772 21.535-8.051 4.114 5.246 11.162 7.973 19.721 7.974 16.023.001 24.346-9.854 30.569-22.684Z" fill="#E3000B"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 180V0h180l-.003 179.997L0 180Zm177.52-2.479.002-175.043H2.476L2.48 177.52h175.04Z"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M167.615 54.301a4.305 4.305 0 0 1 4.309-4.313 4.307 4.307 0 0 1 4.315 4.313 4.304 4.304 0 0 1-4.315 4.312 4.302 4.302 0 0 1-4.309-4.312Zm4.311-3.457c1.918.001 3.477 1.545 3.472 3.463.005 1.918-1.56 3.467-3.472 3.467a3.458 3.458 0 0 1-3.453-3.467 3.448 3.448 0 0 1 3.453-3.463Zm1.679 4.81.515.9-1.117.007-.357-.73a3.643 3.643 0 0 0-.609-.874c-.176-.183-.337-.229-.734-.229l-.164.001-.002 1.83h-.921v-4.467h2.225c.959 0 1.409.535 1.409 1.243.002.675-.454 1.16-1.208 1.25l.002.025c.383.133.51.258.961 1.044Zm-2.469-2.868v1.227h.933c.624 0 .83-.304.821-.62 0-.394-.313-.61-.921-.61l-.833.003Zm-42.77 10.664c4.348-5.15 10.782-8.839 20.086-8.839 16.105 0 20.318 10.53 19.79 20.48-.313 5.98-2.232 13.104-3.666 17.365-6.37 18.931-14.02 30.902-31.43 30.9-7.945.002-15.216-3.098-18.081-10.908-5.233 6.622-13.231 10.944-22.35 10.989-6.97.034-12.39-2.429-15.835-6.66-4.09 4.514-11.011 6.581-17.89 6.583-6.18-.004-11.34-2.157-14.727-5.835-3.774 3.806-9.704 5.826-17.257 5.649-9.675-.232-15.08-6.037-15.258-14.095-.266-12.474 11.614-38.226 16.511-46.045 3.38-5.547 8.075-8.27 14.31-8.273 3.423.003 6.938.598 9.111 2.9 1.787 1.89 2.074 3.57 2.206 6.75 5.48-8.83 14.716-10.03 23.19-10.028 6.484 0 11.866 2.427 14.124 6.096 4.346-3.694 10.605-6.038 18.113-6.038 7.685.001 13.41 1.876 16.974 5.908.786.885 1.345 1.562 2.079 3.102ZM43.59 106.915c.286-3.016-1.973-6.273-10.986-4.709.895-2.005 2.226-4.753 3.737-7.873v-.001C41.183 84.334 47.874 70.519 48 65.114c.068-2.665-1.006-4.887-5.328-4.885-4.566-.002-7.43 1.908-9.776 5.762-5.088 8.125-15.893 32.635-15.666 43.229.128 6.056 4.823 8.446 10.04 8.568 7.19.167 15.472-1.852 16.321-10.874Zm18.35-13.03c-.6 1.614-1.728 4.994-2.639 8.571 2.958-.738 5.173-1.249 8.97-1.161 4.329.106 7.099 1.898 7.097 5.48 0 8.674-9.593 11.222-16.24 11.224-7.306 0-13.724-4.155-13.724-12.144 0-9.366 5.076-23.568 9.84-33.023 5.848-11.616 11.827-13.159 22.12-13.159 4.526 0 9.736 1.932 9.736 6.204 0 5.922-5.008 8.18-9.983 8.466-2.127.122-5.394.239-7.348.099 0 0-1.661 2.525-3.416 7.015 9.208-1.296 13.116.795 11.562 6.12-2.104 7.199-8.342 7.674-15.976 6.307Zm39.964-19.114c1.215-1.703 2.84-3.28 5.333-3.28 3.055 0 2.759 1.616 2.034 3.681-2.059 5.88 4.159 6.035 5.677 5.915 5.428-.423 8.419-3.93 9.155-9.904 1.008-8.134-5.845-11.257-14.532-11.257-14.48 0-20.164 8.856-25.586 21.516-2.547 5.947-5.755 16.11-5.754 22.582-.001 9.09 5.53 14.019 14.444 14.019 13.017 0 22.215-10.38 24.843-23.313.809-3.98 1.806-11.449-8.304-11.033-5.132.212-8.228 1.344-9.86 6.588-1.68 5.402 4.413 5.549 4.413 5.549-1.226 5.585-4.815 8.971-8.013 8.974-1.996 0-3.812-.866-3.204-5.09.903-6.176 6.687-21.198 9.354-24.947Zm60.017 7.407c-1.536 7.62-4.976 16.64-8.714 23.361-6.1 10.964-13.499 12.5-19.968 12.418-6.465-.077-13.754-2.461-13.809-12.439-.039-7.16 3.048-17.272 5.671-23.893 4.575-12.01 9.241-21.805 24.01-21.63 17.218.201 14.147 15.516 12.81 22.183Zm-21.598 19.537c2.394-4.055 9.133-22.448 9.317-27.047.054-1.34-.167-2.9-2.327-2.925-1.481-.021-2.769.266-3.927 2.055-2.602 3.382-10.219 24.185-10.09 28.335.047 1.492.88 2.795 2.712 2.795 2.11.002 3.279-1.45 4.315-3.213Z"/>
                            </svg>
                        </NavLink>
                        <button style={{borderBottom: borderDisplay1}} className="menu-btn" type="button" onClick={handleDisplayContent1}>Comprar</button>       
                        <button style={{borderBottom: borderDisplay2}} className="menu-btn" type="button" onClick={handleDisplayContent2}>Descobrir</button>       
                        <button style={{borderBottom: borderDisplay3}} className="menu-btn" type="button" onClick={handleDisplayContent3}>Ajuda</button>       
                    </div>
                    <div style={{display: content1}} className="menu-list">
                        <ul>
                            <li><button type="button"onClick={handleThemeBtn}>Conjuntos por tema<img src="/images/chevron.svg" alt="" /></button></li>
                            <li style={{display: themeDisplay}}><div className="grid-list styleAnch">
                                    <div className="grid-list-top-text"><a href="/">Ver todos os temas</a></div>
                                    <ul>
                                        {themesarr.map((theme, index) => (
                                            <li key={index}>
                                                <NavLink onMouseEnter={() => handleThemeSelect(theme)} onClick={menuClose} to={`/products/${url[index]}/1`}>{theme}</NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                            <li><button type="button" onClick={handleAgeBtn}>Idade<img src="/images/chevron.svg" alt="" /></button></li>
                            <li style={{display: ageDisplay}}><div className="regular-list styleAnch">
                                    <ul>
                                        <li className="regular-top-text"><a href="/">Ver todas as idades</a></li>
                                        <li><a href="/">1,5+</a></li>
                                        <li><a href="/">4+</a></li>
                                        <li><a href="/">6+</a></li>
                                        <li><a href="/">9+</a></li>
                                        <li><a href="/">13+</a></li>
                                        <li><a href="/">18+</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><button type="button" onClick={handlePriceBtn}>Gama de preços<img src="/images/chevron.svg" alt="" /></button></li>
                            <li style={{display: priceDisplay}}><div className="regular-list styleAnch">
                                    <ul>
                                        <li className="regular-top-text"><a href="/">Ver todas as gamas de preços</a></li>
                                        <li><a href="/">Menos de 20€</a></li>
                                        <li><a href="/">20€ a 50€</a></li>
                                        <li><a href="/">50€ a 100€</a></li>
                                        <li><a href="/">100€ a 200€</a></li>
                                        <li><a href="/">Mais de 200€</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><button type="button" onClick={handleProdBtn}>Produtos LEGO<img src="/images/chevron.svg" alt="" /></button></li>
                            <li style={{display: prodDisplay}}><div className="regular-list styleAnch">
                                    <ul>
                                        <li className="regular-top-text"><a href="/">Ver todos os produtos LEGO</a></li>
                                        <li><a href="/">Acessórios</a></li>
                                        <li><a href="/">Mochilas</a></li>
                                        <li><a href="/">Livros</a></li>
                                        <li><a href="/">Roupa</a></li>
                                        <li><a href="/">Porta-Chaves</a></li>
                                        <li><a href="/">Lancheiras</a></li>
                                        <li><a href="/">Brinquedos de Peluche</a></li>
                                        <li><a href="/">Puzzles & Jogos de Tabuleiro</a></li>
                                        <li><a href="/">Representações e Fantasia</a></li>
                                        <li><a href="/">Papelaria</a></li>
                                        <li><a href="/">Armazenamento</a></li>
                                        <li><a href="/">Garrafas de Água LEGO®</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><button type="button" onClick={handleIntBtn}>Interesses<img src="/images/chevron.svg" alt="" /></button></li>
                            <li style={{display: intDisplay}}><div className="grid-list-2col styleAnch">
                                    <div className="grid-list-top-text"><a href="/">Ver todos os produtos</a></div>
                                    <ul>
                                        <li><a href="/">Bem-vindos, adultos</a></li>
                                        <li><a href="/">Sazonal</a></li>
                                        <li><a href="/">Animais</a></li>
                                        <li><a href="/">Espaço</a></li>
                                        <li><a href="/">Edifícios</a></li>
                                        <li><a href="/">Desporto</a></li>
                                        <li><a href="/">Código para crianças</a></li>
                                        <li><a href="/">STEM</a></li>
                                        <li><a href="/">Dragões</a></li>
                                        <li><a href="/">Comboios</a></li>
                                        <li><a href="/">Fantasia</a></li>
                                        <li><a href="/">Viagens</a></li>
                                        <li><a href="/">Filmes</a></li>
                                        <li><a href="/">Séries de TV</a></li>
                                        <li><a href="/">Videojogos</a></li>
                                        <li><a href="/">Veículos</a></li>
                                        <li><a href="/">Aprender a construir</a></li>
                                        <li><a href="/">Música</a></li>
                                        <li><a href="/">Ninjas</a></li>
                                        <li><a href="/">Pré-Escolar</a></li>
                                        <li><a href="/">Princesas</a></li>
                                        <li><a href="/">Heróis da Vida Real</a></li>
                                        <li><a href="/">Robôs para Crianças</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><button type="button" onClick={handlePabBtn}>Pick and Build<img src="/images/chevron.svg" alt="" /></button></li>
                            <li style={{display: pabDisplay}}><div className="regular-list styleAnch">
                                    <ul>
                                        <li className="regular-top-text"><a href="/">Pick and Build</a></li>
                                        <li><a href="/">Pick a Brick</a></li>
                                        <li><a href="/">Kits e acessórios de construção</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul className="menu-list-links">
                            <li><a href="/">Exclusivos</a></li>
                            <li><a href="/">Novidades</a></li>
                            <li><a href="/">Os mais vendidos</a></li>
                            <li><a href="/">Decoração de interiores</a></li>
                            <li><a href="/">Ofertas e promoções</a></li>
                            <li><a href="/">Cartão de Oferta</a></li>
                            <li><a href="/">Em breve</a></li>
                            <li><a href="/">Localizador de presentes</a></li>
                            <li><a href="/">Última oportunidade para comprar</a></li>
                        </ul>
                    </div>
                    <div style={{display: content2}} className="menu-list">
                        <ul>
                            <li><button type="button" onClick={handleValBtn}>Os nossos valores<img src="/images/chevron.svg" alt="" /></button></li>
                            <li style={{display: valDisplay}}><div className="regular-list styleAnch">
                                    <ul>
                                        <li><a href="/">Sobre o LEGO Group</a></li>
                                        <li><a href="/">Notícias LEGO</a></li>
                                        <li><a href="/">Sustentabilidade</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><button type="button" onClick={handleAppBtn}>As nossas apps<img src="/images/chevron.svg" alt="" /></button></li>
                            <li style={{display: appDisplay}}><div className="regular-list styleAnch">
                                    <ul>
                                        <li><a href="/">LEGO Builder</a></li>
                                        <li><a href="/">App LEGO Life</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><button type="button" onClick={handleMagBtn}>As nossas revistas<img src="/images/chevron.svg" alt="" /></button></li>
                            <li style={{display: magDisplay}}><div className="regular-list styleAnch">
                                    <ul>
                                        <li><a href="/">Catálogos LEGO</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul className="menu-list-links">
                            <li><a href="/">Todos os temas LEGO</a></li>
                            <li><a href="/">Todos os interesses LEGO</a></li>
                            <li><a href="/">Encontra inspiração</a></li>
                            <li><a href="/">Bem-vindos, adultos</a></li>
                            <li><a href="/">Para as Famílias</a></li>
                            <li><a href="/">LEGO® Fortnite®</a></li>
                            <li><a href="/">LEGO® Insiders</a></li>
                            <li><a href="/">LEGO® Mosaic Maker</a></li>
                            <li><a href="/">Ideias de presentes LEGO®</a></li>
                        </ul>
                    </div>
                    <div style={{display: content3}} className="menu-list">
                        <ul className="menu-list-links">
                            <li><a href="/">Ver o estado da encomenda</a></li>
                            <li><a href="/">Envios e devoluções</a></li>
                            <li><a href="/">Localizar uma loja</a></li>
                            <li><a href="/">Encontrar instruções de construção</a></li>
                            <li><a href="/">Perguntas comuns</a></li>
                            <li><a href="/">Contacta-nos</a></li>
                            <li><a href="/">Peças de substituição</a></li>
                        </ul>
                    </div>
                    <div className="submenu-list">
                        
                    </div>
                </div>
                <div className="menu-content" style={{display: menuDisplay, maxWidth: contentMaxWidth}}></div>
                <div className="menu-content-dark" style={{display: menuDisplay}} onClick={menuClose}></div>
                <div className="Nav-Right">
                    <div>
                        <input style={{display: inputDisplay}} type="text" value={text} placeholder="Procurar..." onChange={handleChange}  />
                        <NavLink to="/products/search/1"><button type="button" className="search-btn"><img src="/images/search.svg" alt="" onClick={() => {setInputStatus(!inputStatus)}} /></button></NavLink>
                    </div>
                    <Cart />
                </div>
            </div> 
        </nav>
    );
}