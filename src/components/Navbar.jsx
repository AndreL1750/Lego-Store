import { useEffect, useState } from "react";
import Cart from "./Cart";

export default function Navbar() {
    
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

    return (
        <nav className="Navbar">
            <div className="menu-wrapper">
                <div>
                    <div className="Nav-Btn">
                        <img src="/images/lego-logo.svg" alt="" />
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
                                        <li><a href="/products/architecture/1">Architecture</a></li>
                                        <li><a href="/">Ideas</a></li>
                                        <li><a href="/">Marvel</a></li>
                                        <li><a href="/">Batman™</a></li>
                                        <li><a href="/">Jurassic World</a></li>
                                        <li><a href="/">Minecraft®</a></li>
                                        <li><a href="/">A Coleção Botânica</a></li>
                                        <li><a href="/">LEGO® Animal Crossing™</a></li>
                                        <li><a href="/">Minifiguras</a></li>
                                        <li><a href="/">BrickHeadz</a></li>
                                        <li><a href="/">LEGO® Art</a></li>
                                        <li><a href="/">NINJAGO®</a></li>
                                        <li><a href="/">City</a></li>
                                        <li><a href="/">LEGO® Avatar</a></li>
                                        <li><a href="/">Powered UP</a></li>
                                        <li><a href="/">Classic</a></li>
                                        <li><a href="/">LEGO® Braille Bricks</a></li>
                                        <li><a href="/">SERIOUS PLAY®</a></li>
                                        <li><a href="/">Creator 3in1</a></li>
                                        <li><a href="/">LEGO® DREAMZzz™</a></li>
                                        <li><a href="/">Sonic the Hedgehog™</a></li>
                                        <li><a href="/">Creator Expert</a></li>
                                        <li><a href="/">LEGO® DUPLO®</a></li>
                                        <li><a href="/">Speed Champions</a></li>
                                        <li><a href="/">DC</a></li>
                                        <li><a href="/">LEGO® Education</a></li>
                                        <li><a href="/">Spider-Man</a></li>
                                        <li><a href="/">Gru: O Maldisposto 4</a></li>
                                        <li><a href="/">LEGO® Casa das Bonecas de Gabby</a></li>
                                        <li><a href="/">Star Wars™</a></li>
                                        <li><a href="/">Disney</a></li>
                                        <li><a href="/">LEGO® Icons</a></li>
                                        <li><a href="/">Technic</a></li>
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
                <Cart />
            </div> 
        </nav>
    );
}