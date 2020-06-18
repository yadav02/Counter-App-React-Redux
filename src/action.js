//  count action
export const RESET = "RESET"
export const DECREASE = "DECREASE"
export const INCREASE = "INCREASE"

// modal actions
export const MODAL_OPEN = "MODAL_OPEN"
export const MODAL_CLOSE = "MODAL_CLOSE"

// product action
export const SET_LOADING = "SET_LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";

// action cretors

export const decrease = ()=>{
    return{type:DECREASE}
}

export const increase = ()=>{
    return{type:INCREASE}
}

export const reset = ()=>{
    return{type:RESET}
}

export const modalOpen = (name, text)=>{
    return{type:MODAL_OPEN, payload: { name, text}}
}

export const setLoading = () => {
   return {type:SET_LOADING}
}

export const getProducts = () =>{
    return async function(dispatch){
        dispatch(setLoading());
        const response = await fetch(
            "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
        );
        const data = await response.json();
        dispatch({type:GET_PRODUCTS, payload:data})

    }
}