import { useState } from "react";
import { NavLink } from "react-router-dom";

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
    
    const menuDisplay = !menuStatus ? "none" : "block";

    return (
        <nav className="Navbar">
            <div className="menu-wrapper">
                <div>
                    <NavLink to="/"><img src="images/lego-logo.svg" alt="" /></NavLink>
                </div>
                <div>
                    <button style={{borderBottom: borderDisplay1}} className="menu-btn" type="button" onClick={handleDisplayContent1}>Comprar</button>       
                    <button style={{borderBottom: borderDisplay2}} className="menu-btn" type="button" onClick={handleDisplayContent2}>Descobrir</button>       
                    <button style={{borderBottom: borderDisplay3}} className="menu-btn" type="button" onClick={handleDisplayContent3}>Ajuda</button>       
                    <div style={{display: content1}} className="menu-list">
                        <ul>
                            <li><button type="button">Conjuntos por tema<img src="/images/chevron.svg" alt="" /></button></li>
                            <li><button type="button">Idade<img src="/images/chevron.svg" alt="" /></button></li>
                            <li><button type="button">Gama de preços<img src="/images/chevron.svg" alt="" /></button></li>
                            <li><button type="button">Produtos LEGO<img src="/images/chevron.svg" alt="" /></button></li>
                            <li><button type="button">Interesses<img src="/images/chevron.svg" alt="" /></button></li>
                            <li><button type="button">Pick and Build<img src="/images/chevron.svg" alt="" /></button></li>
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
                            <li><button type="button">Os nossos valores<img src="/images/chevron.svg" alt="" /></button></li>
                            <li><button type="button">As nossas apps<img src="/images/chevron.svg" alt="" /></button></li>
                            <li><button type="button">As nossas revistas<img src="/images/chevron.svg" alt="" /></button></li>
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
                </div>
                <div className="menu-content" style={{display: menuDisplay}}></div>
                <div className="menu-content-dark" style={{display: menuDisplay}}></div>
            </div> 

        </nav>
    );
}