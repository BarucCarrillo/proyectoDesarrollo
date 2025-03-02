'use client';

import axios, {AxiosError} from 'axios';
import React, { useState, FormEvent } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import styles from '../../../styles/Signup.module.css';

function SignupPage() {

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        try {
                const res = await axios.post("/api/auth/signup", {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                confirmEmail: formData.get('confirmEmail'),
                password: formData.get('password'),
                domicilio: {
                    calle: formData.get('calle'),
                    numeroExterior: formData.get('numeroExterior'),
                    numeroInterior: formData.get('numeroInterior'),
                    colonia: formData.get('colonia'),
                    municipio: formData.get('municipio'),
                    estado: formData.get('estado'),
                    codigoPostal: formData.get('codigoPostal'),
                },
            });
        } catch (error) {
            if(error instanceof AxiosError){
                setError(error.response?.data.message || error.message);
            } 
        }
    }

    return (
        <div>
            <Header />
            {error && <div className={styles.error}>{error}</div>}
            <h1>Registro</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nombre:</label>
                    <input
                        type="text"
                        name="firstName"
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Apellido:</label>
                    <input
                        type="text"
                        name="lastName"
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Correo:</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Confirmación de Correo:</label>
                    <input
                        type="email"
                        name="confirmEmail"
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Confirmación de Contraseña:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Calle:</label>
                    <input
                        type="text"
                        name="calle"
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Número Exterior:</label>
                    <input
                        type="text"
                        name="numeroExterior"
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Número Interior:</label>
                    <input
                        type="text"
                        name="numeroInterior"
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Colonia:</label>
                    <input
                        type="text"
                        name="colonia"
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Ciudad:</label>
                    <input
                        type="text"
                        name="municipio"
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Estado:</label>
                    <input
                        type="text"
                        name="estado"
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Código Postal:</label>
                    <input
                        type="text"
                        name="codigoPostal"
                        required
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.submitButton}>
                    Registrar
                </button>
            </form>
            <Footer />
        </div>
    );
};

export default SignupPage;