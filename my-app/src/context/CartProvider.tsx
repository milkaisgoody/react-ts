import { Children, useReducer } from "react"
import { CartContext } from "./CartContext"
import type { CartItem, CartAction } from "./CartContext"

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
    switch(action.type){
        
    }
}
const CartProvider = ({children: ReactNode}) => {
    const [cart, dispatch] = useReducer(cartReducer, []);
    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}