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
                    Mostrar apenas disponível em stock
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
                                Conjuntos
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                Para adultos
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
                                20 € - 50 €
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                50 € - 100 €
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                100 € - 200 €
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                200 €+ 
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
                                Architecture
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
                                Arte, design e música
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                Edifícios
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                História e viagens
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
                                13+
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                18+
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
                                Disponível agora
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                Para reserva
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                Indisponível
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
                                250 - 499
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                500 - 999
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                1000 - 1999
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                2000+
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
                                Difíceis de encontrar
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                Exclusivos
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                Novidades
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}