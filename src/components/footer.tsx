"use client";

import Styles from "../styles/Footer.module.css"; // Importamos los estilos
import Link from "next/link"; // Importamos el componente Link
import SuggestionForm from "./SuggestionForm";

/**
 * Footer component that renders the footer section of the website.
 * 
 * @returns {JSX.Element} The rendered footer component.
 * 
 * The footer includes:
 * - A menu with links to various pages such as Contacto, Privacidad, Política de Empresa, Términos y Condiciones, Carrera, and Menu de Sitio.
 * - A comment section where users can contact the company by filling out a form with their name, email, and comment.
 * - A copyright notice.
 * 
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            
            <div className={Styles.row}>
                <ul>
                    <li><Link href="/footer/contac">Contacto</Link></li>
                    <li><Link href="/footer/privacity">Privacidad</Link></li>
                    <li><Link href="/footer/politic">Política de Empresa</Link></li>
                    <li><Link href="/footer/terms">Términos y Condiciones</Link></li>
                    <li><Link href="/footer/career">Carrera</Link></li>
                    <li><Link href="/footer/mapsite">Mapa de Sitio</Link></li>
                </ul>
            </div>
            
            <SuggestionForm/>

            <div className={Styles.row}>
                © 2025 AROMAS - Todos los derechos reservados
            </div>
        </footer>
    );
}