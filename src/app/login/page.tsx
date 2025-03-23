'use client';

import React, { useState, FormEvent } from 'react';
import styles from "@/styles/Signup.module.css"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function LoginPage() {

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    interface LoginResult {
        error?: string;
    }

    interface Session {
        user: {
            role: string;
        };
    }

    const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setError("");

        const result = await signIn("credentials", {
            redirect: false,
            identifier,
            password,
        });

        if (!result) {
            setError("An unexpected error occurred.");
            return;
        }

        if (result.error) {
            setError(result.error);
        } else {
            const res = await fetch("/api/auth/session");
            const session: Session = await res.json();

            // Redirigir según el rol
            if (session.user.role === "admin") {
                router.push("/admin");
            } else {
                router.push("/account");
                router.refresh();
            }
        }
    };

    return (
        <div>
            {error && <div className={styles.error}>{error}</div>}
            <h1 className={styles.h1}>Iniciar Sesión</h1>
            <form onSubmit={handleLogin} className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Correo:</label>
                    <input
                        type="text"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                        className={styles.input}
                        title="Por favor, ingresa un correo válido que contenga letras, números, un '@' y un dominio."
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                <p className={styles.redirect}>
                    ¿Olvidaste tu contraseña? <a href="/recover-password">Recuperar</a>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;