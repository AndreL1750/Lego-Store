import { useEffect, useState } from "react";
import Filters from "./Filters";

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
                <Filters />
                <div className="content">
                    <div className="product-list">
                        {
                            products.slice(13, 21).map((product, index) => (
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