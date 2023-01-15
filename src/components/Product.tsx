import { useState } from "react"
import { IProduct } from "../mudels"

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false);
    const btnClassName = (!details) ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClasses = ["py-2 px-4 border bg-yellow-400", btnClassName];
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} alt={product.title} className="w-1/6" />
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            {details && <div>
                <p>{product.description}</p>
                {product.rating && <p>Rate: <span style={{ fontWeight: 'bold' }}>{product.rating.rate}</span></p>}
            </div>}
            <button className={btnClasses.join(' ')} onClick={() => setDetails(prev => !prev)}>
                {details ? 'Hide details' : 'Show details'}
            </button>
        </div>
    )
}