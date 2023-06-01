import { useContext } from "react";
import { useParams } from "react-router-dom"

import "./SingleproductPage.css"
import { DataContext } from "../../contexts/DataProvider";

export function SingleproductPage() {

    const { productId } = useParams();

    const { dataState } = useContext(DataContext);

    const { productlist } = dataState;

    const selectedProduct = productlist.find(({ _id }) => _id == productId);

    const discountPercentage = (price, original_price) => Math.round((price / original_price) * 100);

    return (
        <>
            <div className="selectedproduct-detail-container">

                <div className="selectedproduct-img-container">
                    <img className="selectedproduct-img" src={selectedProduct.image} alt="" />
                </div>

                <div className="selectedproduct-allinfo">
                    <div className="selectedproduct-title-container">
                        <h1>{selectedProduct.title}</h1>
                    </div>
                    <div className="selectedproduct-rating-n-review">
                        <span>{selectedProduct.rating}<span><i className="star-icon fa-solid fa-star"></i></span> | {`${selectedProduct.reviews} Reviews`}</span>
                    </div>
                    <hr />
                    <div className="selectedproduct-price-n-btns">
                        <div className="selectedproduct-pricedetails">
                            <div className="selectedproduct-price-details-ele selectedproduct-actual-price">
                                {`₹${selectedProduct.price}`}
                            </div>
                            <div className="selectedproduct-price-details-ele selectedproduct-original-price">
                                {`₹${selectedProduct.original_price}`}
                            </div>
                            <div className="selectedproduct-price-details-ele selectedproduct-discount">
                                {`${100 - discountPercentage(selectedProduct.price, selectedProduct.original_price)}% OFF`}
                            </div>
                        </div>
                        <small className="taxes-text">inclusive of all taxes</small>
                        <div className="selectedproduct-btns">
                            <div className="selectedproduct-addtocart-btn">
                                <button>Add to Cart</button>
                            </div>
                            <div className="selectedproduct-wishlist-btn">
                                <button>Wishlist</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="selectedproduct-otherdetails">
                        <div className="bestoffers">
                            <i class="fa-solid fa-tag"></i>{` Best Offers`}
                        </div>
                        <div className="selectedproduct-availabality">
                            <strong>Availabilty:</strong>{` ${selectedProduct.in_stock ? "In Stock" : "Out of Stock"}`}
                        </div>
                        <div className="selectedproduct-description">
                            <strong>Description:</strong>{` ${selectedProduct.description}`}
                        </div>
                        <div className="selectedproduct-size">
                            <strong>Size:</strong>{` ${selectedProduct.size}`}
                        </div>
                        <div className="selectedproduct-deliverytime">
                            <strong>Delivery:</strong>{` Get it in ${selectedProduct.delivery_time} days`}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}