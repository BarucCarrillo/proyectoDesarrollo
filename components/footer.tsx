"use client";

import Styles from "./Footer.module.css"; // Importamos los estilos

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.row}>
                <ul className={Styles.menu}>
                    <li><a href="/viewsFooter/politica.html#contacto">Contacto</a></li>
                    <li><a href="/viewsFooter/privacidad.html">Privacidad</a></li>
                    <li><a href="/viewsFooter/politica.html">Política de Empresa</a></li>
                    <li><a href="/viewsFooter/terminos.html">Términos y Condiciones</a></li>
                    <li><a href="/viewsFooter/carrera.html">Carrera</a></li>
                </ul>
            </div>
                
            <div className={Styles.row}>
                © 2025 AROMAS - Todos los derechos reservados || Diseñado por: Baruc
            </div>
        </footer>
    );
}