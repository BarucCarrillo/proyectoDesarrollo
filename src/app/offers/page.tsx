import React from 'react';
import { connectDB } from '@/utils/mongoose-db';
import Product from '@/models/Products';  // Asegúrate de que la ruta sea correcta
import styles from '@/styles/Products.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

// Conexión a la base de datos
async function getProducts() {
  await connectDB();  // Conectar a la base de datos

  try {
    const products = await Product.find({price: { $lte: 60 } });  // Filtrar productos unisex con precio igual o menor a 60
    return JSON.parse(JSON.stringify(products));  // Retorna los productos de manera serializada
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Server component que obtiene los datos directamente
export default async function Gentlemen() {
  const products = await getProducts();  // Obtener los productos de la base de datos

  return (
    <div>
      <h1 className={styles.h1}>Perfumes Unisex</h1>

      <div>
        {products.length > 0 ? (
          <div>
            <div className={styles.container}>
                {products.map((product: any, index: number) => (
                    <div className={styles.product} key={product._id}>
                        <img className={styles.img} src={product.image} alt={`Imagen ${index + 1}`} />
                        <Link href={`/products/${product._id}`}><h2 className={styles.h2}>{product.name}</h2></Link>
                        <p className={styles.p}>${product.price} USD</p>
                        <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
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

