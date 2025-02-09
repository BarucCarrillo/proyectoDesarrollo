"use client";

import { useState } from "react";
import styles from "./Header.module.css"; // Importamos los estilos

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <h1 className={styles.h1}>AROMAS</h1>
            <nav className={styles.navContainer}>
                <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
                <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
                    <li>
                        <a href="/views/index.html">Inicio</a>
                        <ul className={styles.submenu}>
                            <li><a href="/views/construccion.html">Opción 1</a></li>
                            <li><a href="/views/construccion.html">Opción 2</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/views/ofertas.html">Ofertas</a>
                        <ul className={styles.submenu}>
                            <li><a href="/views/construccion.html">Opción 1</a></li>
                            <li><a href="/views/construccion.html">Opción 2</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/views/productosNuevos.html">Novedades</a>
                        <ul className={styles.submenu}>
                            <li><a href="/views/construccion.html">Opción 1</a></li>
                            <li><a href="/views/construccion.html">Opción 2</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/views/damas.html">Damas</a>
                        <ul className={styles.submenu}>
                            <li><a href="/views/construccion.html">Opción 1</a></li>
                            <li><a href="/views/construccion.html">Opción 2</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/views/caballeros.html">Caballeros</a>
                        <ul className={styles.submenu}>
                            <li><a href="/views/construccion.html">Opción 1</a></li>
                            <li><a href="/views/construccion.html">Opción 2</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}