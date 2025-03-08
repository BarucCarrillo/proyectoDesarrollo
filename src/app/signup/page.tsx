'use client';

import axios, {AxiosError} from 'axios';
import React, { useState, FormEvent, useEffect } from 'react';
import styles from "@/styles/Signup.module.css"
import { signIn } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import { set } from 'mongoose';

function SignupPage() {

    const [error, setError] = useState<string | null>(null);
    const [task, setTask] = useState<any>(null);
    const router = useRouter();
    const params = useParams();

    const getTask = async () => {
       const res = await fetch(`/api/tasks/${params.id}`);
       const data = await res.json();
       console.log(data);
       setTask({
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              confirmEmail: data.confirmEmail,
              password: data.password,
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
    }

    const updateTask = () => {};

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!params.id){
            
        }else{
            console.log("Editando cuenta");
        }

        const formData = new FormData(e.currentTarget);

        try {
                const signupResponse = await axios.post("/api/auth/signup", {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                confirmEmail: formData.get('confirmEmail'),
                password: formData.get('password'),
                domicilio: {
                    calle: formData.get('calle'),
                    numeroExterior: formData.get('numeroExterior'),
                    numeroInterior: formData.get('numeroInterior'),
                    colonia: formData.get('colonia'),
                    municipio: formData.get('municipio'),
                    estado: formData.get('estado'),
                    codigoPostal: formData.get('codigoPostal'),
                },
            });

            console.log(signupResponse)

            const email = formData.get('email') as string;
            const password = formData.get('password') as string;

            const res = await signIn("credentials",{
                email,
                password,
                redirect: false,
            });

            if(res?.ok) return router.push("/account");

            
            console.log("Login Response:", res); // <-- Agregar esto para ver la respuesta

        } catch (error) {
            if(error instanceof AxiosError){
                setError(error.response?.data.message || error.message);
            } 
        }
    };

    const handleChange = (
        e: FormEvent<HTMLInputElement>
    ) => {setNewTask({...newTask, [e.currentTarget.name]: e.currentTarget.value})};

    useEffect(() => {
        if(params.id){
            getTask();
        }
    },
    []);

    return (
        <div>
            {error && <div className={styles.error}>{error}</div>}
            <h1>
                {!params.id ? "Registro" : "Editar Cuenta"}
            </h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Nombre:</label>
                    <input
                        type="text"
                        name="firstName"
                        required
                        className={styles.input}
                        value={task?.firstName || ''}
                        onChange={(e) => setTask({...task, firstName: e.target.value})}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Apellido:</label>
                    <input
                        type="text"
                        name="lastName"
                        required
                        className={styles.input}
                        value={task?.lastName || ''}
                        onChange={(e) => setTask({...task, lastName: e.target.value})}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Correo:</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className={styles.input}
                        id='email'
                        value={task?.email || ''}
                        onChange={(e) => setTask({...task, email: e.target.value})}
                    />
                </div>
                {!params.id && (
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Confirmación de Correo:</label>
                        <input
                            type="email"
                            name="confirmEmail"
                            required
                            className={styles.input}
                            id='confirmEmail'
                            onInput={(e) =>{
                                const email = (document.getElementById('email') as HTMLInputElement).value;
                                const confirmEmail = (e.target as HTMLInputElement).value;
                                if(email !== confirmEmail){
                                    (e.target as HTMLInputElement).setCustomValidity('Los correos no coinciden');
                                } else {
                                    (e.target as HTMLInputElement).setCustomValidity('');
                                }
                            }}
                        />
                    </div>
                )}
                <div className={styles.formGroup}>
                    <label className={styles.label}>Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        required
                        className={styles.input}
                        id="password"
                        value={task?.password || ''}
                        onChange={(e) => setTask({...task, password: e.target.value})}
                    />
                </div>
                {!params.id && (
                <div className={styles.formGroup}>
                    <label className={styles.label}>Confirmación de Contraseña:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        className={styles.input}
                        id="confirmPassword"
                        onInput={(e) => {
                            const password = (document.getElementById('password') as HTMLInputElement).value;
                            const confirmPassword = (e.target as HTMLInputElement).value;
                            if (password !== confirmPassword) {
                                (e.target as HTMLInputElement).setCustomValidity('Las contraseñas no coinciden');
                            } else {
                                (e.target as HTMLInputElement).setCustomValidity('');
                            }
                        }}
                    />
                </div>
                )}
                <div className={styles.formGroup}>
                    <label className={styles.label}>Calle:</label>
                    <input
                        type="text"
                        name="calle"
                        required
                        className={styles.input}
                        value={task?.domicilio?.calle || ''}
                        onChange={(e) => setTask({...task, domicilio: {...task.domicilio, calle: e.target.value}})}
                    />
                </div>
                <div className={styles.horizontalGroup}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Número Exterior:</label>
                        <input
                            type="number"
                            name="numeroExterior"
                            required
                            className={styles.input}
                            pattern="\d*"
                            value={task?.domicilio?.numeroExterior || ''}
                            onChange={(e) => setTask({...task, domicilio: {...task.domicilio, numeroExterior: e.target.value}})}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Número Interior:</label>
                        <input
                            type="number"
                            name="numeroInterior"
                            className={styles.inputNI}
                            pattern="\d*"
                            value={task?.domicilio?.numeroInterior || ''}
                            onChange={(e) => setTask({...task, domicilio: {...task.domicilio, numeroInterior: e.target.value}})}
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Colonia:</label>
                    <input
                        type="text"
                        name="colonia"
                        required
                        className={styles.input}
                        value={task?.domicilio?.colonia || ''}
                        onChange={(e) => setTask({...task, domicilio: {...task.domicilio, colonia: e.target.value}})}
                    />
                </div>
                <div className={styles.horizontalGroup}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Ciudad:</label>
                        <input
                            type="text"
                            name="municipio"
                            required
                            className={styles.input}
                            value={task?.domicilio?.municipio || ''}
                            onChange={(e) => setTask({...task, domicilio: {...task.domicilio, municipio: e.target.value}})}
                        />
                    </div>
                    <div className={styles.select}>
                        <label className={styles.labelS}>Estado:</label>
                        <select name="estado" required className={styles.selectO} value={task?.domicilio?.estado || ''} onChange={(e) => setTask({...task, domicilio: {...task.domicilio, estado: e.target.value}})}>
                            <option value="">Seleccione un estado</option>
                            <option value="Aguascalientes">Aguascalientes</option>
                            <option value="Baja California">Baja California</option>
                            <option value="Baja California Sur">Baja California Sur</option>
                            <option value="Campeche">Campeche</option>
                            <option value="Chiapas">Chiapas</option>
                            <option value="Chihuahua">Chihuahua</option>
                            <option value="Ciudad de México">Ciudad de México</option>
                            <option value="Coahuila">Coahuila</option>
                            <option value="Colima">Colima</option>
                            <option value="Durango">Durango</option>
                            <option value="Estado de México">Estado de México</option>
                            <option value="Guanajuato">Guanajuato</option>
                            <option value="Guerrero">Guerrero</option>
                            <option value="Hidalgo">Hidalgo</option>
                            <option value="Jalisco">Jalisco</option>
                            <option value="Michoacán">Michoacán</option>
                            <option value="Morelos">Morelos</option>
                            <option value="Nayarit">Nayarit</option>
                            <option value="Nuevo León">Nuevo León</option>
                            <option value="Oaxaca">Oaxaca</option>
                            <option value="Puebla">Puebla</option>
                            <option value="Querétaro">Querétaro</option>
                            <option value="Quintana Roo">Quintana Roo</option>
                            <option value="San Luis Potosí">San Luis Potosí</option>
                            <option value="Sinaloa">Sinaloa</option>
                            <option value="Sonora">Sonora</option>
                            <option value="Tabasco">Tabasco</option>
                            <option value="Tamaulipas">Tamaulipas</option>
                            <option value="Tlaxcala">Tlaxcala</option>
                            <option value="Veracruz">Veracruz</option>
                            <option value="Yucatán">Yucatán</option>
                            <option value="Zacatecas">Zacatecas</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.labelC}>Código Postal:</label>
                        <input
                            type="text"
                            name="codigoPostal"
                            required
                            className={styles.inputC}
                            value={task?.domicilio?.codigoPostal || ''}
                            onChange={(e) => setTask({...task, domicilio: {...task.domicilio, codigoPostal: e.target.value}})}
                        />
                    </div>
                </div>
                <button type="submit" className={styles.submitButton}>
                    {!params.id ? "Registrarse" : "Guardar Cambios"}
                </button>
                <p className={styles.redirect}>
                    {!params.id ? (
                        <>¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a></>
                    ) : (
                        <>¿Deseas cancelar? <a href="/account">Volver</a></>
                    )}
                </p>
                </form>
        </div>
    );
};

export default SignupPage;