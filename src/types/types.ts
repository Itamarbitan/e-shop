export interface IUserData {
    name: string;
    email: string;
    password: string;
    izBiz: boolean;
}

export interface IError {
    [key: string]: string;
}

export interface IProduct {
    _id: number;
    title: string;
    subTitle: string;
    description: string;
    price: number;
    quantity: number;
    phone: string;
    image: string;
    bizNumber: string;
    user_id: string;
    createdAt: Date;
}