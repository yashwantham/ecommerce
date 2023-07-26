
import { useContext } from "react"
import "./ProductlistPage.css"
import { ProductlistPageAside } from "./productlistComponents/ProductlistPageAside"
import { ProductlistPageMain } from "./productlistComponents/ProductlistPageMain"
import { FilterContext } from "../../contexts/FilterProvider"

export function ProductlistPage() {

    const { viewasidemobile, setViewAsidemobile } = useContext(FilterContext);

    const filterCilckhandler = () => {
        console.log("filter clicked");
        setViewAsidemobile(true);
    }

    return (
        <>
            <div className="productlistpage-outer-container">
                <div className="aside-section-viewer" onClick={filterCilckhandler}>
                    <i class="fa-solid fa-sliders aside-section-viewer-icon"></i>Filters
                </div>
                <div className="productlist-page-container">
                    <ProductlistPageAside />
                    <ProductlistPageMain />
                </div>
            </div>
        </>
    )
}