import { useState } from "react";

export function Product() {

    //const labelFilters = ["Architecture", "City", "Marvel", "Angry Birds™", "DUPLO®", "Creator Expert", "Disney™"];
    
    const [x, setX] = useState(1);

    const [prodQuantity] = useState({
        quantity: 1
    });

    if(x > 3) {
        setX(3);
    }
    if(x < 1) {
        setX(1);
    }

    function handleSubmit(e) {
        e.preventDefault();

        prodQuantity.quantity = x;
        
        console.log(prodQuantity);
    }

    return (
        <main className="Product">
            <div className="path">
                <ul>
                    <li><a href="/">Página Principal</a><img src="/images/chevron.svg" alt="" /></li>
                    <li><a href="/products/architecture/1">Architecture</a><img src="/images/chevron.svg" alt="" /></li>
                    <li>set_id</li>
                </ul>
            </div>
            <div className="prod-wrapper">
                <section className="prod-display">
                    <div className="side-images">
                        <img src="/images/architecture/21061/1-21061.webp" alt="" />
                        <img src="/images/architecture/21061/1-21061.webp" alt="" />
                        <img src="/images/architecture/21061/1-21061.webp" alt="" />
                        <img src="/images/architecture/21061/1-21061.webp" alt="" />
                        <img src="/images/architecture/21061/1-21061.webp" alt="" />
                        <img src="/images/architecture/21061/1-21061.webp" alt="" />
                        <img src="/images/architecture/21061/1-21061.webp" alt="" />
                        <img src="/images/architecture/21061/1-21061.webp" alt="" />
                        <img src="/images/architecture/21061/1-21061.webp" alt="" />
                        <img src="/images/architecture/21061/1-21061.webp" alt="" />
                        <img src="/images/architecture/21061/1-21061.webp" alt="" />
                        <img src="/images/architecture/21061/1-21061.webp" alt="" />
                    </div>
                    <div className="main-image">
                        <img src="/images/architecture/21061/1-21061.webp" alt="" />
                    </div>
                </section>
                <div className="infoBuy">
                    <div className="exclusive">
                        <span>Novidades</span>
                        <a href="/products/architecture/1"><img src="/images/architecture/architecture_logo.png" alt="" /></a>
                    </div>
                    <div className="name">
                        <h2>Notre-Dame de Paris</h2>
                    </div>
                    <div className="price">
                        <span>229.99€</span>
                    </div>
                    <div className="statusmsg">
                        <span>Aceitam-se reservas. Serão enviadas a partir de 17 de julho de 2024.</span>
                    </div>
                    <form className="quantity" onSubmit={handleSubmit}>
                        <label>
                            <button className="removeBtn" type="button" onClick={() => setX(x - 1)}><img src="/images/remove.svg" alt="" /></button>
                            <input type="text" name="quantity" value={x} disabled />
                            <button className="addBtn" type="button" onClick={() => setX(x + 1)}><img src="/images/add.svg" alt="" /></button>
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