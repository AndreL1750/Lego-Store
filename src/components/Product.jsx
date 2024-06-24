import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

    function handleSubmit(e) {
        e.preventDefault();
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
                    <li><a href="/">Página Principal</a><img src="/images/chevron.svg" alt="" /></li>
                    <li><a href="/products/architecture/1">Architecture</a><img src="/images/chevron.svg" alt="" /></li>
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
                    <div className="exclusive">
                        <span>Novidades</span>
                        <a href="/products/architecture/1"><img src="/images/architecture/architecture_logo.png" alt="" /></a>
                    </div>
                    <div className="name">
                        <h2>{product.set_name}</h2>
                    </div>
                    <div className="price">
                        <span>{product.set_price}€</span>
                    </div>
                    <div className="statusmsg">
                        <span>Aceitam-se reservas. Serão enviadas a partir de 17 de julho de 2024.</span>
                    </div>
                    <form className="quantity" onSubmit={handleSubmit}>
                        <label>
                            <button className="removeBtn" type="button" onClick={handleDecrease}><img src="/images/remove.svg" alt="" /></button>
                            <input type="text" name="quantity" value={quantity} disabled />
                            <button className="addBtn" type="button" onClick={handleIncrease}><img src="/images/add.svg" alt="" /></button>
                            <span>Limite: 3</span>
                        </label>
                        <div className="form-bot-btn">
                            <button className="form-submit" type="submit"><img src="/images/bag.svg" alt="" />Adicionar ao Carrinho</button>
                            <button className="wishlist" type="button"><img src="/images/wishlist.svg" alt="" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}