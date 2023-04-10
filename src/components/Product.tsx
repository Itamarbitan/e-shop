import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

interface Props {
    image: string;
    _id: number;
    title: string;
    subTitle: string;
    price: number;
    phone: string;
    bizNumber: string;
    user_id: string;
    handleDeleteCard: Function;
    addToCart: Function;
}

function Product({
        image,
        _id,
        title,
        subTitle,
        price,
        phone,
        bizNumber,
        user_id,
        handleDeleteCard,
        addToCart
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
            <div className="card shadow p-1 mb-3 bg-body-tertiary rounded">
                <img src={`${image}`} className="card-img-top rounded img-fluid img-thumbnail" alt={title} />  
                <div className="card-body">
                    <h5 className="card-title text-start">{title}</h5>
                    <span className="text-muted">{subTitle}</span>
                    <hr />
                    <p><strong>Price: </strong><span className="font-size-lg text-primary pt-2">{price+'$'}</span></p>
                    <p><strong>Phone: </strong>{phone}</p>
                    <small>Card Number: {bizNumber}</small>
                    <hr />
                    <div className="d-flex justify-content-evenly">
                        {
                            isCurrentUser &&
                            <>
                                <Link 
                                    to={`/edit/${_id}`}
                                    className="btn btn-default">
                                    <i className="bi-pen"></i>
                                </Link>
           

                                <button 
                                    onClick={(e) => handleDeleteCard(e)}
                                    className="btn btn-default">
                                    <i className="bi-trash"></i>
                                </button>
                            </>
                        }
                        <button 
                            onClick={(e) => addToCart(e)}
                            className="btn btn-default">
                            <i className="bi bi-cart"></i>
                        </button>                          
                    </div>
                </div>  
            </div>
        </div>


        </>

        
    );
}

export default Product;