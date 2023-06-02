export const ACTIONS = {
    SET_CATEGORIES: "set_categories",
    SET_PRODUCTLIST: "set_productlist"
}

const {SET_CATEGORIES, SET_PRODUCTLIST} = ACTIONS

export const DataReducer = (state, action) => {
    switch(action.type) {

        case SET_CATEGORIES: { 
            return {...state, categories: [...action.payload]} 
        }

        case SET_PRODUCTLIST: {
            return {...state, productlist: [...action.payload]}
        }

       default: {
        return {...state}
       }
    }
}