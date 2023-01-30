import { useContext } from "react";
import { AppContext } from "../App";
import Card from "../pages/Card/Card";



function BusinessCards() {
    const context = useContext(AppContext);

    if (!context) {
        return <div>Error</div>;
    }

    const businessCards = context.filteredBusinessCards || [];
    const delBusinessCard = context.deleteCard || function () {} ;

    return (        
        <div className="container mb-5">
            <div className="row g-4 m-auto">
                {
                    businessCards.map((card) => 
                        <Card 
                            key={card._id}
                            {...card}
                            handleDeleteCard={() => delBusinessCard(card, businessCards)}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default BusinessCards;