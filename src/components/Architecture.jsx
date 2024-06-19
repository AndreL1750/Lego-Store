import Filters from "./Filters";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from './CartContext';

export default function Architecture() {
    const params = useParams();

    const [products, setProducts] = useState([]);
    
    const [prodfilter, setProdFilter] = useState([]);

    const productsPerPage = 8;
    
    const { addItemToCart } = useCart();

    const handleAddToCart = (product) => {
        if (product.set_name && product.set_price) {
          addItemToCart(product);
        } 
      };

    useEffect(() => {
             
        fetch('/architecture.json')
        .then(response => response.json())
        .then(product => {setProducts(product); setProdFilter(product.slice(0, productsPerPage))}); 
        
    }, []);
    
    useEffect(() => {
        const page = parseInt(params.page, 10) || 1;
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        setProdFilter(products.slice(startIndex, endIndex));
    }, [params, products]);

    const [buttonImageIndexes, setButtonImageIndexes] = useState({});

    const toggleButtonImage = (setId) => {
        setButtonImageIndexes(prevState => ({
            ...prevState,
            [setId]: (prevState[setId] || 0) === 0 ? 1 : 0
        }));
    };

    const [text, setText] = useState("");

    const totalPages = Math.ceil(products.length / productsPerPage);
    const currentPage = parseInt(params.page, 10) || 1;
    const previousPage = Math.max(currentPage - 1, 1);
    const nextPage = Math.min(currentPage + 1, totalPages);

    return (
        <main className="Architecture">
            <div className="filtering">
                <div>A mostrar {prodfilter.length} produto(s)</div>
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
            <input type="text" value={text} placeholder="Procurar..." onChange={(e) => setText(e.target.value)}  />
            <section className="prod-section">
                <Filters />
                <div className="content">
                    <div className="product-list">
                        {
                            prodfilter.filter((texted) => text === "" || texted.set_name.toLowerCase().includes(text.toLowerCase())).map((prodfilter) => (
                                <div className="product" key={prodfilter.set_id}>
                                    <NavLink to={`/product/${prodfilter.set_id}`}>
                                        <div className="images">
                                            <div className="img-btns-wrapper">
                                                <div className="img-btns">
                                                    <button className="img-change" type="button" onClick={() => toggleButtonImage(prodfilter.set_id)} disabled={buttonImageIndexes[prodfilter.set_id] === 0}></button>
                                                    <button className="img-change" type="button" onClick={() => toggleButtonImage(prodfilter.set_id)} disabled={buttonImageIndexes[prodfilter.set_id] === 1}></button>
                                                </div>
                                            </div>
                                            <div className="img1-wrapper">
                                                <img className="img1" src={prodfilter.images[buttonImageIndexes[prodfilter.set_id] || 0]} alt="" />
                                            </div>
                                        </div>
                                        <div className="age-piece-rating">
                                            <div><img src="/images/age-o.svg" alt="" /> {prodfilter.ages}</div>
                                            <div><img src="/images/brick-o.svg" alt="" /> {prodfilter.piece_count}</div>
                                            <div><img src="/images/star-f.svg" alt="" /> {prodfilter.star_rating}</div>
                                        </div>
                                        <h3 className="name">{prodfilter.set_name}</h3>
                                        <div className="price">{prodfilter.set_price + "$"}</div>
                                        <button className="addCart" type="button" onClick={() => handleAddToCart({ ...prodfilter })}><img src="/images/bag.svg" alt="" />Adicionar ao Cesto</button>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <div className="next-prev-page">
                {currentPage && (
                    <NavLink to={`/products/architecture/${previousPage}`} className="chevron">
                        <img src="/images/chevron.svg" alt="Página anterior" />
                    </NavLink>
                )}
                {Array.from({ length: totalPages }, (_, i) => (
                    <NavLink key={i + 1} to={`/products/architecture/${i + 1}`}>
                        {i + 1}
                    </NavLink>
                ))}
                {currentPage && (
                    <NavLink to={`/products/architecture/${nextPage}`} className="chevron.rotate">
                        <img src="/images/chevron.svg" alt="Próxima página" />
                    </NavLink>
                )}
            </div>
        </main>
    );
}