import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


import "./ProductCard.css";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { addToWishlist, isWishlisted, removeFromWishlist } from "../../../utils/wishlistService";
import { DataContext } from "../../../contexts/DataProvider";


export function ProductCard({ product }) {

    const navigate = useNavigate();

    const {authState} = useContext(AuthContext);

    const {dataState, dispatchData} = useContext(DataContext);

    const authToken = localStorage.getItem("userToken");

    const addToWishlistHandler = (e, authToken, product) => {
        e.preventDefault();
        if(!authState.isLoggedin) {
            navigate("/login");
        }
        else if(isWishlisted(dataState, product._id)) {
            removeFromWishlist(authToken, product._id, dispatchData);
        } else {
            addToWishlist(authToken, product, dispatchData);
        }
    }

    const addToCartHandler = (e, authToken, product) => {
        
    }

    const discountPercentage = (price, original_price) => Math.round((price / original_price) * 100);

    return (
        <>
            <div className="productcard-container" key={product._id}>
                <NavLink to={`/productlist/${product._id}`} className="product-card">
                    <div className="product-img-n-icon">
                        <div className="product-img-container">
                            <img className="product-img" src={product.image} alt="" />
                        </div>
                        <div className="wishlist-icon-container" onClick={(e) => addToWishlistHandler(e, authToken, product)}>
                            {isWishlisted(dataState, product._id) ? <FontAwesomeIcon icon={faHeart} className="wishlist-icon-red" /> : <FontAwesomeIcon icon={faHeart} className="wishlist-icon" /> }
                        </div>
                    </div>
                    <div className="product-info">
                        <div className="product-title">
                            {product.title}
                        </div>
                        <div className="price-details">
                            <div className="price-details-ele actual-price">
                                {`₹${product.price}`}
                            </div>
                            <div className="price-details-ele original-price">
                                {`₹${product.original_price}`}
                            </div>
                            <div className="price-details-ele discount">
                                {`${100 - discountPercentage(product.price, product.original_price)}% OFF`}
                            </div>
                        </div>
                        <div className="rating-n-size">
                            <div className="rating">
                                {`${product.rating}`}
                                <span><i className="star-icon fa-solid fa-star"></i></span>
                            </div>
                            <div className="size">
                                {product.size}
                            </div>
                        </div>
                        <div className="addtocart-btn-container">
                            <button className="addtocart-btn">Add to Cart</button>
                        </div>
                    </div>
                </NavLink>
            </div>
        </>
    )
}