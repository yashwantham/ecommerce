import { useLocation, useNavigate } from "react-router-dom";

import "./CartSummaryCard.css"

export function CartSummaryCard({cartList}) {

    const location = useLocation();
    console.log(location)

    const navigate = useNavigate();

    const totalPrice = (cartList) => cartList.reduce((acc, {qty, price}) => acc + (qty * price) , 0)

    return (
        <>
            <div className="cartsummary-card-container">
                <div className="cart-summary-heading">
                {location?.pathname === "/cart" && "Cart Price Details"}
                {location?.pathname === "/checkout" && "Order Summary"}
                </div>
                <hr />
                <div className="product-checkoutlist-container">
                {cartList.map(({title, qty, price}) => (
                    <div className="product-summary">
                        <p>{title} ({qty})</p>
                        <p>{qty * price}</p>
                    </div>
                ) )}
                </div>
                <hr />
                <div className="total-price">
                    <p>Total Price</p>
                    <p>{totalPrice(cartList)}</p>
                </div>
                {location?.pathname === "/cart" && <button className="checkout" onClick={() => navigate("/checkout")}>
                    Checkout
                </button>}
                {location?.pathname === "/checkout" && <button className="checkout" >
                    Place Order
                </button>}
            </div>
        </>
    )
}