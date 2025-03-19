import styles from '@/styles/ContentFooter.module.css';

export default function Term() {
    return (
    <div className={styles.info}>
        <h1 className={styles.h1}>Términos y Condiciones</h1>
        <p className={styles.p}>Bienvenido a <strong>AROMAS</strong>. Al acceder y utilizar nuestro sitio web, aceptas los siguientes términos y condiciones. Te recomendamos leerlos detenidamente antes de realizar una compra.</p>

        <h3 className={styles.h3}>1. Uso del Sitio Web</h3>
        <p className={styles.p}>Al visitar nuestro sitio, te comprometes a:</p>
        <ul className={styles.ul}>
            <li className={styles.li}>Usar nuestro contenido y servicios únicamente con fines legales.</li>
            <li className={styles.li}>No realizar actividades fraudulentas o que afecten el funcionamiento del sitio.</li>
            <li className={styles.li}>No copiar, reproducir o distribuir contenido sin autorización.</li>
        </ul>

        <h3 className={styles.h3}>2. Productos y Precios</h3>
        <ul>
            <li className={styles.li}>Los precios están en <strong>Pesos Mexicanos (MXN)</strong> e incluyen o no impuestos según se indique.</li>
            <li className={styles.li}>Nos reservamos el derecho de modificar precios y disponibilidad sin previo aviso.</li>
            <li className={styles.li}>Las imágenes de los productos son ilustrativas y pueden diferir ligeramente del producto real.</li>
        </ul>

        <h3 className={styles.h3}>3. Proceso de Compra</h3>
        <p className={styles.p}>Para realizar una compra en <strong>AROMAS</strong>, debes seguir estos pasos:</p>
        <ul className={styles.ul}>
            <li className={styles.li}>Seleccionar los productos y agregarlos al carrito.</li>
            <li className={styles.li}>Completar la información de facturación y envío.</li>
            <li className={styles.li}>Realizar el pago a través de los métodos disponibles.</li>
            <li className={styles.li}>Recibir la confirmación de tu pedido por correo electrónico.</li>
        </ul>
        
        <h3 className={styles.h3}>4. Pagos</h3>
        <p className={styles.p}>Aceptamos los siguientes métodos de pago:</p>
        <ul className={styles.ul}>
            <li className={styles.li}>Tarjetas de crédito/débito (<strong>[Visa, MasterCard, etc.]</strong>)</li>
            <li className={styles.li}>Transferencias bancarias</li>
            <li className={styles.li}>Pagos electrónicos (<strong>[PayPal, Stripe, etc.]</strong>)</li>
        </ul>
        <p className={styles.p}>Todos los pagos son procesados de forma segura por proveedores externos.</p>

        <h3 className={styles.h3}>5. Envíos y Entregas</h3>
        <ul className={styles.ul}>
            <li className={styles.li}>Los tiempos de entrega pueden variar según la ubicación.</li>
            <li className={styles.li}>Los costos de envío se calculan al finalizar la compra.</li>
            <li className={styles.li}>No somos responsables por retrasos causados por terceros (paqueterías, aduanas, etc.).</li>
        </ul>

        <h3 className={styles.h3}>6. Devoluciones y Reembolsos</h3>
        <ul className={styles.ul}>
            <li className={styles.li}>Se aceptan devoluciones dentro de los <strong>30 días</strong> días posteriores a la recepción del producto.</li>
            <li className={styles.li}>Los productos deben estar sin usar y en su empaque original.</li>
            <li className={styles.li}>El reembolso se procesará una vez que recibamos el producto devuelto.</li>
        </ul>

        <h3 className={styles.h3}>7. Propiedad Intelectual</h3>
        <p className={styles.p}>Todo el contenido del sitio (imágenes, textos, logotipos, etc.) es propiedad de <strong>AROMAS</strong> o de sus proveedores, y está protegido por leyes de derechos de autor.</p>

        <h3 className={styles.h3}>8. Limitación de Responsabilidad</h3>
        <p className={styles.p}>No nos hacemos responsables de:</p>
        <ul className={styles.ul}>
            <li className={styles.li}>Errores tipográficos o técnicos en el sitio web.</li>
            <li className={styles.li}>Mal uso de los productos adquiridos.</li>
            <li className={styles.li}>Problemas derivados del uso de terceros (pasarelas de pago, paqueterías, etc.).</li>
        </ul>

        <h3 className={styles.h3}>9. Modificaciones a los Términos</h3>
        <p className={styles.p}>Nos reservamos el derecho de modificar estos términos en cualquier momento. Cualquier cambio será publicado en nuestro sitio web.</p>

    </div>
    );
}
