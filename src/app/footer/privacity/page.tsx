
import styles from '@/styles/ContentFooter.module.css';

export default function Privacity(){
    return(
        <section className={styles.info}>
            <h1 className={styles.h1}>Política de Privacidad</h1>
            <p className={styles.p}>En <strong>AROMAS</strong>, nos tomamos muy en serio la privacidad y seguridad de tu información personal. Esta política describe cómo recopilamos, usamos y protegemos tus datos cuando visitas nuestro sitio web y realizas compras.</p>

            <h3 className={styles.h3}>1. Información que Recopilamos</h3>
            <p className={styles.p}>Podemos recopilar los siguientes datos cuando interactúas con nuestro sitio:</p>
            <ul>
                <li className={styles.li}>Nombre y apellidos</li>
                <li className={styles.li}>Correo electrónico</li>
                <li className={styles.li}>Dirección de envío y facturación</li>
                <li className={styles.li}>Número de teléfono</li>
                <li className={styles.li}>Detalles de pago (procesados de forma segura por terceros)</li>
                <li className={styles.li}>Información de navegación (cookies, dirección IP, dispositivo y navegador)</li>
            </ul>

            <h3 className={styles.h3}>2. Uso de la Información</h3>
            <p className={styles.p}>Utilizamos tus datos para los siguientes fines:</p>
            <ul>
                <li className={styles.li}>Procesar y gestionar tus pedidos</li>
                <li className={styles.li}>Enviar confirmaciones, facturas y actualizaciones sobre tu compra</li>
                <li className={styles.li}>Mejorar la experiencia del usuario en nuestro sitio web</li>
                <li className={styles.li}>Enviar ofertas, promociones y noticias (solo si das tu consentimiento)</li>
                <li className={styles.li}>Garantizar la seguridad y prevención de fraudes</li>
            </ul>

            <h3 className={styles.h3}>3. Protección de tus Datos</h3>
            <p className={styles.p}>Implementamos medidas de seguridad para proteger tu información personal contra accesos no autorizados, pérdidas o alteraciones. No compartimos ni vendemos tus datos a terceros, salvo en los siguientes casos:</p>
            <ul>
                <li className={styles.li}>Proveedores de servicios de pago y logística para procesar tus pedidos</li>
                <li className={styles.li}>Obligaciones legales o requerimientos gubernamentales</li>
            </ul>

            <h3 className={styles.h3}>4. Derechos del Usuario</h3>
            <p className={styles.p}>Como usuario, tienes derecho a:</p>
            <ul>
                <li className={styles.li}>Acceder, modificar o eliminar tu información personal</li>
                <li className={styles.li}>Solicitar la eliminación de tu cuenta</li>
                <li className={styles.li}>Retirar tu consentimiento para recibir comunicaciones de marketing</li>
            </ul>
            <p className={styles.p}>Para ejercer estos derechos, contáctanos en <strong>aromas.contacto@aromas.com</strong>.</p>

            <h3 className={styles.h3}>5. Cambios en la Política</h3>
            <p className={styles.p}>Nos reservamos el derecho de actualizar esta política en cualquier momento. Te notificaremos sobre cambios importantes mediante nuestro sitio web o correo electrónico.</p>

            <p className={styles.p}><strong>📌 Si tienes dudas sobre nuestra Política de Privacidad, no dudes en contactarnos.</strong></p>
    </section>
    )
}