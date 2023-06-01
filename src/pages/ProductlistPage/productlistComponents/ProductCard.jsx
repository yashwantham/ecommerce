import { NavLink } from "react-router-dom";

import "./ProductCard.css";

export function ProductCard({ product }) {

    const discountPercentage = (price, original_price) => Math.round((price / original_price) * 100);

    return (
        <>
            <div className="productcard-container" key={product._id}>
                <NavLink to={`/productdetail/${product._id}`} className="product-card">
                    <div className="product-img-n-icon">
                        <div className="product-img-container">
                            <img className="product-img" src={product.image} alt="" />
                        </div>
                        <span className="wishlist-icon-container">
                            <i class="wishlist-icon fa-solid fa-heart"></i>
                        </span>
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