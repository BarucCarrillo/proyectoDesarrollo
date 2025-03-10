'use client';

import React, { useState, FormEvent } from 'react';
import styles from "@/styles/Signup.module.css"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function LoginPage() {

    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const password = formData.get('password') as string;
        const email = formData.get('email') as string;

        const res = await signIn("credentials",{
            email,
            password,
            redirect: false,
        });

        if (res?.error) setError(res.error as string);

        
        if(res?.ok){
            window.location.href = "/account";
        }
    }

    return (
        <div>
            {error && <div className={styles.error}>{error}</div>}
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
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
                    <label className={styles.label}>Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        required
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.submitButton}>
                    Iniciar Sesión
                </button>
                <p className={styles.redirect}>
                    ¿No tienes cuenta? <a href="/signup">Regístrate</a>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;