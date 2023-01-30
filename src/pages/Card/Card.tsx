import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

interface Props {
    _id: number;
    title: string;
    subTitle: string;
    address: string;
    phone: string;
    bizNumber: string;
    user_id: string;
    handleDeleteCard: Function;
}

function Card({
        _id,
        title,
        subTitle,
        address,
        phone,
        bizNumber,
        user_id,
        handleDeleteCard
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
            <div className="card">
                <img 
                src="https://cdn.pixabay.com/photo/2018/03/03/19/29/skyscraper-3196390_1280.jpg"   
                className="card-img-top rounded" alt="alt" />  
                <div className="card-body">
                    <h5 className="card-title text-start">{title}</h5>
                    <span className="text-muted">{subTitle}</span>
                    <hr />
                    <p><strong>Address: </strong>{address}</p>
                    <p><strong>Phone: </strong>{phone}</p>
                    <p><strong>Card Number: </strong>{bizNumber}</p>
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
                            className="btn btn-default">
                            <i className="bi-hand-thumbs-up"></i>
                        </button>                          
                    </div>
                </div>  
            </div>
        </div>


        </>

        
    );
}

export default Card;