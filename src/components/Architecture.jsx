import Filters from "./Filters";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from './CartContext';
import Slider from "react-slick";

export default function Architecture() {
    const params = useParams();
    const theme = params.theme;
    const [products, setProducts] = useState([]);
    const [prodfilter, setProdFilter] = useState([]);
    const productsPerPage = 18;
    const { addItemToCart } = useCart();
    const [quantity] = useState(1);
    const [filterOption, setFilterOption] = useState('Recomendados');

    const handleAddToCart = (product) => {
        if (product.set_name && product.set_price) {
          addItemToCart(product, quantity);
        } 
      };

    useEffect(() => {
             
        fetch('/architecture.json')
        .then(response => response.json())
        .then(product => {setProducts(product); setProdFilter(product.slice(0, productsPerPage))}); 
        
    }, []);
    
    useEffect(() => {
        const sortProducts = (products) => {
            if (filterOption === 'Preço: Mais baixo a mais alto') {
                return [...products].sort((low, high) => low.set_price - high.set_price);
            } 
            else if (filterOption === 'Preço: Mais alto a mais baixo') {
                return [...products].sort((low, high) => high.set_price - low.set_price);
            } 
            else if (filterOption === 'Classificação') {
                return [...products].sort((low, high) => high.star_rating - low.star_rating);
            } 
            else {
                return products;
            }
        };

        const page = parseInt(params.page, 10) || 1;
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const sortedProducts = sortProducts(products);
        setProdFilter(sortedProducts.slice(startIndex, endIndex));
    }, [params, products, filterOption]);

    const [text, setText] = useState("");

    const totalPages = Math.ceil(products.length / productsPerPage);
    const currentPage = parseInt(params.page, 10) || 1;
    const previousPage = Math.max(currentPage - 1, 1);
    const nextPage = Math.min(currentPage + 1, totalPages);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <main className="Architecture">
            <input type="text" value={text} placeholder="Procurar..." onChange={(e) => setText(e.target.value)}  />
            <section className="prod-section">
                
                <Filters />
                <div className="content">
                    <div className="filtering">
                        <div>A mostrar {1} produto(s)</div>
                        <div className="filter-div">
                            Filter:
                            <select className="filter" value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
                                <option>Recomendados</option>
                                <option>Preço: Mais baixo a mais alto</option>
                                <option>Preço: Mais alto a mais baixo</option>
                                <option>Classificação</option>
                            </select>
                        </div>
                    </div>
                    <div className="product-list">
                        {
                            prodfilter.filter((texted) => text === "" || texted.set_name.toLowerCase().includes(text.toLowerCase())).filter((filteredProduct) => theme === undefined || filteredProduct.theme_name === theme).map((prodfilter) => (
                                <div className="product" key={prodfilter.set_id}>
                                    <div className="images">
                                        <Slider {...sliderSettings}>
                                            {prodfilter.images.map((image, index) => (
                                                <div key={index}>
                                                    <NavLink to={`/product/${prodfilter.set_id}`}>
                                                        <div className="img1-wrapper">
                                                            <img className="img1" src={image} alt={`Slide ${index}`} />
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                    <div className="age-piece-rating">
                                        <div><img src="/images/age-o.svg" alt="" /> {prodfilter.ages}</div>
                                        <div><img src="/images/brick-o.svg" alt="" /> {prodfilter.piece_count}</div>
                                        <div><img src="/images/star-f.svg" alt="" /> {prodfilter.star_rating}</div>
                                    </div>
                                    <h3 className="name">{prodfilter.set_name}</h3>
                                    <div className="price">{prodfilter.set_price + "$"}</div>
                                    <button className="addCart" type="button" onClick={() => handleAddToCart({ ...prodfilter })}><img src="/images/bag.svg" alt="" />Adicionar ao Cesto</button>
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