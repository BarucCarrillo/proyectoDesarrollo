"use client"
import React, { useState, FormEvent, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import styles from '@/styles/Account.module.css';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

function UserDashboard() {
    const [task, setTask] = useState<any>(null);
    const { data: session, status } = useSession() as any;
    const router = useRouter();
    const params = useParams();
    console.log(session, status);

    const getTask = async () => {
        const res = await fetch(`/api/tasks/${session?.user?.id}`);
        const data = await res.json();
        console.log(data);
        setTask({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            confirmEmail: data.confirmEmail,
            domicilio: {
                calle: data.domicilio.calle,
                numeroExterior: data.domicilio.numeroExterior,
                numeroInterior: data.domicilio.numeroInterior,
                colonia: data.domicilio.colonia,
                municipio: data.domicilio.municipio,
                estado: data.domicilio.estado,
                codigoPostal: data.domicilio.codigoPostal,
            },
        });
    };

    const handleDelete = async () => {
        if (window.confirm('¿Estás seguro de que deseas eliminar tu cuenta?')) {
            const params = { id: session?.user?.id }; // ID del usuario desde la sesión
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: 'DELETE',
            });
    
            if (res.ok) {
                console.log('Cuenta eliminada, cerrando sesión...');
                await signOut();  // Cierra sesión para invalidar la sesión en cookies
                router.push('/');
            } else {
                console.error('Error al eliminar la cuenta');
            }
        }
    }

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }

        if (session?.user?.id) {
            getTask();
        }
    }, [session?.user?.id, status]);

    return (
        <div>
            <h1>Tu Cuenta</h1>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <td className={styles.tittle}>Nombres</td>
                        <td className={styles.info}>{task?.firstName}</td>
                    </tr>
                    <tr>
                        <td className={styles.tittle}>Apellidos</td>
                        <td className={styles.info}>{task?.lastName}</td>
                    </tr>
                    <tr>
                        <td className={styles.tittle}>Email</td>
                        <td className={styles.info}>{task?.email}</td>
                    </tr>
                    <tr>
                        <td className={styles.tittle}>Calle</td>
                        <td className={styles.info}>{task?.domicilio?.calle}</td>
                    </tr>
                    <tr>
                        <td className={styles.tittle}>Número Exterior</td>
                        <td className={styles.info}>{task?.domicilio?.numeroExterior}</td>
                    </tr>
                    <tr>
                        <td className={styles.tittle}>Número Interior</td>
                        <td className={styles.info}>{task?.domicilio?.numeroInterior}</td>
                    </tr>
                    <tr>
                        <td className={styles.tittle}>Colonia</td>
                        <td className={styles.info}>{task?.domicilio?.colonia}</td>
                    </tr>
                    <tr>
                        <td className={styles.tittle}>Municipio</td>
                        <td className={styles.info}>{task?.domicilio?.municipio}</td>
                    </tr>
                    <tr>
                        <td className={styles.tittle}>Estado</td>
                        <td className={styles.info}>{task?.domicilio?.estado}</td>
                    </tr>
                    <tr>
                        <td className={styles.tittle}>Código Postal</td>
                        <td className={styles.info}>{task?.domicilio?.codigoPostal}</td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.buttonContainer}>
                            <Link href={`/tasks/${session?.user?.id}`} passHref>
                                <button className={styles.button}>
                                    Editar Datos
                                </button>
                            </Link>
                            <button className={styles.button} onClick={() => signOut()}>
                                Cerrar Sesión
                            </button>
            </div>
            <div className={styles.buttonContainer} onClick={handleDelete}>
                <button className={styles.deleteBtn} type='submit'>
                    Eliminar Cuenta
                </button>
            </div>
        </div>
    );
};

export default UserDashboard;