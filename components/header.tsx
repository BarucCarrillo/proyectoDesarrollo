"use client";

// Importamos el hook useState de React
import { useState } from "react";
// Importamos los estilos desde el archivo CSS
import styles from "./Header.module.css"; 

// Definimos el componente funcional Header
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
                        <a href="#">Inicio</a>
                        <ul className={styles.submenu}>
                            <li><a href="#">Opción 1</a></li>
                            <li><a href="#">Opción 2</a></li>
                        </ul>
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
                        <a href="/views/damas.html">Damas</a>
                        <ul className={styles.submenu}>
                            <li><a href="#">Opción 1</a></li>
                            <li><a href="#">Opción 2</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Caballeros</a>
                        <ul className={styles.submenu}>
                            <li><a href="#">Opción 1</a></li>
                            <li><a href="#">Opción 2</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}