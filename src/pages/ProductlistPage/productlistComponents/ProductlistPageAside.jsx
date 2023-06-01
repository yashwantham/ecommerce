import "./ProductlistPageAside.css"

export function ProductlistPageAside() {
    return (
        <>
            <div className="filters-contaier">
                <div className="filters-heading">
                    <h2>Filters</h2>
                    <button>Clear</button>
                </div>
                <div className="price-slider">
                    <input type="range" min="1" max="1000" value="500" />
                </div>
                <div className="categories-filter">
                    <h3>Category</h3>
                    <div><input type="checkbox" /><label>Men</label></div>
                    <div> <input type="checkbox" /><label>Women</label></div>
                    <div><input type="checkbox" /><label>Kids</label></div>
                </div>
                <div className="sizes-filter">
                    <h3>Size</h3>
                    <div><input type="checkbox" /><label>S</label></div>
                    <div><input type="checkbox" /><label>M</label></div>
                    <div><input type="checkbox" /><label>L</label></div>
                    <div><input type="checkbox" /><label>XL</label></div>
                    <div><input type="checkbox" /><label>XXL</label></div>
                </div>
                <div className="ratings-filter">
                    <h3>Rating</h3>
                    <div><input type="radio" name="" id="" />4 stars & above</div>
                    <div><input type="radio" name="" id="" />3 stars & above</div>
                    <div><input type="radio" name="" id="" />2 stars & above</div>
                    <div><input type="radio" name="" id="" />1 stars & above</div>
                </div>
                <div className="sorts-filter">
                    <h3>Sort by</h3>
                    <div><input type="radio" />Low to High</div>
                    <div><input type="radio" />High to Low</div>
                </div>
            </div>
        </>
    )
}