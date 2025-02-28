"use client";

// Importamos el hook useState de React
import { useState } from "react";
// Importamos los estilos desde el archivo CSS
import styles from "../styles/Header.module.css";

import Link from "next/link";



// Definimos el componente funcional Header
/**
 * Header component that renders the main navigation header of the application.
 * 
 * @component
 * @example
 * return (
 *   <Header />
 * )
 * 
 * @returns {JSX.Element} The rendered header component.
 * 
 * @remarks
 * This component includes a navigation menu with links to different sections of the application.
 * It also includes a search form and buttons for user registration and login.
 * 
 * @description
 * The `Header` component maintains a state `menuOpen` to handle the visibility of the navigation menu.
 * It uses dynamic class names to apply styles based on the state.
 * 
 * @function
 * @name Header
 * 
 * @returns {JSX.Element} The rendered header component.
 * 
 * @example
 * // Usage example
 * import Header from './header';
 * 
 *       <Header />
 * */

export default function Header() {
    // Declaramos el estado menuOpen y su función para actualizarlo
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            {/* Título del header con estilos aplicados */}
            <h1 className={styles.h1}>AROMAS</h1>
            <nav className={styles.navContainer}>
                {/* Botón para abrir/cerrar el menú */}
                <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
                {/* Lista de navegación con clases dinámicas según el estado menuOpen */}
                <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
                    <li>
                        <form action="/views/construccion.html" className={styles.search}>
                            <input type="text" placeholder="Buscar..." name="search" />
                            <button type="submit">Buscar</button>
                        </form>
                    </li>
                    <li>
                        <Link href={"/"}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <a href="#">Ofertas</a>
                        <ul className={styles.submenu}>
                            <li><a href="#">Opción 1</a></li>
                            <li><a href="#">Opción 2</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Novedades</a>
                        <ul className={styles.submenu}>
                            <li><a href="#">Opción 1</a></li>
                            <li><a href="#">Opción 2</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/views/damas.html">Generos</a>
                        <ul className={styles.submenu}>
                            <li><a href="#">Opción 1</a></li>
                            <li><a href="#">Opción 2</a></li>
                            <li><a href="#">Opción 2</a></li>
                        </ul>
                    </li>
                    <li> 
                        <button onClick={() => window.location.href='src/sign-in/page.tsx'} className={styles.button}>
                            Registro
                        </button>
                    </li> 
                    <li> 
                        <Link href={"/"} className={styles.button}>
                            Iniciar Sesión
                        </Link>
                    </li> 
                </ul>
            </nav>
        </header>
    );
}