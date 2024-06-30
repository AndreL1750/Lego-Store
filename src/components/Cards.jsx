import { useEffect, useState } from "react";

export default function Cards() {
    
    let [prodMax] = useState(12);

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
             
        fetch('/legosetshmm.json')
        .then(response => response.json())
        .then(product => setProducts(product)); 
        
    }, []);
    
    console.log(products);
    console.log(prodMax);

    return (
        <div>
            <div className="product-list">
                {
                    products.slice(0, prodMax).map((product, index) => (
                        <div className="product" key={index}>
                            <img src="/images/lego-logo.svg" alt="" />
                            <h3>{product.set_name}</h3>
                            <div>{product.list_price + "$"} {product.star_rating}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}