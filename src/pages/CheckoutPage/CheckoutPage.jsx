import "./CheckoutPage.css";
import {CartSummaryCard} from "../CartPage/cartComponents/CartSummaryCard";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataProvider";
import { AddressListComponents } from "./checkoutComponents/AddressListComponent";

export function CheckoutPage() {

    const {dataState} = useContext(DataContext);

    return(
        <>
            <div className="checkoutpage-container">
                <AddressListComponents address={dataState.address}/>
                <CartSummaryCard cartList={dataState.cart}/>
            </div>
        </>
    )
}