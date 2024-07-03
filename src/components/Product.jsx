import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useCart } from './CartContext';

export function Product() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addItemToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState("");
    const sideImagesCount = 6;

    useEffect(() => {
        fetch('/architecture.json')
            .then(response => response.json())
            .then(products => {
                const foundProduct = products.find(product => product.set_id === parseInt(id, 10));
                setProduct(foundProduct);
            });
    }, [id]);

    function handleDecrease() {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    }

    function handleIncrease() {
        setQuantity(prevQuantity => Math.min(3, prevQuantity + 1));
    }

    function handleAddToCart() {
        addItemToCart(product, quantity);
        console.log(product, quantity);
      }

    if (!product) {
        return <div>A Carregar...</div>;
    }

    return (
        <main className="Product">
            <div className="path">
                <ul>
                    <li><NavLink to={"/"}>Página Principal</NavLink></li>
                    <li><img src="/images/chevron.svg" alt="" /></li>
                    <li><NavLink to={`/products/search/1`}>Procurar</NavLink></li>
                    <li><img src="/images/chevron.svg" alt="" /></li>
                    <li>{product.set_name}</li>
                </ul>
            </div>
            <div className="prod-wrapper">
                <section className="prod-display">
                    <div className="side-images">
                        {Array.from({ length: sideImagesCount }, (_, index) => (
                            product.images.map((image, index) => (
                                <img key={index} src={image} alt={`${product.set_name} ${index + 1}`} onClick={() => setMainImage(image)} />
                            ))
                        ))}    
                    </div>
                    <div className="main-image">
                        <img src={mainImage || product.images[0]} alt={product.set_name} />
                    </div>
                </section>
                <div className="infoBuy">
                    <div className="tags">
                        { product.tags === "exclusive" ? (<span>Exclusivo</span>) : product.tags === "new" ? (<span>Novidade</span>) : product.tags === "hardtofind" ? (<span>Difícil de Encontrar</span>) : (<></>)}
                        <a href="/products/architecture/1"><img src="/images/architecture/architecture_logo.png" alt="" /></a>
                    </div>
                    <div className="name">
                        <h2>{product.set_name}</h2>
                    </div>
                    <div className="price">
                        <span>{product.set_price}€</span>
                    </div>
                    <div className="statusmsg">
                        {product.prod_status === "preorder" && <span>Aceitam-se reservas. Serão enviadas até 7 dias após lançamento.</span>}
                    </div>
                    <div className="quantity">
                        <label>
                            <button className="removeBtn" type="button" onClick={handleDecrease}><img src="/images/remove.svg" alt="" /></button>
                            <input type="text" name="quantity" value={quantity} disabled />
                            <button className="addBtn" type="button" onClick={handleIncrease}><img src="/images/add.svg" alt="" /></button>
                            <span>Limite: 3</span>
                        </label>
                        <div className="form-bot-btn">
                        {product.prod_status === "preorder" ? (<button className="addCart preorder" type="button" onClick={() => handleAddToCart({ ...product })}><img src="/images/bag.svg" alt="" />Reserva</button>) : product.prod_status === "unavailable" ? (<button className="addCart unavailable" type="button"  disabled><img src="/images/bag.svg" alt="" />Indisponível</button>) : (<button className="addCart available" type="button" onClick={() => handleAddToCart({ ...product })}><img src="/images/bag.svg" alt="" />Adicionar ao Cesto</button>)}
                        <button className="wishlist" type="button"><img src="/images/wishlist.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}