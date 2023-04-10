import Joi from "joi";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../../App";
import Title from "../../components/Title";
import { postRequest } from "../../services/apiService";
import { IError } from "../../types/types";

interface IProductData {
    title: string;
    subTitle: string;
    description: string;
    price: number;
    phone: string;
    image: string;
}

function ProductRegistration() {
    const context = useContext(AppContext);
          
    const navigate = useNavigate();
    const [title, setTitle] = useState<string>('');
    const [subTitle, setSubTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<number>();
    const [phone, setPhone] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [error, setError] = useState<IError>({});

    function submit() {
        const schema = Joi.object().keys({
            title: Joi.string().required().min(2).max(255),
            subTitle: Joi.string().required().min(2).max(255),
            description: Joi.string().required().min(2).max(1024),
            price: Joi.number().required(),
            phone: Joi.string().min(9).max(17).required(),
            image: Joi.string().required().min(2).max(1024)
        });

        const { error, value } = schema.validate({
            title,
            subTitle,
            description,
            price,
            phone,
            image,
        },{abortEarly: false});

        if (error) {
            const result : IError = {};

            error.details.forEach((item) => {
            if (item.context) {
                    const key = item.context.key + '';
                    result[key] = item.message;
                }
            });

            setError(result);
            return;
        }

        setError({});
        createCard(value); 
    }

    function createCard(data: IProductData) {
        const res = postRequest(
            'cards',
            data,
            false
        );
        
        if (!res) {
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
            toast.success(`New Product ${json.title} Added succsessifully`,{
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });              
            navigate('/card');
        });
    }

    return (  
        <>
            <Title 
                main="New product Registration Form"
                sub=""
            />
            <div className="p-3 form-max-w w-50 m-auto">
                <hr/>
                <div className="mp-3">
                    <label className="mb-2 fs-5">Title:</label>
                    <input
                        type="text"
                        className="form-control text-muted mb-3"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    >
                    </input>
                </div>
                {
                    error && error.title && 
                    <div className="text-danger">
                        {error.title}
                    </div>
                }                
                <div className="mp-3">
                    <label className="mb-2 fs-5">Sub Title:</label>
                    <input
                        type="text"
                        className="form-control text-muted mb-3"
                        placeholder="Sub Title"
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
                    >
                    </input>
                </div>
                {
                    error && error.subTitle && 
                    <div className="text-danger">
                        {error.subTitle}
                    </div>
                }                   
                <div className="mp-3">
                    <label className="mb-2 fs-5">Description:</label>
                    <textarea
                        className="form-control text-muted mb-3"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </textarea>
                </div>
                {
                    error && error.description && 
                    <div className="text-danger">
                        {error.description}
                    </div>
                }                    
                <div className="mp-3">
                    <label className="mb-2 fs-5">Product price:</label>
                    <input
                        type="text"
                        className="form-control text-muted mb-3"
                        placeholder="Product price"
                        value={price}
                        onChange={(e) => setPrice(+e.target.value)}
                    >
                    </input>
                </div>
                {
                    error && error.address && 
                    <div className="text-danger">
                        {error.address}
                    </div>
                }                     
                <div className="mp-3">
                    <label className="mb-2 fs-5">Business Phone:</label>
                    <input
                        type="tel"
                        className="form-control text-muted mb-3"
                        placeholder="Example Phone: +972500000000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    >
                    </input>
                </div>
                {
                    error && error.phone && 
                    <div className="text-danger">
                        {error.phone}
                    </div>
                }                   
                <div className="mp-3">
                    <label className="mb-2 fs-5">Image:</label>
                    <input
                        type="url"
                        className="form-control text-muted mb-3"
                        placeholder="Image url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    >
                    </input>
                </div>
                <div>
                    <button
                        onClick={submit}
                        className="btn btn-primary btn-lg"
                    >Create Product
                    </button>
                </div>
                <hr/>
            </div>
        </>
    );
}

export default ProductRegistration;