import { useState } from "react";

export default function Filters() {

    const [style, setStyle] = useState(true);

    const handleStyle = () => setStyle(!style) ;

    const styles = style ? "rotate(90deg)" : "rotate(270deg)";
    const display = style ? "1" : "0";
    const pos = style ? "static" : "absolute";

    return (
        <div className="filter-wrapper">
            <div className="available-only">
                <label>
                    <input type="checkbox" />
                    <span>Mostrar apenas disponível em stock</span>
                </label>
            </div>
            <div>
                <h3>
                    <button type="button" onClick={handleStyle}>
                        <span>Tipo de produto</span>  
                        <div className="in-btn-svg">
                            <svg style={{transform: styles}}  width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                        </div>  
                    </button>
                </h3>
                <div style={{opacity: display, position: pos}}>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>Conjuntos</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>Para adultos</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>
                    <button type="button">
                        <span>Preço</span>
                        <div className="in-btn-svg">
                            <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                        </div> 
                    </button>
                </h3>
                <div>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>20 € - 50 €</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>50 € - 100 €</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>100 € - 200 €</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>200 €+</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>
                    <button type="button">
                        <span>Tema</span>
                        <div className="in-btn-svg">
                            <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                        </div> 
                    </button>
                </h3>
                <div>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>Architecture</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>
                    <button type="button">
                        <span>Interesse</span>
                        <div className="in-btn-svg">
                            <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                        </div> 
                    </button>
                </h3>
                <div>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>Arte, design e música</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>Edifícios</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>História e viagens</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>
                    <button type="button">
                        <span>Idade</span>
                        <div className="in-btn-svg">
                            <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                        </div> 
                    </button>
                </h3>
                <div>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>13+</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>18+</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>
                    <button type="button">
                        <span>Disponibilidade</span>
                        <div className="in-btn-svg">
                            <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                        </div> 
                    </button>
                </h3>
                <div>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>Disponível agora</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>Para reserva</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>Indisponível</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>
                    <button type="button">
                        <span>Número de peças</span>
                        <div className="in-btn-svg">
                            <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                        </div> 
                    </button>
                </h3>
                <div>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>250 - 499</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>500 - 999</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>1000 - 1999</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>2000+</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>
                    <button type="button">
                        <span>Em destaque</span>
                        <div className="in-btn-svg">
                            <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                        </div> 
                    </button>
                </h3>
                <div>
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>Difíceis de encontrar</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>Exclusivos</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span>Novidades</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}