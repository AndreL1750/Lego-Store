import Filters from "./Filters";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Architecture() {
    const params = useParams();

    const [products, setProducts] = useState([]);
    
    const [prodfilter, setProdFilter] = useState([]);
    
    useEffect(() => {
             
        fetch('/architecture.json')
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

    return (
        <main className="Architecture">
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
                            prodfilter.map((prodfilter, set_id) => (
                                <div className="product" key={set_id}>
                                    <div className="images">
                                        <div className="img-btns-wrapper">
                                            <div className="img-btns">
                                                <button className="img-change" type="button"></button>
                                                <button className="img-change" type="button" onClick={() => console.log(prodfilter.set_id)}></button>
                                            </div>
                                        </div>
                                        <div className="img1-wrapper">
                                            <img className="img1" src={prodfilter.images[0]} alt="" />
                                        </div>
                                    </div>
                                    <div className="age-piece-rating">
                                        <div><img src="/images/age-o.svg" alt="" /> {prodfilter.ages}</div>
                                        <div><img src="/images/brick-o.svg" alt="" /> {prodfilter.piece_count}</div>
                                        <div><img src="/images/star-f.svg" alt="" /> {prodfilter.star_rating}</div>
                                    </div>
                                    <h3 className="name">{prodfilter.set_name}</h3>
                                    <div className="price">{prodfilter.set_price + "$"}</div>
                                    <button className="addCart" type="button"><img src="/images/bag.svg" alt="" />Adicionar ao Cesto</button>
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