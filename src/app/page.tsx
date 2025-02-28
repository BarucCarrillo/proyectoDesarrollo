
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Page.module.css";
import Image from 'next/image';
import banner from "../../public/bannerImg.png";

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
export default function Home() {
  return (
    <div>
      <Header />
        <section className={styles.banner}>
          <div className={styles.columnaIzquierda}>
            <h1>Descubre Tu Escencia Firma</h1>
            <h2>Explora un mundo de fragancias exquisitas</h2>
          </div>
          <div className={styles.columnaDerechas}>
            <Image className={styles.bannerImg} src={banner} alt="imagen de banner" />
          </div>
        </section>

        <section className={styles.productosEstrella}>
          <h2>Productos Estrella</h2>
          <h3>Explora los productos más deseados</h3>
          <div className={styles.perfumesContainer}>
            <div className={styles.perfume}>
              <Image src={banner} alt="imagen de categoria" />
              <h3>Perfumes</h3>
            </div>
            <div className={styles.perfume}>
              <Image src={banner} alt="imagen de categoria" />
              <h3>Maquillaje</h3>
            </div>
            <div className={styles.perfume}>
              <Image src={banner} alt="imagen de categoria" />
              <h3>Cuidado de la piel</h3>
            </div>
          </div>
        </section>

        <section className={styles.productosNuevos}>
          <h2>Productos Estrella</h2>
          <h3>Explora los productos más deseados</h3>
          <div className={styles.perfumesContainer}>
            <div className={styles.perfume}>
              <Image src={banner} alt="imagen de categoria" />
              <h3>Perfumes</h3>
            </div>
            <div className={styles.perfume}>
              <Image src={banner} alt="imagen de categoria" />
              <h3>Maquillaje</h3>
            </div>
            <div className={styles.perfume}>
              <Image src={banner} alt="imagen de categoria" />
              <h3>Cuidado de la piel</h3>
            </div>
          </div>
        </section>
      <Footer />
    </div>
  );
}
