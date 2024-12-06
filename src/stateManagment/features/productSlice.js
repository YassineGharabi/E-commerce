import { createSlice } from "@reduxjs/toolkit";


const  productSlice = createSlice({
    name:'products',
    initialState : {
        hidden : false,
        products : [],
        qteProduct : 1,
        countPanier : 0
    },
    reducers:{
        hiddenPanier: (state) => {
            state.hidden = !state.hidden
        },
        addProducts: (state,action) => {
            state.products = [...state.products,action.payload]
            state.countPanier += 1
        },
        removeProduct: (state,action) => {
            state.products = state.products.filter( produit => produit.id != action.payload.id)
            state.countPanier -= 1
        },
    }
})

export const {hiddenPanier,addProducts,removeProduct} = productSlice.actions

export default productSlice.reducer