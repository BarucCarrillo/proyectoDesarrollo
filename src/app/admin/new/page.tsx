'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios, { AxiosError } from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '@/styles/NewProduct.module.css';

const ProductForm: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const productId = searchParams.get('id'); // Obtener el id del producto desde los parámetros de búsqueda

    const [product, setProduct] = useState({
        name: '',
        price: '',
        stock: '',
        description: '',
        image: '',
        gender: 'unisex'
    });

    const [error, setError] = useState<string | null>(null);

    // Obtener el producto si el id está presente en la URL
    const getProduct = async () => {
        try {
            const res = await axios.get(`/api/products/${productId}`);
            setProduct(res.data);
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data.message || error.message);
            }
        }
    };

    // Llamar a getProduct cuando el id cambie (para editar)
    useEffect(() => {
        if (productId) {
            getProduct(); // Obtener el producto para edición si existe el id
        }
    }, [productId]);

    // Manejar el envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            if (productId) {
                // Actualizar producto
                const response = await axios.put(`/api/products/${productId}`, {
                    ...product,
                    price: Number(product.price),
                    stock: Number(product.stock),
                });

                console.log('Producto actualizado:', response.data);
                alert("Producto actualizado exitosamente!");
                router.push("/admin"); // Redirigir después de actualizar
            } else {
                // Crear nuevo producto
                const response = await axios.post("/api/auth/newproduct", {
                    ...product,
                    price: Number(product.price),
                    stock: Number(product.stock),
                });

                console.log('Producto agregado:', response.data);
                alert("Producto agregado exitosamente!");
                setProduct({
                    name: '',
                    price: '',
                    stock: '',
                    description: '',
                    image: '',
                    gender: 'unisex'
                });
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data.message || error.message);
            }
        }
    };

    return (
        <div>
            {error && <div className={styles.error}>{error}</div>}
            <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label className={styles.label}>Nombre del Producto:</label>
                <input
                type="text"
                name="name"
                className={styles.input}
                value={product.name}
                onChange={(e) => {
                    const value = e.target.value;
                    if (/^[a-zA-Z0-9\s]*$/.test(value)) {
                    setProduct({ ...product, name: value });
                    }
                }}
                required
                minLength={3}
                maxLength={50}
                title="Debe contener entre 3 y 50 caracteres alfanuméricos."
                />

                <label className={styles.label}>Precio del Producto:</label>
                <input
                type="number"
                name="price"
                className={styles.input}
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                required
                min={500.00}
                step={0.01}
                title="Debe ser un número mayor o igual a 500.00."
                />

                <label className={styles.label}>Stock del Producto:</label>
                <input
                type="number"
                name="stock"
                className={styles.input}
                value={product.stock}
                onChange={(e) => setProduct({ ...product, stock: e.target.value })}
                required
                min={10}
                step={1}
                title="Debe ser un número entero mayor o igual a 10."
                />

                <label className={styles.label}>Descripción del Producto:</label>
                <textarea
                name="description"
                className={styles.input}
                value={product.description}
                onChange={(e) => {
                    const value = e.target.value;
                    if (/^[a-zA-Z0-9\s]*$/.test(value)) { 
                    setProduct({ ...product, description: value });
                    }
                }}
                required
                minLength={10}
                maxLength={500}
                title="Debe contener entre 10 y 500 caracteres alfanuméricos."
                />

                <label className={styles.label}>Imagen del Producto (URL):</label>
                <input
                type="url"
                name="image"
                className={styles.input}
                value={product.image}
                onChange={(e) => {
                    const value = e.target.value;
                    try {
                    new URL(value); 
                    setProduct({ ...product, image: value });
                    } catch {
                    setProduct({ ...product, image: '' }); 
                    }
                }}
                required
                title="Debe ser una URL válida."
                />

                <label className={styles.label}>Género:</label>
                <select
                name="gender"
                className={styles.input}
                value={product.gender}
                onChange={(e) => setProduct({ ...product, gender: e.target.value })}
                required
                title="Seleccione un género."
                >
                <option value="unisex">Unisex</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                </select>
            </div>
            <button type="submit" className={styles.button}>
                {productId ? 'Actualizar Producto' : 'Agregar Producto'}
            </button>
            <Link href={"/admin"} className={styles.button} >
                Volver a la administración
            </Link>
            </form>
        </div>
    );
};

export default ProductForm;
