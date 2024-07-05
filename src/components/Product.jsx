import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useCart } from './CartContext';

export function Product() {

    const { id, theme } = useParams();
    const [product, setProduct] = useState(null);
    const { addItemToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState("");
    const sideImagesCount = 2;

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

    console.log(product.theme_name)

    return (
        <main className="Product">
            <div className="path">
                <ul>
                    <li><NavLink to={"/"}>Página Principal</NavLink></li>
                    <li><img src="/images/chevron.svg" alt="" /></li>
                    {theme !== undefined ? (<li><NavLink to={`/products/${theme}/1`}>{theme}</NavLink></li>) :(<li><NavLink to={`/products/search/1`}>Pesquisa</NavLink></li>)}
                    <li><img src="/images/chevron.svg" alt="" /></li>
                    <li>{product.set_name}</li>
                </ul>
            </div>
            <div className="prod-wrapper">
                <section className="prod-display">
                    <div className="main-image">
                        <img src={mainImage || product.images[0]} alt={product.set_name} />
                    </div>
                    <div className="side-images">
                        {Array.from({ length: sideImagesCount }, (_, index) => (
                            product.images.map((image, index) => (
                                <img key={index} src={image} alt={`${product.set_name} ${index + 1}`} onClick={() => setMainImage(image)} />
                            ))
                        ))}    
                    </div>
                    <div className="info-prod">
                    <div>
                        <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M36.972 26.744c-.135-3.129-.322-7.406-5.725-7.406h-7.441V14.89a1.257 1.257 0 0 0 .926-.502c2.947-4.005 0-7.075-3.16-10.315l-.671-.697a1.308 1.308 0 0 0-1.835 0l-.671.697c-3.143 3.24-6.108 6.31-3.16 10.315a1.258 1.258 0 0 0 .926.502v4.465H8.753c-5.402 0-5.59 4.252-5.725 7.406v.68a3.175 3.175 0 0 0 2.242 3.462c.098.029.197.048.298.06v4.761A1.276 1.276 0 0 0 6.816 37H33.15a1.273 1.273 0 0 0 1.274-1.276v-4.77c.1-.018.2-.04.297-.068a3.169 3.169 0 0 0 2.252-3.461v-.68ZM19.983 6.08c2.999 3.113 4.018 4.482 3.033 6.25H16.95c-.986-1.768.034-3.137 3.032-6.25Zm-1.274 8.81h2.548v4.448H18.71V14.89ZM5.542 26.855c.162-3.682.459-4.966 3.177-4.966h22.494c2.718 0 3.016 1.284 3.177 4.966v.697c0 .749-.246.85-.416.85a2.207 2.207 0 0 1-2.098-.756 3.681 3.681 0 0 0-3.169-1.956 3.7 3.7 0 0 0-3.185 2.007 1.088 1.088 0 0 1-.91.646 1.213 1.213 0 0 1-1.019-.672 4.393 4.393 0 0 0-3.448-2.143h-.289a4.388 4.388 0 0 0-3.466 2.118 1.215 1.215 0 0 1-1.02.672 1.07 1.07 0 0 1-.908-.647 3.706 3.706 0 0 0-3.186-2.007 3.676 3.676 0 0 0-3.185 1.982 2.2 2.2 0 0 1-2.124.8c-.17-.052-.45-.137-.416-.851l-.009-.74Zm2.549 7.594v-3.742a4.248 4.248 0 0 0 2.2-1.794 1.14 1.14 0 0 1 .96-.672 1.188 1.188 0 0 1 .976.689 3.562 3.562 0 0 0 3.135 1.956 3.726 3.726 0 0 0 3.245-1.999 1.861 1.861 0 0 1 1.36-.85 1.858 1.858 0 0 1 1.358.85 3.732 3.732 0 0 0 3.245 1.999 3.557 3.557 0 0 0 3.135-1.956 1.19 1.19 0 0 1 .977-.689 1.138 1.138 0 0 1 .96.672 4.248 4.248 0 0 0 2.234 1.794v3.742H8.09Z"/></svg>
                        {product.ages}
                    </div>
                    <div>
                        <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m8.18 11.486-.03.014c-.15.141-.15.775-.15.775v17.79c0 .38.21.733.571.916l10.956 5.892c.15.085.33.127.51.127s.361-.042.527-.127l10.865-5.892c.36-.183.571-.536.571-.916V12.26s0-.634-.18-.747l-.166-.127-.796-.437-4.043-2.199-.18-.084V6.919C26.635 4.692 23.87 3 20.038 3c-3.833 0-6.583 1.706-6.583 3.933V8.61m6.583-3.481c2.675 0 4.373 1.07 4.373 1.818 0 .747-1.698 1.818-4.373 1.818-2.675 0-4.374-1.071-4.374-1.818 0-.747 1.729-1.818 4.374-1.818Zm-4.374 4.778a9.916 9.916 0 0 0 4.374.959 9.542 9.542 0 0 0 4.373-.959v.212c0 .76-1.698 1.832-4.373 1.832-2.675 0-4.374-1.071-4.374-1.818v-.226Zm3.277 8.726v15.52l-8.717-4.709V14.01l8.716 4.567v.07-.013Zm1.112-1.819-7.65-4.045-.992-.494-.12-.056 2.3-1.269c.6 1.819 3.17 3.101 6.462 3.101 3.29 0 5.77-1.24 6.432-3.016l2.164 1.198h.015l-8.581 4.595-.03-.014Zm9.783 12.616-8.656 4.737v-15.52l8.656-4.652V29.43Z"/></svg>
                        {product.piece_count}
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 36 36" className="Icon__StyledSVG-lm07h6-0 fFzRmK"><path d="M13.81 12.333l-2.833 11.334h11.216l2.834-11.334H13.81zm.945-3.777H25.97l1.53-6.124a1.89 1.89 0 013.668.914l-1.303 5.21h3.245c1.047 0 1.889.846 1.889 1.889a1.887 1.887 0 01-1.889 1.888h-4.19l-2.833 11.334h7.023c1.047 0 1.889.846 1.889 1.888a1.887 1.887 0 01-1.889 1.89h-7.967l-1.534 6.123a1.888 1.888 0 11-3.66-.914l1.299-5.21H10.033l-1.534 6.124a1.888 1.888 0 11-3.66-.914l1.299-5.21h-3.25a1.89 1.89 0 010-3.777h4.194l2.834-11.334H2.889a1.89 1.89 0 010-3.777h7.971l1.534-6.124a1.884 1.884 0 012.285-1.375 1.883 1.883 0 011.375 2.29l-1.3 5.209z" fill="currentColor" stroke="#FFF" fillRule="evenodd"></path></svg>
                        {product.set_id}
                    </div>
                </div>
                </section>
                <div className="infoBuy">
                    <div className="tags">
                        { product.tags === "exclusive" ? (<span>Exclusivo</span>) : product.tags === "new" ? (<span>Novidade</span>) : product.tags === "hardtofind" ? (<span>Difícil de Encontrar</span>) : (<></>)}
                        { theme !== "" &&  <a href={`/products/${theme}/1`}><img src={`/images/products/${theme}_logo.png`} alt="" /></a>}
                        { theme === undefined &&  <a href={`/products/${product.theme_name}/1`}><img src={`/images/products/${product.theme_name}_logo.png`} alt="" /></a>}
                    </div>
                    <div className="name">
                        <h2>{product.set_name}</h2>
                    </div>
                    <div className="price">
                        <span>{product.set_price}€</span>
                    </div>
                    <div className="statusmsg">
                        {product.prod_status === "preorder" && <span>Aceitam-se reservas apartir de 7 dias antes do lançamento. Serão enviadas até 7 dias após lançamento.</span>}
                    </div>
                    <div className="quantity">
                        <label>
                            <button className="removeBtn" type="button" onClick={handleDecrease}><img src="/images/remove.svg" alt="" /></button>
                            <input type="text" name="quantity" value={quantity} disabled />
                            <button className="addBtn" type="button" onClick={handleIncrease}><img src="/images/add.svg" alt="" /></button>
                            <span>Limite: 3</span>
                        </label>
                        {product.prod_status === "preorder" ? (<button className="addCart preorder" type="button" disabled><img src="/images/bag.svg" alt="" />Reserva</button>) : product.prod_status === "unavailable" ? (<button className="addCart unavailable" type="button"  disabled><img src="/images/bag.svg" alt="" />Indisponível</button>) : (<button className="addCart available" type="button" onClick={() => handleAddToCart({ ...product })}><img src="/images/bag.svg" alt="" />Adicionar ao Cesto</button>)}
                        <button className="wishlist" type="button"><img src="/images/wishlist.svg" alt="" /></button>
                    </div>
                    <div className="details">
                        <p>{product.prod_desc}</p>
                    </div>
                </div>
                
            </div>
        </main>
    );
}