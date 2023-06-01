import { useContext } from "react";

import { DataContext } from "../../../contexts/DataProvider";
import { ProductCard } from "./ProductCard";
import "./ProductlistPageMain.css";

export function ProductlistPageMain() {
    
    const { dataState } = useContext(DataContext);

    const { productlist } = dataState;
    console.log(productlist);
    return (
        <>
            <div className="productlist-container">
                {productlist.map((product) => <ProductCard product={product}/>)}
            </div>
        </>
    )
}