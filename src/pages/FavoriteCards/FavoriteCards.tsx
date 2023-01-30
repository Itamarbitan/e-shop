import BusinessCards from "../../components/BusinessCards";
import MenuBar from "../../components/MenuBar";
import Title from "../../components/Title";

function FavoriteCards() {
    return (  
        <>
            <Title 
                main="Your Favorite Cards"
                sub=""
            />
            <MenuBar />
            <BusinessCards />
        </>
    );
}

export default FavoriteCards;