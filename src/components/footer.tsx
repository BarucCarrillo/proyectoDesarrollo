"use client";

import Styles from "../styles/Footer.module.css"; // Importamos los estilos
import ComentarioStyles from "../styles/Comentario.module.css"; // Importamos los estilos

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
                <ul className={Styles.menu}>
                    <li><a href="/viewsFooter/politica.html#contacto">Contacto</a></li>
                    <li><a href="/viewsFooter/privacidad.html">Privacidad</a></li>
                    <li><a href="/viewsFooter/politica.html">Política de Empresa</a></li>
                    <li><a href="/viewsFooter/terminos.html">Términos y Condiciones</a></li>
                    <li><a href="/viewsFooter/carrera.html">Carrera</a></li>
                    <li><a href="/viewsFooter/carrera.html">Mapa de Sitio</a></li>
                </ul>
            </div>

            {/* Caja de comentarios */}

            <div className={ComentarioStyles.seccioncomentario}>
                <h2 className={ComentarioStyles.titulocomentario}>Contáctenos</h2>
                <br />
                <p className={ComentarioStyles.textocomentario}>¿Tiene alguna pregunta o comentario? Por favor, no dude en contactarnos.</p>
                
                <form className={ComentarioStyles.formcomentario}>
                    {/* Sección izquierda */}
                    <div className={ComentarioStyles.columnaIzquierda}>
                        <div className={ComentarioStyles.nombrecomentario}>
                            <h3 className={ComentarioStyles.entcomentario}>Nombre*</h3>
                            <textarea rows={1}></textarea>
                        </div>

                        <div className={ComentarioStyles.nombrecomentario}>
                            <h3 className={ComentarioStyles.entcomentario}>Correo electrónico*</h3>
                            <textarea rows={1}></textarea>
                        </div>
                    </div>

                    {/* Sección derecha */}
                    <div className={ComentarioStyles.columnaDerecha}>
                        <div className={ComentarioStyles.cajacomentario}>
                            <h3 className={ComentarioStyles.entcomentario}>Ingrese un comentario*</h3>
                            <textarea rows={5}></textarea>
                        </div>
                        <br />
                        <button type="submit" className={ComentarioStyles.botonComentario}>
                            Enviar comentario
                        </button>
                    </div>
                </form>
            </div>



            {/* Fin caja de comentarios */}
            
                
            <div className={Styles.row}>
                © 2025 AROMAS - Todos los derechos reservados
            </div>
        </footer>
    );
}