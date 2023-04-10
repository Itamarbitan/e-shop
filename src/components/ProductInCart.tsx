import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

interface Props {
    _id: number;
    title: string;
    subTitle: string;
    price: number;
    quantity: number;
    phone: string;
    image: string;
    bizNumber: string;
    user_id: string;
    handleDeleteCard: Function;
}

function ProductInCart({
        _id,
        title,
        subTitle,
        price,
        quantity=1,
        phone,
        image,
        bizNumber,
        user_id,
        handleDeleteCard,
        
    }: Props) {
    
    const context = useContext(AppContext);


    if (!context) {
        return <div>Error</div>;
    }  
    
    let isCurrentUser: boolean = false;
    if (user_id === context.user_id) {
        isCurrentUser = true;
    }

    return (  
        <>
        <div className={context.cardsDisplayMode}>

        </div>

        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-3 mt-2">
                <img src={`${image}`} className="card-img-top rounded img-fluid img-thumbnail" alt={title} />  
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{subTitle}</p>
                    <p className="card-text"><small className="font-size-lg text-primary pt-2">{price+'$'}</small></p>
                    <hr />
                    <div className="d-flex justify-content-evenly">

                                <button
                                 className="btn btn-outline-danger btn-sm btn-block mb-2"
                                 type="button"
                                 onClick={(e) => handleDeleteCard(e)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2 mr-1">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>Remove
                                </button>


                                <div className="form-group mb-2">
                                    <label htmlFor="quantity1">Quantity {quantity}</label>
                                </div>
                   
                    </div>
                </div>
                </div>
            </div>
        </div>

        </>

        
    );
}

export default ProductInCart;