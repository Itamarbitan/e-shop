import Joi from "joi";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Title from "../../components/Title";
import { getRequest, patchRequest } from "../../services/apiService";
import { IError } from "../../types/types";

interface IProductData {
    title: string;
    subTitle: string;
    description: string;
    price: number;
    phone: string;
    image: string;
}

function Edit() {
    const navigate = useNavigate();
    const { id } = useParams(); 
    const [title, setTitle] = useState<string>('');
    const [subTitle, setSubTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<number>();
    const [phone, setPhone] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [error, setError] = useState<IError>({});


    useEffect(() => {
        const res = getRequest(`cards/${id}`);
        if (!res) {
            return;
        }

        res
        .then(res => res.json())
        .then(json => {
            if (json.ok === false) {
                return;
            }

            setTitle(json.title);
            setSubTitle(json.subTitle);
            setDescription(json.description);
            setPrice(json.price);
            setPhone(json.phone);
            setImage(json.image);
        })
    },[id]);    

    function submit() {
        const schema = Joi.object().keys({
            title: Joi.string().required().min(2).max(255),
            subTitle: Joi.string().required().min(2).max(255),
            description: Joi.string().required().min(2).max(1024),
            price: Joi.number().required().min(0).max(99999),
            phone: Joi.string().required().min(9).max(17),
            image: Joi.string().required().min(2).max(1024),
        });

        const { error, value } = schema.validate({
            title,
            subTitle,
            description,
            price,
            phone,
            image
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
        updateCard(value); 
    }

    function updateCard(data: IProductData) {
        const res = patchRequest(
            `cards/${id}`,
            data
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
            toast.success(`Product ${json.title} Updated succsessifully`,{
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });              
            navigate('/');
        });
    }

    return (
        <>
            <Title 
                main="Product Updating Form"
                sub="Here you can update the product details"
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
                    <label className="mb-2 fs-5">Product Description:</label>
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
                    error && error.price && 
                    <div className="text-danger">
                        {error.price}
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
                    <label className="mb-2 fs-5">Product Image:</label>
                    <input
                        type="url"
                        className="form-control text-muted mb-3"
                        placeholder="Image url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    >
                    </input>
                </div>                {
                    error && error.image && 
                    <div className="text-danger">
                        {error.image}
                    </div>
                }   
                <div>
                    <button
                        onClick={submit}
                        className="btn btn-primary btn-lg me-3"
                    >Update Product
                    </button>
                    <Link
                        to="/"
                        className="btn btn-secondary btn-lg"
                    >Cancel
                    </Link>
                </div>
                <hr/>
            </div>
        </>
    );
}

export default Edit;