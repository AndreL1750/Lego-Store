import { NavLink, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from './CartContext';
import Slider from "react-slick";

export default function Products({ handleThemeSelect, selectedTheme, handleText, text }) {
    const location = useLocation();
    const params = useParams();
    const theme = params.theme;
    const [products, setProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);
    const [prodfilter, setProdFilter] = useState([]);
    const productsPerPage = 9;
    const { addItemToCart } = useCart();
    const [quantity] = useState(1);
    const [filterOption, setFilterOption] = useState('Recomendados');

    const FilterSection = ({ title, filters, isOpen, toggleOpen }) => {
        const styles = isOpen ? "rotate(90deg)" : "rotate(270deg)";
        const display = isOpen ? "block" : "none";

        const [filterStatuses, setFilterStatuses] = useState(
            filters.reduce((acc, filter) => ({ ...acc, [filter]: false }), {})
        );
    
        const handleFilterChange = (filter) => {
            setFilterStatuses((prevStatuses) => ({
                ...prevStatuses,
                [filter]: !prevStatuses[filter],
            }));
        };
    
        return (
            <div>
                <h3>
                    <button style={{minWidth: "150px"}} type="button" onClick={toggleOpen}>
                        <span>{title}</span>
                        <div className="in-btn-svg">
                            <svg style={{ transform: styles }} width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor" />
                            </svg>
                        </div>
                    </button>
                </h3>
                <div style={{ display: display }}>
                    <ul>
                        {filters.map((filter, index) => (
                            <li key={index}>
                                <label>
                                    <input type="checkbox" checked={filterStatuses[filter]} onChange={() => handleFilterChange(filter)} />
                                    <span>{filter}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    const handleAddToCart = (product) => {
        if (product.set_name && product.set_price) {
          addItemToCart(product, quantity);
        } 
      };

    useEffect(() => {
             
        fetch('/architecture.json')
        .then(response => response.json())
        .then(product => {setProducts(product); setProdFilter(product.slice(0, productsPerPage));}); 
        
    }, [productsPerPage]);
    
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
        const filteredProducts = sortedProducts.filter((product) => theme === undefined || product.theme_name === theme);
        setProdFilter(filteredProducts.slice(startIndex, endIndex));
        setSearchProducts(products);
    }, [params, products, filterOption, productsPerPage, theme]);

    const filteredProducts = products.filter((product) => theme === undefined || product.theme_name === theme);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const currentPage = parseInt(params.page, 10) || 1;
    const previousPage = Math.max(currentPage - 1, 1);
    const nextPage = Math.min(currentPage + 1, totalPages);

    const productsPerPageSearch = products.length;
    const totalPagesSearch = Math.ceil(products.length / productsPerPageSearch);
    const nextPageSearch = Math.min(currentPage + 1, totalPagesSearch);


    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const [openSections, setOpenSections] = useState({
        type: true,
        price: true,
        theme: false,
        interest: false,
        age: false,
        availability: false,
        pieces: false,
        featured: false
    });

    const toggleSection = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    const themesarr = ["Architecture", "Ideas", "Marvel", "Batman", "Jurassic World", "Minecraft", "A Coleção Botânica", "LEGO Animal Crossing", "Minifiguras", "BrickHeadz", "LEGO Art", "NINJAGO", "City", "LEGO Avatar", "Powered UP", "Classic", "LEGO Braille Bricks", "SERIOUS PLAY", "Creator 3in1", "LEGO DREAMZzz™", "Sonic the Hedgehog", "Creator Expert", "LEGO DUPLO", "Speed Champions", "DC", "LEGO Education", "Spider-Man", "Gru: O Maldisposto 4", "Star Wars", "Disney", "LEGO Icons", "Technic" ];

    const filterData = [
        {
            title: "Tipo de produto",
            section: "type",
            filters: ["Conjuntos", "Para adultos"]
        },
        {
            title: "Preço",
            section: "price",
            filters: ["20 € - 50 €", "50 € - 100 €", "100 € - 200 €", "200 €+"]
        },
        {   
            title: "Tema",
            section: "theme",
            filters: [`${theme}`]
        },
        {
            title: "Idade",
            section: "age",
            filters: ["13+", "18+"]
        },
        {
            title: "Disponibilidade",
            section: "availability",
            filters: ["Disponível agora", "Para reserva", "Indisponível"]
        },
        {
            title: "Número de peças",
            section: "pieces",
            filters: ["250 - 499", "500 - 999", "1000 - 1999", "2000+"]
        },
        {
            title: "Em destaque",
            section: "featured",
            filters: ["Difíceis de encontrar", "Exclusivos", "Novidades"]
        }
    ];

    const filterDataSearch = [
        {
            title: "Tipo de produto",
            section: "type",
            filters: ["Conjuntos", "Para adultos"]
        },
        {
            title: "Preço",
            section: "price",
            filters: ["20 € - 50 €", "50 € - 100 €", "100 € - 200 €", "200 €+"]
        },
        {   
            title: "Tema",
            section: "theme",
            filters: [...themesarr]
        },
        {
            title: "Idade",
            section: "age",
            filters: ["13+", "18+"]
        },
        {
            title: "Disponibilidade",
            section: "availability",
            filters: ["Disponível agora", "Para reserva", "Indisponível"]
        },
        {
            title: "Número de peças",
            section: "pieces",
            filters: ["250 - 499", "500 - 999", "1000 - 1999", "2000+"]
        },
        {
            title: "Em destaque",
            section: "featured",
            filters: ["Difíceis de encontrar", "Exclusivos", "Novidades"]
        }
    ];

    return (
        <main className="Products">
            <section className="prod-section">
                <div className="filter-wrapper">
                    { location.pathname.includes("/products/search/") ? (filterDataSearch.map((filter, index) => (
                        <FilterSection
                            key={index}
                            title={filter.title}
                            filters={filter.filters}
                            isOpen={openSections[filter.section]}
                            toggleOpen={() => toggleSection(filter.section)}
                        />
                    ))) :
                    (filterData.map((filter, index) => (
                        <FilterSection
                            key={index}
                            title={filter.title}
                            filters={filter.filters}
                            isOpen={openSections[filter.section]}
                            toggleOpen={() => toggleSection(filter.section)}
                        />
                    )))}
                </div>
                <div className="content">
                    <div className="filtering">
                        <div>A mostrar produtos: <strong style={{fontWeight: "bold"}}>{theme}</strong> </div>
                        <div className="filter-div">
                            <select className="filter" value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
                                <option>Recomendados</option>
                                <option>Preço: Mais baixo a mais alto</option>
                                <option>Preço: Mais alto a mais baixo</option>
                                <option>Classificação</option>
                            </select>
                        </div>
                    </div>
                    <div className="product-list">
                    {   location.pathname.includes("/products/search/") ? 
                            (searchProducts.filter((texted) => text === "" || texted.set_name.toLowerCase().includes(text.toLowerCase())).filter((searchProducts) => theme === undefined || searchProducts.theme_name === "search").map((searchProducts) => (
                                <div className="product" key={searchProducts.set_id}>
                                    <div className="images">
                                        <Slider {...sliderSettings}>
                                            {searchProducts.images.map((image, index) => (
                                                <div key={index}>
                                                    <NavLink to={`/product/${searchProducts.set_id}`} >
                                                        <div className="img1-wrapper">
                                                            <img className="img1" src={image} alt={`Slide ${index}`} />
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                    <div className="age-piece-rating">
                                        <div><img src="/images/age-o.svg" alt="" /> {searchProducts.ages}</div>
                                        <div><img src="/images/brick-o.svg" alt="" /> {searchProducts.piece_count}</div>
                                        <div><img src="/images/star-f.svg" alt="" /> {searchProducts.star_rating}</div>
                                    </div>
                                    <h3 className="name">{searchProducts.set_name}</h3>
                                    <div className="price">{searchProducts.set_price + "$"}</div>
                                    {searchProducts.prod_status === "preorder" ? (<button className="addCart preorder" type="button" disabled><img src="/images/bag.svg" alt="" />Reserva</button>) : searchProducts.prod_status === "unavailable" ? (<button className="addCart unavailable" type="button"  disabled><img src="/images/bag.svg" alt="" />Indisponível</button>) : (<button className="addCart available" type="button" onClick={() => handleAddToCart({ ...searchProducts })}><img src="/images/bag.svg" alt="" />Adicionar ao Cesto</button>)}
                                </div>
                            )))
                            :
                            (prodfilter.filter((filteredProduct) => theme === undefined || filteredProduct.theme_name === theme).map((prodfilter) => (
                                <div className="product" key={prodfilter.set_id}>
                                    <div className="images">
                                        <Slider {...sliderSettings}>
                                            {prodfilter.images.map((image, index) => (
                                                <div key={index}>
                                                    <NavLink to={`/product/${theme}/${prodfilter.set_id}`}>
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
                                    {prodfilter.prod_status === "preorder" ? (<button className="addCart preorder" type="button" disabled><img src="/images/bag.svg" alt="" />Reserva</button>) : prodfilter.prod_status === "unavailable" ? (<button className="addCart unavailable" type="button"  disabled><img src="/images/bag.svg" alt="" />Indisponível</button>) : (<button className="addCart available" type="button" onClick={() => handleAddToCart({ ...prodfilter })}><img src="/images/bag.svg" alt="" />Adicionar ao Cesto</button>)}
                                </div>
                            )))
                        }
                    </div>
                </div>
            </section>
            
            <div className="next-prev-page">
            {location.pathname.includes(`/products/${theme}/`) ? 
                (<div>
                    {currentPage && (
                        <NavLink to={`/products/${theme}/${previousPage}`} className="chevron">
                            <img src="/images/chevron.svg" alt="Página anterior" />
                        </NavLink>
                    )}
                    {Array.from({ length: totalPages }, (_, i) => (
                        <NavLink key={i + 1} to={`/products/${theme}/${i + 1}`}>
                            {i + 1}
                        </NavLink>
                    ))}
                    {currentPage && (
                        <NavLink to={`/products/${theme}/${nextPage}`} className="chevron.rotate">
                            <img src="/images/chevron.svg" alt="Próxima página" />
                        </NavLink>
                    )}
                </div>)
                :
                (<div>
                    {currentPage && (
                        <NavLink to={`/products/search/${previousPage}`} className="chevron">
                            <img src="/images/chevron.svg" alt="Página anterior" />
                        </NavLink>
                    )}
                    {Array.from({ length: totalPagesSearch }, (_, i) => (
                        <NavLink key={i + 1} to={`/products/search/${i + 1}`}>
                            {i + 1}
                        </NavLink>
                    ))}
                    {currentPage && (
                        <NavLink to={`/products/search/${nextPageSearch}`} className="chevron.rotate">
                            <img src="/images/chevron.svg" alt="Próxima página" />
                        </NavLink>
                    )}
                </div>)
            }
            </div>
        </main>
    );
}