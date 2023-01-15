import { useContext } from "react";
import { CreateProduct } from "../components/CreateProduct";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/loader";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";
import { ModalContext } from "../context/createContext";
import { useProducts } from "../hooks/products";
import { IProduct } from "../mudels";

export function ProductsPage() {

    const { products, error, loading, addProduct } = useProducts();
    const { modal, open, close } = useContext(ModalContext);

    const createHandler = (product: IProduct) => {
        close();
        addProduct(product);
    }

    return (
        <>
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {products.map(product => <Product product={product} key={product.id} />)}

            {modal && <Modal title='Create new product' onClose={() => close()}>
                <CreateProduct onCreate={createHandler} />
            </Modal>}

            <button className='fixed bottom-5 right-5 rounded-full bg-yellow-400 text-2xl px-3 py-1' onClick={() => open()}>+</button>
        </>
    )
}