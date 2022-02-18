import { useState } from "react";

const initiaState = {
    cart: [],
}

const useInitialState = () =>{
    const [state, setState] = useState(initiaState);
    
    const AddToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload ]
        })
    }

    const removeFromCart = (payload)=>{
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id),
        })
    }
    return{
        state,
        AddToCart,
        removeFromCart,
    }
}

export default useInitialState;

