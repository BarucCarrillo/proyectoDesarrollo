"use client"
import React from 'react';
import { useSession } from 'next-auth/react';
import styles from '@/styles/Account.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

function UserDashboard() {

    const { data: session, status } = useSession();
    console.log(session, status);
    return (
        <div>
            <Header/>
            <h1>Tu Cuenta</h1>
            {session && session.user ? (
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td className={styles.tittle}>Nombres</td>
                            <td className={styles.info}>{session.user.firstName}</td>
                        </tr>
                        <tr>
                            <td className={styles.tittle}>Apellidos</td>
                            <td className={styles.info}>{session.user.lastName}</td>
                        </tr>
                        <tr>
                            <td className={styles.tittle}>Email</td>
                            <td className={styles.info}>{session.user.email}</td>
                        </tr>
                        <tr>
                            <td className={styles.tittle}>Calle</td>
                            <td className={styles.info}>{session.user.domicilio.calle}</td>
                        </tr>
                        <tr>
                            <td className={styles.tittle}>Numero Exterior</td>
                            <td className={styles.info}>{session.user.domicilio.numeroExterior}</td>
                        </tr>
                        <tr>
                            <td className={styles.tittle}>Numero Interior</td>
                            <td className={styles.info}>{session.user.domicilio.numeroInterior}</td>
                        </tr>
                        <tr>
                            <td className={styles.tittle}>Municipio</td>
                            <td className={styles.info}>{session.user.domicilio.municipio}</td>
                        </tr>
                        <tr>
                            <td className={styles.tittle}>Estado</td>
                            <td className={styles.info}>{session.user.domicilio.estado}</td>
                        </tr>
                        <tr>
                            <td className={styles.tittle}>Código Postal</td>
                            <td className={styles.info}>{session.user.domicilio.codigoPostal}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>No hay datos de usuario disponibles.</p>
            )}
            <div className={styles.buttonContainer}>
                            <button className={styles.button}>
                                <a href="/account/edit">Editar Datos</a>
                            </button>
                            <button className={styles.button}>
                                <a href="/api/auth/signout">Cerrar Sesión</a>
                            </button>
            </div>
            <Footer/>
        </div>
    );
};

export default UserDashboard;