import React, { useState } from 'react';
import { useCart } from './CartContext';
import { NavLink } from 'react-router-dom';

function Cart() {

    const { cartItems, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart, calculateSubtotal } = useCart();

    const calculateTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const [subtotalStatus, setSubtotalStatus] = useState(false);
    const handleSubtotalDisplay = () => setSubtotalStatus(!subtotalStatus);
    const subtotalDisplay = subtotalStatus ? "block" : "none";

    const [darkSpace, setDarkSpace] = useState(false);
    const darkDisplay = darkSpace ? "block" : "none";

    const [confirmationStatus, setConfirmationStatus] = useState(false);
    const confirmationDisplay = confirmationStatus ? "block" : "none";


    function cartBtn() {
        return (
            <div className="cartBtn" style={{display: subtotalDisplay}}>
                <ul>
                    {cartItems.length === 0 ? (<div className="empty-cart">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" aria-hidden="true"><g fill="currentColor" fillRule="evenodd"><path d="M4 3.512v5.804c0 .377.349.684.779.684.43 0 .779-.307.779-.684V3.512C5.558 2.33 6.653 1.368 8 1.368c1.347 0 2.442.962 2.442 2.144v5.804c0 .377.35.684.78.684.43 0 .778-.307.778-.684V3.512C12 1.575 10.206 0 8 0S4 1.575 4 3.512z"/><path d="M2.46 6.33c-.269 0-.489.194-.5.441L1.435 18.19a.436.436 0 00.131.332.52.52 0 00.348.149h12.151c.276 0 .501-.207.501-.462l-.525-11.436c-.011-.248-.23-.442-.5-.442H2.46zM14.448 20l-12.974-.001a1.591 1.591 0 01-1.064-.462 1.357 1.357 0 01-.408-1.03L.56 6.372C.595 5.602 1.277 5 2.11 5h11.78c.835 0 1.516.602 1.551 1.372l.56 12.197c0 .789-.697 1.431-1.553 1.431z"/></g></svg>
                        </div>
                        <div>
                            <span>O teu cesto está vazio</span>
                        </div>
                    </div>) : cartItems.map((prodfilter, set_id) => (
                    <li key={set_id}>
                        <NavLink to={`/product/${prodfilter.set_id}`}>
                                <img className="cart-img" src={prodfilter.images[0]} alt="" />
                        </NavLink>
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
                        <span>Subtotal:</span><span>{calculateSubtotal().toFixed(2)}€</span>
                    </div>
                    <div className="sidebar-btn">
                        <NavLink style={{margin: "5px auto", borderRadius: "20px"}} to="/checkout"><button className="complete-order" onClick={() => {setSubtotalStatus(!subtotalStatus); setDarkSpace(!darkSpace);}}>Finalizar Compra Segura</button></NavLink>
                        {cartItems.length > 0 ? (<button className="cancel-order" onClick={() => setConfirmationStatus(!confirmationStatus)}>Limpar Carrinho</button>) : (<button className="cancel-order">Limpar Carrinho</button>)}
                    </div>
                </div>
                <div style={{display: confirmationDisplay}} className="confirmation-clear sidebar-btn">
                    <div className="sidebar-btn ">
                        <h3>Tem mesmo a certeza que quer apagar o seu Carrinho?</h3>
                        <button className="confirmation-yes complete-order" onClick={() => {clearCart(); setConfirmationStatus(!confirmationStatus);}}>Sim, tenho mesmo a certeza.</button>
                        <button className="confirmation-no cancel-order" onClick={() => setConfirmationStatus(!confirmationStatus)}>Não, mudei de ideias.</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="Cart">
            <h2 onClick={() => {handleSubtotalDisplay(); setDarkSpace(!darkSpace);}}><span>{calculateTotalQuantity()}</span></h2>
            <div className="dark-space" style={{display: darkDisplay}} onClick={() => {handleSubtotalDisplay(); setDarkSpace(!darkSpace);}}></div>
            
            {cartBtn()}
        </div>
  );
}

export default Cart;