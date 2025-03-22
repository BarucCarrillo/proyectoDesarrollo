"use client";

import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import { getSession } from "next-auth/react"; // Usa getSession en lugar de getServerSession
import Link from "next/link";

export default function Header() {
    const [session, setSession] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura del menú

    useEffect(() => {
        // Obtener la sesión cuando el componente se monta
        const fetchSession = async () => {
            const sessionData = await getSession();
            setSession(sessionData);
        };

        fetchSession();
    }, []); // Solo ejecutarse una vez cuando el componente se monta

    // Función para manejar el clic en el botón de hamburguesa
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header>
            <h1 className={styles.h1}>AROMAS</h1>
            <nav className={styles.navContainer}>
                {/* Botón de hamburguesa para abrir/cerrar el menú */}
                <button className={styles.hamburger} onClick={toggleMenu}>
                    ☰
                </button>
                {/* Lista de navegación */}
                <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
                    {session ? (
                        <>
                            <li><Link href={"/"}>Inicio</Link></li>
                            <li>
                                <Link href={'/offers'}>Ofertas</Link>
                            </li>
                            <li>
                                <Link href={'/news'}>Novedades</Link>
                            </li>
                            <li>
                                <a>Generos</a>
                                <ul className={styles.submenu}>
                                    <li><Link href={'/ladies'}>Damas</Link></li>
                                    <li><Link href={'/gentlemen'}>Caballeros</Link></li>
                                    <li><Link href={'/unisex'}>Unisex</Link></li>
                                </ul>
                            </li> 
                            <li><Link href={"/account"}>Perfil</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link href={"/"}>Inicio</Link></li>
                            <li>
                                <Link href={'/offers'}>Ofertas</Link>
                            </li>
                            <li>
                                <Link href={'/news'}>Novedades</Link>
                            </li>
                            <li>
                                <a>Generos</a>
                                <ul className={styles.submenu}>
                                    <li><Link href={'/ladies'}>Damas</Link></li>
                                    <li><Link href={'/gentlemen'}>Caballeros</Link></li>
                                    <li><Link href={'/unisex'}>Unisex</Link></li>
                                </ul>
                            </li> 
                            <li><Link href={"/signup"} className={styles.button}>Registro</Link></li>
                            <li><Link href={"/login"} className={styles.button}>Iniciar Sesión</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}
