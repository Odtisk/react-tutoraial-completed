import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../mudels";
import { ErrorMessage } from "./ErrorMessage";

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

const productData: IProduct = {
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 100,
    "description": "New product",
    "category": "Some clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": { "rate": 3.9, "count": 120 }
};


export function CreateProduct({ onCreate }: CreateProductProps) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const submitHandler = async (event: React.FormEvent) => {
        setError('');
        event.preventDefault();
        if (value.trim().length === 0) {
            setError('Please enter product title');
            return;
        }
        productData.title = value;
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
        onCreate(response.data);
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" className="border py-2 px-4 mb-2 w-full outline-0" placeholder="Enter product title" value={value}
                onChange={event => setValue(event.target.value)} />
            <button type="submit" className="border py-2 px-4 bg-yellow-400 hover:bg-yellow-300">Create product</button>
            {error && <ErrorMessage error={error} />}
        </form>
    );
}