import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../../App";
import BusinessCards from "../../components/BusinessCards";
import CartItems from "../../components/CartItems";
import MenuBar from "../../components/MenuBar";
import Title from "../../components/Title";
import { getRequest } from "../../services/apiService";

function MyProducts() {
    const context = useContext(AppContext);
    const navigate = useNavigate();

    function getProducts() {
        const res = getRequest(`cards/user/${context?.user_id}`);
        
        if(!res) {
            console.log('No response...')
            return;
        }

        res
        .then(response => response.json())
        .then(json => {
            if (json.error) {
                toast.error(json.error, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });                
                return;
            }     
            context?.updateBusinessCards(json);
        });
    }

    useEffect(() => {
        if (!context?.user_id) {
            navigate('/signin');
            return;
        }
        getProducts();
    },[]);

    return ( 
        <>
            <Title 
                main="My Products"
                sub="Manage your products here"
            /> 
            <MenuBar />
            <BusinessCards />
        </>
    );
}

export default MyProducts;