import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { ACTIONS, DataReducer } from "../reducers/DataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const {SET_CATEGORIES, SET_PRODUCTLIST} = ACTIONS;

    const [dataState, dispatchData] = useReducer(DataReducer, {
        categories: [],
        productlist: [],
        wishlist: [], 
        cart: []
    })

    const getCategories = async () => {
        try{
            const response = await axios.get("/api/categories");
            if (response.status === 200) dispatchData({type: SET_CATEGORIES, payload: response.data.categories})
        }
        catch (error) { console.error(error); }
    }

    const getProductlist = async () => {
        try{
            const response = await axios.get("/api/products");
            if(response.status === 200) dispatchData({type: SET_PRODUCTLIST, payload: response.data.products})
        }
        catch (error) { console.error(error); }
    }

    useEffect(() => {
        getCategories();
        getProductlist();
    }, [])

    console.log("datastate",dataState);

    return (
        <>
            <DataContext.Provider value={{dataState, dispatchData}}>{children}</DataContext.Provider>
        </>
    )
}