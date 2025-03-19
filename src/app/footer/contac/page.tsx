
import styles from '@/styles/ContentFooter.module.css';

export default function Contac(){
    return(
        <div className={styles.info}>
            <h1 className={styles.h1}>Contacto</h1>
            <p className={styles.p}><strong>📧 Correo electrónico:</strong> <a href="mailto:contacto@tutienda.com">contacto@tutienda.com</a></p>
            <p className={styles.p}><strong>📞 Teléfono:</strong> +52 123 456 7890</p>
            <p className={styles.p}><strong>📍 Dirección:</strong> Calle Ejemplo #123, Ciudad, País</p>

            <h3 className={styles.h3}>Síguenos en Redes Sociales</h3>
            <ul>
                <li className={styles.li}><a href="https://facebook.com" target="_blank">Facebook</a></li>
                <li className={styles.li}><a href="https://instagram.com]" target="_blank">Instagram</a></li>
                <li className={styles.li}><a href="https://x.com" target="_blank">X</a></li>
                <li className={styles.li}><a href="https://tiktok.com" target="_blank">TikTok</a></li>
            </ul>
        </div>
    )
}