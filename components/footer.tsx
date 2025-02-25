"use client";

import Styles from "./Footer.module.css"; // Importamos los estilos
import ComentarioStyles from "./Comentario.module.css"; // Importamos los estilos

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
                    <li><a href="/viewsFooter/carrera.html">Menu de Sitio</a></li>
                </ul>
            </div>

            {/* Caja de comentarios */}

            <div className="seccioncomentario">

                <h2 className={ComentarioStyles.titulocomentario}>Contáctenos</h2>
                <br/>
                <p className={ComentarioStyles.textocomentario}>¿Tiene alguna pregunta o comentario? Por favor, no dude en contactarnos.</p>
                <form className={ComentarioStyles.nombrecomentario}>
                    <h3 className={ComentarioStyles.entcomentario}>Nombre*</h3>
                    <div>
                        <textarea rows={1}></textarea>
                    </div>
                </form>
                <br/>
                <form className={ComentarioStyles.nombrecomentario}>
                    <h3 className={ComentarioStyles.entcomentario}>Correo electrónico*</h3>
                    <div>
                        <textarea rows={1}></textarea>
                    </div>
                </form>
                <br/>
                <form className={ComentarioStyles.cajacomentario}>
                    <h3 className={ComentarioStyles.entcomentario}>Ingrese un comentario*</h3>
                    <div>
                    <textarea rows={5}></textarea>
                    </div>
                    <br />
                    <button type="submit">Enviar comentario</button>
                </form>

            </div>

            {/* Fin caja de comentarios */}
            
                
            <div className={Styles.row}>
                © 2025 AROMAS - Todos los derechos reservados
            </div>
        </footer>
    );
}