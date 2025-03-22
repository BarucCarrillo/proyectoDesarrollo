'use client';

import axios, { AxiosError } from 'axios';
import React, { useState, FormEvent, useEffect } from 'react';
import styles from "@/styles/Signup.module.css";
import { signIn } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';

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
    };

    const updateTask = async (formData: FormData) => {
        try {
            const updateResponse = await axios.put(`/api/tasks/${params.id}`, {
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

            console.log(updateResponse);
            router.refresh();
            router.push("/account");
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data.message || error.message);
            }
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        if (!params.id) {
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

                console.log(signupResponse);

                const identifier = formData.get('email') as string;
                const password = formData.get('password') as string;

                const res = await signIn("credentials", {
                    identifier,
                    password,
                    redirect: false,
                });

                if (res?.ok) return router.push("/account");

                console.log("Login Response:", res);
            } catch (error) {
                if (error instanceof AxiosError) {
                    setError(error.response?.data.message || error.message);
                }
            }
        } else {
            console.log("Editando cuenta");
            await updateTask(formData);
        }
    };

    useEffect(() => {
        if (params.id) {
            getTask();
        }
    }, []);

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
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 30) {
                                setTask({ ...task, firstName: value });
                            }
                        }}
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
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 50) {
                                setTask({ ...task, lastName: value });
                            }
                        }}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Correo:</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className={styles.input}
                        id="email"
                        value={task?.email || ''}
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        title="Formato incorrecto: ejemplo@ejemplo.com"
                        onChange={(e) => setTask({ ...task, email: e.target.value })}
                    />
                </div>
                {!params.id && (
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Confirmar Correo:</label>
                        <input
                            type="email"
                            name="confirmEmail"
                            required
                            className={styles.input}
                            id="confirmEmail"
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            title="Formato incorrecto: ejemplo@ejemplo.com"
                            onInput={(e) => {
                                const email = (document.getElementById('email') as HTMLInputElement).value;
                                const confirmEmail = (e.target as HTMLInputElement).value;
                                if (email !== confirmEmail) {
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
                        pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
                        title="La contraseña debe tener al menos 8 caracteres, incluyendo letras mayúsculas, minúsculas, números y caracteres especiales."
                        onChange={(e) => setTask({ ...task, password: e.target.value })}
                    />
                </div>
                {!params.id && (
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Confirmación de Contraseña:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
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
                        pattern="[a-zA-Z\s]*"
                        className={styles.input}
                        value={task?.domicilio?.calle || ''}
                        title="Solo se permiten letras y espacios."
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^[a-zA-Z\s]*$/.test(value)) {
                                setTask({ ...task, domicilio: { ...task.domicilio, calle: value } });
                            }
                        }}
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
                            title="Solo se permiten números."
                            onChange={(e) => setTask({ ...task, domicilio: { ...task.domicilio, numeroExterior: e.target.value } })}
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
                            title="Solo se permiten números."
                            onChange={(e) => setTask({ ...task, domicilio: { ...task.domicilio, numeroInterior: e.target.value } })}
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Colonia:</label>
                    <input
                        type="text"
                        name="colonia"
                        required
                        pattern="[a-zA-Z\s]*"
                        className={styles.input}
                        value={task?.domicilio?.colonia || ''}
                        title="Solo se permiten letras y espacios."
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^[a-zA-Z\sñÑ]*$/.test(value)) {
                                setTask({ ...task, domicilio: { ...task.domicilio, colonia: value } });
                            }
                        }}
                    />
                </div>
                <div className={styles.horizontalGroup}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Ciudad:</label>
                        <input
                            type="text"
                            name="municipio"
                            required
                            pattern="[a-zA-Z\s]*"
                            className={styles.input}
                            value={task?.domicilio?.municipio || ''}
                            title="Solo se permiten letras y espacios."
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/^[a-zA-Z\s]*$/.test(value)) {
                                    setTask({ ...task, domicilio: { ...task.domicilio, municipio: value } });
                                }
                            }}
                        />
                    </div>
                    <div className={styles.select}>
                        <label className={styles.labelS}>Estado:</label>
                        <select
                            name="estado"
                            required
                            className={styles.selectO}
                            value={task?.domicilio?.estado || ''}
                            title="Seleccione un estado."
                            onChange={(e) => setTask({ ...task, domicilio: { ...task.domicilio, estado: e.target.value } })}
                        >
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
                            pattern="\d*"
                            className={styles.inputC}
                            value={task?.domicilio?.codigoPostal || ''}
                            title="Solo se permiten números."
                            onChange={(e) => setTask({ ...task, domicilio: { ...task.domicilio, codigoPostal: e.target.value } })}
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