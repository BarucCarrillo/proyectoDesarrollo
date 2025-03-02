'use client';

import React, { useState } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import styles from '../../../styles/Login.module.css';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aquí puedes manejar la lógica de autenticación
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1>Iniciar Sesión</h1>
                <label className={styles.label}>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />
                </label>
                <label className={styles.label}>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={styles.input}
                    />
                </label>
                <button type="submit" className={styles.button}>
                    Login
                </button>
            </form>
            <Footer />
        </div>
    );
};

export default LoginPage;