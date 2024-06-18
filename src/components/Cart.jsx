import React, { useState } from 'react';
import { useCart } from './CartContext';

function Cart() {

    const { cartItems, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart, calculateSubtotal } = useCart();

    const [subtotalStatus, setSubtotalStatus] = useState(false);

    const handleSubtotalDisplay = () => setSubtotalStatus(!subtotalStatus);

    const subtotalDisplay = subtotalStatus ? "block" : "none";

    const calculateTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div className="Cart">
            <h2 onClick={handleSubtotalDisplay}><span>{calculateTotalQuantity()}</span></h2>
            <ul style={{display: subtotalDisplay}}>
                {cartItems.map((prodfilter, set_id) => (
                <li key={set_id}>
                    <img className="cart-img" src={prodfilter.images[0]} alt="" />
                    <div>
                        <h3>{prodfilter.set_name}</h3> 
                        <div>{prodfilter.set_price + "€"}</div>
                        {"Quantidade: " + prodfilter.quantity}
                        <div>
                            <button onClick={() => decreaseItemQuantity(prodfilter.set_id)}><img src="/images/remove.svg" alt="" /></button>
                            <button onClick={() => increaseItemQuantity(prodfilter.set_id)}><img src="/images/add.svg" alt="" /></button>
                            <button onClick={() => removeItemFromCart(prodfilter)}><img src="/images/cross.svg" alt="" /></button>
                        </div>
                    </div>
                </li>
                ))}
            </ul>
            <div style={{display: subtotalDisplay}}>
                <div className="subtotal">
                    Subtotal: {calculateSubtotal().toFixed(2) + "€"}
                </div>
                <button onClick={clearCart}>Limpar Carrinho</button>
            </div>
        </div>
  );
}

export default Cart;