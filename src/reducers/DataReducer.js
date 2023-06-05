export const ACTIONS = {
    SET_CATEGORIES: "set_categories",
    SET_PRODUCTLIST: "set_productlist",
    SET_WISHLIST_ITEMS: "set_wishlist_items"
}

const {SET_CATEGORIES, SET_PRODUCTLIST, SET_WISHLIST_ITEMS} = ACTIONS

export const DataReducer = (state, action) => {
    switch(action.type) {

        case SET_CATEGORIES: { 
            return {...state, categories: [...action.payload]} 
        }

        case SET_PRODUCTLIST: {
            return {...state, productlist: [...action.payload]}
        }

        case SET_WISHLIST_ITEMS: {
            return {...state, wishlist: [...action.payload]}
        }

       default: {
        return {...state}
       }
    }
}