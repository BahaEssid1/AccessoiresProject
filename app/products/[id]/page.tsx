"use client"
import { useRouter } from 'next/router';

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Product Details</h1>
            <p>Product ID: {id}</p>
        </div>
    );
};

export default ProductDetails;
