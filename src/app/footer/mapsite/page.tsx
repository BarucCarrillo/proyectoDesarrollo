import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Mapsite.module.css';

const SiteMap = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Mapa del Sitio</h1>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/" className={styles.link}>Inicio</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/offers" className={styles.link}>Ofertas</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/news" className={styles.link}>Novedades</Link>
                </li>
                <li className={styles.listItem}>
                    <span className={styles.submenuTitle}>Géneros</span>
                    <ul className={styles.submenu}>
                        <li><Link href="/ladies" className={styles.link}>Damas</Link></li>
                        <li><Link href="/gentlemen" className={styles.link}>Caballeros</Link></li>
                        <li><Link href="/unisex" className={styles.link}>Unisex</Link></li>
                    </ul>
                </li>
                <li className={styles.listItem}>
                    <span className={styles.submenuTitle}>Pie de Página</span>
                    <ul className={styles.submenu}>
                        <li><Link href="/contact" className={styles.link}>Contacto</Link></li>
                        <li><Link href="/privacity" className={styles.link}>Privacidad</Link></li>
                        <li><Link href="/politic" className={styles.link}>Política de Empresa</Link></li>
                        <li><Link href="/terms" className={styles.link}>Términos y Condiciones</Link></li>
                        <li><Link href="/career" className={styles.link}>Carrera</Link></li>
                        <li><Link href="/mapsite" className={styles.link}>Mapa de Sitio</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SiteMap;
