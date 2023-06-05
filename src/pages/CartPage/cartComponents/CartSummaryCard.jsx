import "./CartSummaryCard.css"

export function CartSummaryCard({cartList}) {

    const totalPrice = (cartList) => cartList.reduce((acc, {qty, price}) => acc + (qty * price) , 0)

    return (
        <>
            <div className="cartsummary-card-container">
                <div className="cart-summary-heading">
                Cart Price Details
                </div>
                <hr />
                <div className="product-checkoutlist-container">
                {cartList.map(({title, qty, price}) => (
                    <div className="product-summary">
                        <p>{title} ({qty})</p>
                        <p>{qty * price}</p>
                    </div>
                ) )}
                </div>
                <hr />
                <div className="total-price">
                    <p>Total Price</p>
                    <p>{totalPrice(cartList)}</p>
                </div>
                <button className="checkout">
                    Checkout
                </button>
            </div>
        </>
    )
}