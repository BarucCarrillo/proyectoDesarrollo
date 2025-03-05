"use client"
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import styles from '@/styles/Account.module.css';
import { useRouter } from 'next/navigation';

function UserDashboard() {

    const { data: session, status } = useSession();
    const router = useRouter();
    console.log(session, status);

    const handleDelete = async () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar tu cuenta?')) {
            const params = { id: session?.user?._id }; // Use the actual user id from the session
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: 'DELETE',
            });
            router.push('/');
            
            console.log('Eliminando cuenta');
        }
    }

    return (
        <div>
            <h1>Tu Cuenta</h1>
            {session && session.user ? (
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td className={styles.tittle}>ID</td>
                            <td className={styles.info}>{session.user._id}</td>
                        </tr>
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
                                Editar Datos
                            </button>
                            <button className={styles.button} onClick={() => signOut()}>
                                Cerrar Sesión
                            </button>
            </div>
            <div className={styles.buttonContainer} onClick={handleDelete}>
                <button type='submit'>
                    Eliminar Cuenta
                </button>
            </div>
        </div>
    );
};

export default UserDashboard;