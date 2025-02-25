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
                        <form action="/views/construccion.html" className={styles.search}>
                            <input type="text" placeholder="Buscar..." name="search" />
                            <button type="submit">Buscar</button>
                        </form>
                    </li>
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
                    <li> 
                        <button onClick={() => window.location.href='/views/Formulario.html'} className={styles.button}>
                            Registro
                        </button>
                    </li> 
                    <li> 
                        <button onClick={() => window.location.href='/views/Formulario.html'} className={styles.button}>
                            Iniciar Sesión
                        </button>
                    </li> 
                </ul>
            </nav>
        </header>
    );
}