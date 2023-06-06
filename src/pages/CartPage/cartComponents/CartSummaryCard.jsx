import { useLocation, useNavigate } from "react-router-dom";

import "./CartSummaryCard.css"


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { successToastmessage } from "../../../components/Toastmessage/successToastmessage";
import { useContext } from "react";
import { DataContext } from "../../../contexts/DataProvider";
import { ACTIONS } from "../../../reducers/DataReducer";

export function CartSummaryCard({cartList}) {

    const {dispatchData} = useContext(DataContext)

    const {SET_CART_ITEMS} = ACTIONS;

    const location = useLocation();

    const navigate = useNavigate();

    const totalPrice = (cartList) => cartList.reduce((acc, {qty, price}) => acc + (qty * price) , 0);

    const placeorderHandler = () => {
        successToastmessage("Order has been placed successfully!!");
        navigate("/orderplaced")
        dispatchData({type: SET_CART_ITEMS, payload: []});
    }

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
                {location?.pathname === "/checkout" && <button className="checkout" onClick={() => placeorderHandler()}>
                    Place Order
                </button>}
            </div>
        </>
    )
}