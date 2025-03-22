"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCircleMinus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/ProductAdmin.module.css';
import Link from 'next/link';
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import CleanDatabaseButton from '@/components/cleandtabaseButton';

// Extend the Session type to include the role property
declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string; // Add the role property
    };
  }
}

export default function Gentlemen() {
  const { data: session, status } = useSession();
  const [products, setProducts] = useState<any[]>([]);
  const router = useRouter();

  // Obtener productos al cargar el componente
  useEffect(() => {

    if (status === "loading") return;
    if (!session || !session.user || session.user.role !== "admin") {
      router.push("/login"); // Redirigir si no es admin
    }
    async function getProducts() {
      try {
        const res = await fetch("/api/products"); // Llamada a la API que obtiene los productos
        const data = await res.json();
        setProducts(data);  // Guardar productos en el estado local
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    getProducts();
  }, [session, status]);

  // Eliminar producto
  const handleDelete = async (id: string) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar el producto?")) {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });

      if (res.ok) {
        console.log("Producto Eliminado");
        setProducts(products.filter(product => product._id !== id)); // Eliminar producto de la UI
      } else {
        console.error("Error al eliminar el producto");
      }
    }
  };

  return (
    <div>
      <h1 className={styles.h1}>Administrar Productos</h1>

      <div>
        {products.length > 0 ? (
          <div>
            <div className={styles.container}>
              <Link className={styles.button} href={'/admin/new'}>Agregar producto</Link>
            </div>
            <div className={styles.container}>
              <CleanDatabaseButton/>
            </div>
            <div className={styles.container}>
              {products.map((product) => (
                <div className={styles.product} key={product._id}>
                  <img className={styles.img} src={product.image} alt={product.name} />
                  <Link href={`/products/${product._id}`}><h2 className={styles.h2}>{product.name}</h2></Link>
                  <p className={styles.p}>${product._id} </p>
                  <div className={styles.containerIcons}>
                    <FontAwesomeIcon icon={faPen} className={styles.icon} onClick={() => router.push(`/admin/new?id=${product?._id}`)}/>
                    <FontAwesomeIcon icon={faCircleMinus} className={styles.icon} onClick={() => handleDelete(product._id)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.container}>
            <h2  className={styles.h2}>No hay productos.</h2>
            <div>
              <Link className={styles.button} href={'/admin/new'}>Agregar producto</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
