
import styles from "@/styles/Page.module.css";
import Product from '@/models/Products';  // Asegúrate de que la ruta sea correcta
import banner from "../../public/bannerImg.png";
import Image from 'next/image';
import { connectDB } from '@/utils/mongoose-db';
import Link from 'next/link';

/**
 * Home component renders the main page of the application.
 * It includes the following sections:
 * - Header: The header of the page.
 * - Banner: A section with a banner image and introductory text.
 * - Productos Estrella: A section showcasing featured products.
 * - Productos Nuevos: A section showcasing new products.
 * - Footer: The footer of the page.
 *
 * @returns {JSX.Element} The JSX code for the Home component.
 */


  async function getProducts() {
    await connectDB();  // Conectar a la base de datos

    try {
      const products = await Product.aggregate([
        { $match: { gender: { $in: ['male', 'unisex', 'female'] } } },
        { $sample: { size: 10 } } // Selecciona 10 productos aleatorios
      ]); // Filtrar productos para caballeros o unisex
      return JSON.parse(JSON.stringify(products));  // Retorna los productos de manera serializada
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  export default async function Home() {
    const products = await getProducts(); 
    return (
      <div>
          <section className={styles.banner}>
            <div className={styles.columnaIzquierda}>
              <h1>Descubre Tu Escencia Firma</h1>
              <h2>Explora un mundo de fragancias exquisitas</h2>
            </div>
            <div className={styles.columnaDerechas}>
            {products.slice(7, 8).map((product: any, index: number) => (
              <div className={styles.product} key={product._id}>
                <img className={styles.bannerImg} src={product.image} alt="imagen de banner" />
              </div>
            ))}
            </div>
          </section>

          <section className={styles.productosEstrella}>
            <h2>Productos Estrella</h2>
            <h3>Explora los productos más deseados</h3>
            <div className={styles.perfumesContainer}>
              {products.slice(0, 3).map((product: any, index: number) => (
                <div className={styles.product} key={product._id}>
                  <img className={styles.img} src={product.image} alt={`Imagen ${index + 1}`} />
                  <Link href={`/products/${product._id}`}>
                  <h4 className={styles.h4}>{product.name}</h4>
                  </Link>
                </div>
              ))}
              </div>
          </section>

          <section className={styles.productosNuevos}>
            <h2>Productos Estrella</h2>
            <h3>Explora los productos más deseados</h3>
            <div className={styles.perfumesContainer}>
              {products.slice(3, 6).map((product: any, index: number) => (
                <div className={styles.product} key={product._id}>
                  <img className={styles.img} src={product.image} alt={`Imagen Nueva ${index + 1}`} />
                  <Link href={`/products/${product._id}`}>
                  <h4 className={styles.h4}>{product.name}</h4>
                  </Link>
                </div>
              ))}
              </div>
          </section>
      </div>
  );
}
