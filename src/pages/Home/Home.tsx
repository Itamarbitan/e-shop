import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../App";
import BusinessCards from "../../components/BusinessCards";
import MenuBar from "../../components/MenuBar";
import Title from "../../components/Title";
import { getRequest } from "../../services/apiService";

function Home() {
    const context = useContext(AppContext);
    
    function getProducts() {
        const res = getRequest('cards', false);

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

    // Hook useEffect, Run getBusinessCards function only ones time then page loades.
    useEffect(getProducts,[]);

    return (  
        <>        
            <Title 
                main="E-Shop"
                sub="All you need for in one place"
            />
            <MenuBar />
            <BusinessCards />
        </>
    );
}

export default Home;