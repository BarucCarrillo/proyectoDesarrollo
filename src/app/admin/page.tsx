"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCircleMinus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/ProductAdmin.module.css';
import Link from 'next/link';

export default function Gentlemen() {
  const [products, setProducts] = useState<any[]>([]);
  const router = useRouter();

  // Obtener productos al cargar el componente
  useEffect(() => {
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
  }, []);

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
    <div className={styles.container}>
      <h1 className={styles.h1}>Administrar Productos</h1>

      <div>
        {products.length > 0 ? (
          <div>
            <div className={styles.containerSearch}>
              <input type="text" placeholder="Buscar producto" className={styles.input} id="searchInput" />
              <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.iconSearch}/><br />
            </div>
            <div className={styles.container}>
              <Link className={styles.button} href={'/admin/new'}>Agregar producto</Link>
            </div>
            <div className={styles.container}>
              {products.map((product) => (
                <div className={styles.product} key={product._id}>
                  <img className={styles.img} src={product.image} alt={product.name} />
                  <Link href={`/products/${product._id}`}><h2 className={styles.h2}>{product.name}</h2></Link>
                  <p className={styles.p}>${product._id} </p>
                  <div className={styles.containerIcons}>
                    <FontAwesomeIcon icon={faPen} className={styles.icon}   onClick={() => router.push(`/admin/new?id=${product?._id}`)}/>
                    <FontAwesomeIcon icon={faCircleMinus} className={styles.icon} onClick={() => handleDelete(product._id)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No hay productos para caballeros.</p>
        )}
      </div>
    </div>
  );
}
