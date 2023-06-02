import { NavLink, useNavigate } from "react-router-dom"

import "./HomePage.css";
import { Footer } from "../../components/Footer/Footer"
import { categories } from "../../backend/db/categories";
import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterProvider";
import { ACTIONS } from "../../reducers/FilterReducer";

export function HomePage() {

    const navigate = useNavigate();

    const {dispatchFilter} = useContext(FilterContext);
    const {SET_CATEGORY_FILTER} = ACTIONS

    const categoryNavigationHandler = (categ) => dispatchFilter({type: SET_CATEGORY_FILTER, payload: categ})

    return (
        <>
            <div className="homepage-container">

                <div className="main-img-container">
                    <img className="main-img" src="assets/images/homepageimg.jpg" alt="" onClick={() => navigate("/productlist")} />
                </div>

                <div className="category-container">

                    <div className="container-heading">
                        <h2 className="heading">SHOP BY CATEGORY</h2>
                    </div>

                    <div className="categories-list">
                        {categories.map(({ _id, categoryName, description, image }) => (
                            <NavLink to="/productlist" onClick={() => categoryNavigationHandler(categoryName.toUpperCase())}>
                                <div key={_id} className="category-item">
                                    <div className="category-img-container">
                                        <img className="category-img" src={image} alt="" />
                                    </div>
                                    <div className="category-name">
                                        <h3>{categoryName}</h3>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}