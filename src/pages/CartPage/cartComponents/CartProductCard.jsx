import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

import "./CartProductCard.css"
import { removeFromCart, updateItemQuantityInCart } from "../../../utils/cartService";
import { useContext } from "react";
import { DataContext } from "../../../contexts/DataProvider";
import { addToWishlist, isWishlisted } from "../../../utils/wishlistService";

export function CartProductCard({ product }) {

    const {dataState, dispatchData} = useContext(DataContext);
    
    const authToken = localStorage.getItem("userToken");

    const discountPercentage = (price, original_price) => Math.round((price / original_price) * 100);

    const removeFromCartHandler = (e, authToken, product, dispatchData) => {
        e.preventDefault();
        removeFromCart(authToken, product._id, dispatchData);
    }

    const moveToWishlistHandler = (e, authToken, product, dispatchData) => {
        e.preventDefault();
        if(!isWishlisted(dataState, product._id)) {
            addToWishlist(authToken, product, dispatchData);
        }
        removeFromCart(authToken, product._id, dispatchData);
    }

    const cartUpdateHandler = (e, authToken, product, type, dispatchData) => {
        e.preventDefault();
        if(product.qty === 1) {
            removeFromCart(authToken, product._id, dispatchData);
        }
        updateItemQuantityInCart(authToken, product._id, type, dispatchData);
    }

    return (
        <>
            <div className="cartproduct-card-container">
                <div className="cartproduct-img-container">
                    <img className="cartproduct-img" src={product.image} alt="" />
                </div>
                <div className="cartproduct-details-container">
                    <div className="cartproduct-title">
                        {product.title}
                    </div>
                    <div className="cartproduct-price-details">
                        <div className="price-det-ele actualprice">
                            {`₹${product.price}`}
                        </div>
                        <div className="price-det-ele originalprice">
                            {`₹${product.original_price}`}
                        </div>
                        <div className="price-det-ele discountpercent">
                            {`${100 - discountPercentage(product.price, product.original_price)}% OFF`}
                        </div>
                    </div>
                    <div className="cartproduct-size">
                        Size: {product.size}
                    </div>
                    <div className="qty-btns-container">
                       
                        <FontAwesomeIcon icon={faCircleMinus} className="dec-icon"  onClick={(e) => cartUpdateHandler(e, authToken, product, "decrement", dispatchData)}/>
                        <span>{product.qty}</span>
                        <FontAwesomeIcon icon={faCirclePlus} className="inc-icon" onClick={(e) => cartUpdateHandler(e, authToken, product, "increment", dispatchData)}/>
                        
                    </div>
                    <div className="remove-wishlist-btn-container">
                        <div className="remove-btn-cont">
                            <button className="remove-btn" onClick={(e) => removeFromCartHandler(e, authToken, product, dispatchData)}>Remove from Cart</button>
                        </div>
                        <div className="movetowishlist-btn-cont">
                            <button className="movetowishlist-btn" onClick={(e) => moveToWishlistHandler(e, authToken, product, dispatchData)}>Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}