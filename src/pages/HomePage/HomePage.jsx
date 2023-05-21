import { useNavigate } from "react-router-dom"

import "./HomePage.css";
import { categories } from "../../backend/db/categories";

export function HomePage() {

    const navigate = useNavigate();

    return (
        <>
            <div className="homepage-container">

                <div className="main-img-container">
                    <img className="main-img" src="assets/images/homepageimg.jpg" alt="" onClick={() => navigate("/productlist")} />
                </div>
                
                <div className="category-container">

                    <div className="container-heading">
                        <h2 className="heading">Shop by Category</h2>
                    </div>

                    <div className="categories-list">
                        {categories.map(({ _id, categoryName, description, image }) => (
                            <div key={_id} className="category-item">
                                <div className="category-img-container">
                                    <img className="category-img" src={image} alt="" />
                                </div>
                                <div className="category-name">
                                    <h3>{categoryName}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}