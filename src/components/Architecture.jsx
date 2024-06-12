import Filters from "./Filters";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Architecture() {
    const params = useParams();

    const [products, setProducts] = useState([]);
    
    const [prodfilter, setProdFilter] = useState([]);
    
    useEffect(() => {
             
        fetch('/legosetshmm.json')
        .then(response => response.json())
        .then(product => {setProducts(product); setProdFilter(product.slice(0, 12))}); 
        
    }, []);
    
    useEffect(() => {
        if(params.page === "1") {
            setProdFilter(products.slice(0, 12));
        }
        else {
            setProdFilter(products.slice(12, 16));
        }
    }, [params, products]);

    console.log(params.page);
    console.log(prodfilter);
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
                            prodfilter.map((prodfilter, index) => (
                                <div className="product" key={index}>
                                    <img src="/images/lego-logo.svg" alt="" />
                                    <h3>{prodfilter.set_name}</h3>
                                    <div>{prodfilter.list_price + "$"} {prodfilter.star_rating}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <div className="next-prev-page">
                <NavLink to={"/products/architecture/1"} className="chevron"><img src="/images/chevron.svg" alt="" /></NavLink>
                <NavLink to={"/products/architecture/1"}>1</NavLink>
                <NavLink to={"/products/architecture/2"}>2</NavLink>
                <NavLink to={"/products/architecture/2"} ><img src="/images/chevron.svg" alt="" /></NavLink>
            </div>
        </main>
    );
}