'use client';

import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/ProductID.module.css';


function ProductPage() {

    const params = useParams();

    const getProduct = async () => {
        const res = await axios.get(`/api/products/${params.id}`);
        const data = res.data;
        return data;
    };

    const [product, setProduct] = useState<{ image: string; name: string; description: string; price: number; stock: number, gender: string } | null>(null);

    useEffect(() => {
        getProduct().then((product) => {
            setProduct(product);
        });
    }, [params.id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className={styles.container}>
            <img className={styles.img} src={product.image} alt={product.name} />
            <h1 className={styles.h1}>{product.name}</h1>
            </div>
            <p className={styles.p}>{product.description}</p>
            <p className={styles.p}>${product.price} USD</p>
            <p className={styles.p}>Stock: {product.stock}</p>
            <div className={styles.container}>
                <Link className={styles.button} href="#">Carrito</Link>
                <Link className={styles.button} href={product.gender === 'male' ? '/gentlemen' : product.gender === 'female' ? '/ladies' : '/unisex'}>Volver</Link>
            </div>
        </div>
    );

}

export default ProductPage;
