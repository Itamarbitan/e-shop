import { useContext } from "react";
import { AppContext } from "../App";

function MenuBar() {
    const context = useContext(AppContext);

    
    if (!context) {
        return <div>Error</div>
    }

    return (  
        <div className="d-grid p-4">
            <div className="align-items-center w-50 mx-3">
                <div className="mb-3">
                <button
                    onClick={(e) => context.handleCardsDisplayMode('col-12 col-md-6 col-lg-4')}
                    className="btn mx-1"
                >
                    <i className="bi-grid-3x3-gap"></i>
                </button>
                <button
                    onClick={(e) => context.handleCardsDisplayMode('list')}
                    className="btn btn-sucess mx-1"
                >
                    <i className="bi-list-task"></i>
                </button>
                </div>
                <input
                    value={context.search}
                    onChange={(e) => context.handleSearch(e.target.value, context.businessCards)}
                    className="form-control ms-3 w-50"
                    placeholder="Enter a product name or number"
                ></input>

            </div>
        </div>    
    );
}

export default MenuBar;