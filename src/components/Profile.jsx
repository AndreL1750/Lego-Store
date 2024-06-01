import { useEffect, useState } from "react";

export default function Product() {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
             
        fetch('/legosetshmm.json')
        .then(response => response.json())
        .then(product => setProducts(product)); 
        
    }, []);
    
    console.log(products);

    return (
        <main className="Product">
            <div className="filtering">
                <div>A mostrar X produto(s)</div>
                <div className="filter-div">
                    Filter:
                    <select className="filter">
                        <option>Recomendados</option>
                        <option>Preço: Mais baixo a mais alto</option>
                        <option>Preço: Mais alto a mais baixo</option>
                        <option>Classificação</option>
                    </select>
                </div>
            </div>
            <section>
                <div className="filter-temp">
                    <div>
                        <label>
                            <input type="checkbox" />
                            Mostrar apenas disponível em stock
                        </label>
                    </div>
                    <div>
                        <h3>
                            <button type="button">
                                <span>
                                    Tipo de produto
                                    <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                                </span>
                            </button>
                        </h3>
                        <div>
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
                                <span>
                                    Preço
                                    <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                                </span>
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
                                <span>
                                    Tema
                                    <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                                </span>
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
                                <span>
                                    Interesse
                                    <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                                </span>
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
                                <span>
                                    Idade
                                    <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                                </span>
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
                                <span>
                                    Disponibilidade
                                    <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                                </span>
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
                                <span>
                                    Número de peças
                                    <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                                </span>
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
                                <span>
                                    Em destaque
                                    <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"/></svg>
                                </span>
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
                <div className="content">
                    <div className="product-list">
                        {
                            products.slice(13, 17).map((product, index) => (
                                <div className="product" key={index}>
                                    <img src="/images/lego-logo.svg" alt="" />
                                    <h3>{product.set_name}</h3>
                                    <div>{product.list_price + "$"} {product.star_rating}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <div className="next-prev-page">
                <a href="/product" className="chevron"><img src="/images/chevron.svg" alt="" /></a>
                <a href="/product">1</a>
                <a href="/page2">2</a>
                <a href="/page2"><img src="/images/chevron.svg" alt="" /></a>
            </div>
        </main>
    );
}