import { useContext, useState } from "react";
import { AppContext } from "../App";
import ProductInCart from "./ProductInCart";



function CartItems() {
    const context = useContext(AppContext);

    if (!context) {
        return <div>Error</div>;
    }

    // const [total,setTotal] = useState<number>(0);

    const cartItems = context.cartItems || [];
    const delCartItem = context.deleteProductFromCart || function () {} ;



    return (        
        <>
        <div className="container mb-5">
            <div className="row g-4 m-auto">
                {
                    cartItems.map((card, index) => 
                        <ProductInCart 
                            key={index}
                            {...card}
                            handleDeleteCard={() => delCartItem(card, cartItems)}
                        />
                    )
                }
            </div>
        </div>


        </>
    );
}

export default CartItems;