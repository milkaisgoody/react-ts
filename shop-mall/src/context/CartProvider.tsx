import { useState } from "react";
import { CartContext } from "./CartContext";
import type { CartItem } from "../types/cart";
import { useProduct } from "./ProductContext";

const CartProvider = ({children} : {children: React.ReactNode}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    //상품 가져오기
    const {products} = useProduct();

    const addToCart = (productId : number, qty: number) => {
        setCartItems(prevItems => {
            //이미 장바구니에 있는 상품인지 검색
            const existingItem = prevItems.find(item => 
                item.productId === productId)
            if(existingItem){
                //이미 장바구니에 있는 상품 (1증가)
                return prevItems.map(item => 
                    item.productId === productId
                    ?{...item,qty : item.qty + qty} : item
                )
            }else{
                //장바구니에 처음으로 담기
                return [...prevItems, {productId, qty}]
            }
        })
    } //addToCart() 닫기

    //총 수량 계산
    const totalQuantity 
        = cartItems.reduce((sum, item) => sum + item.qty, 0);

    //가격의 총합 (상품 가격 x 수량)
    const totalPrice = cartItems.reduce((sum, item) => {
        // productId로 상품 정보 찾기 
        const product = products.find(p => p.id === item.productId)
        return sum + (product ? product.price * item.qty: 0);
    }, 0)

    return (
        <CartContext.Provider value={{
            cartItems, 
            addToCart,
            totalQuantity, 
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;