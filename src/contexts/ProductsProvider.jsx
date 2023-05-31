import { createContext } from "react";

export const ProductContext = createContext();

export function ProductsProvider({ children }) {

    return (
        <>
            <ProductContext.Provider value={1}>{children}</ProductContext.Provider>
        </>
    )
}