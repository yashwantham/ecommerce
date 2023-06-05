import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import "./SingleproductPage.css"
// import { DataContext } from "../../contexts/DataProvider";
import axios from "axios";

export function SingleproductPage() {

    const [selectedProduct, setSelectedProduct] = useState({});
    const { productId } = useParams();

    // console.log(productId)

    // const [isLoading, setIsLoading] = useState(true);

    const getProduct = async() => {
        try{
            const response = await axios.get(`/api/products/${productId}`);
            if(response.status === 200){ console.log(response)
                setSelectedProduct(response.data.product)
                // setIsLoading(false);
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
         getProduct();
    }, [productId])

    const discountPercentage = (price, original_price) => Math.round((price / original_price) * 100);

    
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

    return (
        <>
            <div className="selectedproduct-detail-container">

                <div className="selectedproduct-img-container">
                    <img className="selectedproduct-img" src={selectedProduct?.image} alt="" />
                </div>

                <div className="selectedproduct-allinfo">
                    <div className="selectedproduct-title-container">
                        <h1>{selectedProduct?.title}</h1>
                    </div>
                    <div className="selectedproduct-rating-n-review">
                        <span>{selectedProduct?.rating}<span><i className="star-icon fa-solid fa-star"></i></span> | {`${selectedProduct?.reviews} Reviews`}</span>
                    </div>
                    <hr />
                    <div className="selectedproduct-price-n-btns">
                        <div className="selectedproduct-pricedetails">
                            <div className="selectedproduct-price-details-ele selectedproduct-actual-price">
                                {`₹${selectedProduct?.price}`}
                            </div>
                            <div className="selectedproduct-price-details-ele selectedproduct-original-price">
                                {`₹${selectedProduct?.original_price}`}
                            </div>
                            <div className="selectedproduct-price-details-ele selectedproduct-discount">
                                {`${100 - discountPercentage(selectedProduct?.price, selectedProduct?.original_price)}% OFF`}
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
                            <strong>Availabilty:</strong>{` ${selectedProduct?.in_stock ? "In Stock" : "Out of Stock"}`}
                        </div>
                        <div className="selectedproduct-description">
                            <strong>Description:</strong>{` ${selectedProduct?.description}`}
                        </div>
                        <div className="selectedproduct-size">
                            <strong>Size:</strong>{` ${selectedProduct?.size}`}
                        </div>
                        <div className="selectedproduct-deliverytime">
                            <strong>Delivery:</strong>{` Get it in ${selectedProduct?.delivery_time} days`}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}