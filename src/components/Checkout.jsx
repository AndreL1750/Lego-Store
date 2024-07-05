import { NavLink } from "react-router-dom";
import { useCart } from "./CartContext";
import { useEffect, useState } from "react";

export default function Checkout() {

    const { cartItems, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, clearCart, calculateSubtotal } = useCart();

    const calculateTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const [confirmationStatus, setConfirmationStatus] = useState(false);
    const confirmationDisplay = confirmationStatus ? "block" : "none";

    const [taxedSubtotal, setTaxedSubtotal] = useState(parseFloat(calculateSubtotal().toFixed(2)));
    const [discount, setDiscount] = useState(1);

    const nonTaxedSubtotal = taxedSubtotal / 1.23;
    const taxValue = parseFloat((taxedSubtotal - nonTaxedSubtotal).toFixed(2));

    const codes = {
        "Lego10Off": 0.90,
        "LegoTime": 0.95,
        "LegoIsLife": 0.85,
        "LegoFan": 0.80
    };
 
    useEffect(() => {
        setTaxedSubtotal(parseFloat((calculateSubtotal() * discount).toFixed(2)));
    }, [cartItems, discount, calculateSubtotal]);

    const [codeInput, setCodeInput] = useState("");
    const [input, setInputStatus] = useState(false);
    const [promoStatus, setPromoStatus] = useState(false);
    const [chevronStatus, setChevronStatus] = useState(false);
    const [isCodeValid, setIsCodeValid] = useState(null);

    const chevronRotate = chevronStatus ? "-270deg" : "-90deg";
    const promoDisplay = promoStatus ? "block" : "none";
    const text = input ? "Remover" : "Aplicar";

    function promoHandler(e) {
        if (input) {
            setDiscount(1);
            setInputStatus(false);
            setIsCodeValid(null);
            setCodeInput("");
        } 
        else if (codes[codeInput]) {
            setInputStatus(true);
            setDiscount(codes[codeInput]);
            setIsCodeValid(true);
        } 
        else {
            setIsCodeValid(false);
        }
    }

    const originalSubtotal = parseFloat(calculateSubtotal().toFixed(2));
    const discountAmount = parseFloat((originalSubtotal - taxedSubtotal).toFixed(2));
    
    return(
        <main className="Checkout">
            <h2 className="cart-h2"><span>O meu cesto ({calculateTotalQuantity()})</span></h2>
            <div className="cart-wrapper">
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
                            <h3 className="cart-prod-name">{prodfilter.set_name}</h3> 
                                <div className="cart-prod-price">{prodfilter.set_price + "€"}</div>
                            <div>
                                <p className="cart-prod-desc">{prodfilter.prod_desc.substring(0, 200) + "..."}</p>
                                <button className="cart-trash" onClick={() => removeItemFromCart(prodfilter)}><img src="/images/trash.svg" alt="" /></button>
                            </div>
                            <div className="cart-quantity">
                                <button className="cart-removeBtn" onClick={() => decreaseItemQuantity(prodfilter.set_id)}><img src="/images/remove.svg" alt="" /></button>
                                <input className="cart-input" type="number" value={prodfilter.quantity} disabled/>
                                <button className="cart-addBtn" onClick={() => increaseItemQuantity(prodfilter.set_id)}><img src="/images/add.svg" alt="" /></button>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
                <div className="cart-side">
                    <h2>Resumo da Encomenda</h2>
                    <div className="promo-wrapper">
                        <button type="button" className="promo-btn" onClick={() => {setPromoStatus(!promoStatus); setChevronStatus(!chevronStatus)}}><span>Adicionar Código Promocional</span><img style={{transform: 'rotate('+chevronRotate+')', transition: "all 0.1s linear"}} src="/images/chevron.svg" alt="" /></button>
                        <div style={{display: promoDisplay}} className="promo-input">
                            <label>
                                <input type="text" placeholder="Introduzir Código..." value={codeInput} disabled={input} onChange={(e) => {setCodeInput(e.target.value); console.log(codeInput);}} />
                                <button type="button" onClick={promoHandler}>{text}</button>
                            </label>
                        </div>
                        {isCodeValid === true && promoStatus === true && (<div className="codeValid"><img src="/images/check.svg" alt="" /><span>Código Válido.</span></div>)}
                        {isCodeValid === false && promoStatus === true && (<div className="codeInvalid"><img src="/images/cross.svg" alt="" /><span>Código Inválido.</span></div>)}
                    </div>
                    <div className="subtotal"><span>Total da Encomenda:</span><span>{taxedSubtotal}€</span></div>
                    {discountAmount > 0 && (
                        <div className="discount"><span>Desconto:</span><span>{discountAmount}€</span></div>
                    )}
                    <div className="iva">Inclui {taxValue}€ de IVA</div>
                    <div className="sidebar-btn">
                        <button className="complete-order"><img src="/images/secure.svg" alt="" />Finalizar Compra Segura</button>
                        {cartItems.length > 0 ? (<button className="cancel-order" onClick={() => setConfirmationStatus(!confirmationStatus)}>Limpar Carrinho</button>) : (<button className="cancel-order">Limpar Carrinho</button>)}
                    </div>
                    <div className="payment-methods">
                        <img src="/images/paypal.svg" alt="" />
                        <img src="/images/visa.svg" alt="" />
                        <img src="/images/mastercard.svg" alt="" />
                        <img src="/images/lego-gift-card.png" alt="" />
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
        </main>
    );
}