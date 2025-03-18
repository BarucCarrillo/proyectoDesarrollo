'use client';

import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import styles from '@/styles/NewProduct.module.css';

const NewProduct: React.FC = () => {
    // Estado inicial vacío para evitar errores
    const [product, setProduct] = useState({
        name: '',
        price: '',
        stock: '',
        description: '',
        image: '',
        gender: 'unisex'
    });

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/auth/newproduct", {
                ...product,
                price: Number(product.price),
                stock: Number(product.stock),
            });

            console.log('Producto agregado:', response.data);

            // Limpiar el formulario después de un envío exitoso
            setProduct({
                name: '',
                price: '',
                stock: '',
                description: '',
                image: '',
                gender: 'unisex'
            });

            alert("Producto agregado exitosamente!");

            setError("Hubo un error al agregar el producto");
            console.error("Error al agregar el producto:", error);
            alert("Hubo un error al agregar el producto");
        }catch (error) {
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
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                        required
                    />

                    <label className={styles.label}>Precio del Producto:</label>
                    <input
                        type="number"
                        name="price"
                        className={styles.input}
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        required
                    />

                    <label className={styles.label}>Stock del Producto:</label>
                    <input
                        type="number"
                        name="stock"
                        className={styles.input}
                        value={product.stock}
                        onChange={(e) => setProduct({ ...product, stock: e.target.value })}
                        required
                    />

                    <label className={styles.label}>Descripción del Producto:</label>
                    <textarea
                        name="description"
                        className={styles.input}
                        value={product.description}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        required
                    />

                    <label className={styles.label}>Imagen del Producto (URL):</label>
                    <input
                        type="text"
                        name="image"
                        className={styles.input}
                        value={product.image}
                        onChange={(e) => setProduct({ ...product, image: e.target.value })}
                        required
                    />

                    <label className={styles.label}>Género:</label>
                    <select
                        name="gender"
                        className={styles.input}
                        value={product.gender}
                        onChange={(e) => setProduct({ ...product, gender: e.target.value })}
                        required
                    >
                        <option value="unisex">Unisex</option>
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                    </select>
                </div>
                <button type="submit" className={styles.button}>Agregar Producto</button>
            </form>
        </div>
    );
};

export default NewProduct;
