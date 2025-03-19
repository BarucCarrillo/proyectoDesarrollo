import styles from '@/styles/ContentFooter.module.css';

export default function Politic() {
    return (
        <div>
            <section className={styles.info}>
                <h1 className={styles.h1}>Nuestra Política</h1>
                <p className={styles.p}>En <strong>AROMAS</strong>, nos comprometemos a ofrecer productos de alta calidad, garantizando autenticidad y satisfacción en cada compra. Para brindarte la mejor experiencia, hemos establecido las siguientes políticas:</p>

                <h3 className={styles.h3}>1. Autenticidad y Calidad</h3>
                <p className={styles.p}>Todos nuestros perfumes son 100% originales y adquiridos a través de distribuidores autorizados. Nos aseguramos de que cada fragancia cumpla con los más altos estándares de calidad.</p>

                <h3 className={styles.h3}>2. Envíos y Entregas</h3>
                <ul>
                    <li className={styles.li}>Procesamos los pedidos en un plazo de <strong>4 - 7</strong> días hábiles.</li>
                    <li className={styles.li}>Ofrecemos envíos nacionales e internacionales con seguimiento en tiempo real.</li>
                    <li className={styles.li}>Los tiempos de entrega pueden variar según la ubicación y el servicio de paquetería.</li>
                </ul>

                <h3 className={styles.h3}>3. Devoluciones y Reembolsos</h3>
                <ul>
                    <li className={styles.li}>Aceptamos devoluciones dentro de los <strong>30</strong> días posteriores a la entrega, siempre que el producto esté sin usar y en su empaque original.</li>
                    <li className={styles.li}>Si recibes un producto dañado o incorrecto, contáctanos de inmediato para resolverlo.</li>
                    <li className={styles.li}>Los reembolsos se procesarán en un plazo de <strong>7 días</strong> tras la confirmación de la devolución.</li>
                </ul>

                <h3 className={styles.h3}>4. Protección de Datos</h3>
                <p className={styles.p}>Valoramos tu privacidad y protegemos tu información personal conforme a nuestra <a href="/viewsFooter/privacidad.html">Política de Privacidad</a>. No compartimos tus datos con terceros sin tu consentimiento.</p>

                <h3 className={styles.h3}>5. Atención al Cliente</h3>
                <p className={styles.p}>Nuestro equipo está disponible para responder cualquier duda o solicitud. Puedes contactarnos a través de <strong>[correo electrónico, número de teléfono o redes sociales]</strong>.</p>

                <p className={styles.p}><strong>📌 En AROMAS, tu satisfacción es nuestra prioridad. ¡Gracias por confiar en nosotros!</strong></p>

                <h3 className={styles.h3}>Contacto</h3>
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

            </section>
        </div>
    )
}
