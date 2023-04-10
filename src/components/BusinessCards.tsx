import { useContext } from "react";
import { AppContext } from "../App";
import Product from "./Product";



function BusinessCards() {
    const context = useContext(AppContext);

    if (!context) {
        return <div>Error</div>;
    }

    const businessCards = context.filteredBusinessCards || [];
    const delBusinessCard = context.deleteCard || function () {} ;
    const addToCart = context.addToCart

    return (        
        <div className="container mb-5">
            <div className="row g-4 m-auto">
                {
                    businessCards.map((card) => 
                        <Product 
                            key={card._id}
                            {...card}
                            handleDeleteCard={() => delBusinessCard(card, businessCards)}
                            addToCart={() => addToCart(card)} />
                    )
                }
            </div>
        </div>
    );
}

export default BusinessCards;