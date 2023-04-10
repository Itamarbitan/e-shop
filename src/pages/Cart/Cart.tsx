import { useEffect, useContext } from "react";
import MenuBar from "../../components/MenuBar";
import Title from "../../components/Title";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { getRequest } from "../../services/apiService";
import { toast } from "react-toastify";
import CartItems from "../../components/CartItems";

function Cart() {

    const context = useContext(AppContext);
    const navigate = useNavigate();

    const checkout = context?.checkout || function (){}
    const getCart = context?.getCart || function() {}

    useEffect(() => {
        if (!context?.user_id) {
            navigate('/signin');
            return;
        }
    },[]);




    return (  
        <>
            <Title 
                main="Your Cart"
                sub="please review your cart before checkout"
            />
            <CartItems />
            <div className="mx-auto">
            <button type="button" className="btn btn-success" onClick={(e)=>checkout()}>Check out</button>
            </div>
        </>
    );
}

export default Cart;