
// Importamos los estilos desde el archivo CSS
import styles from "../styles/Header.module.css";
import { getServerSession } from "next-auth";
import Link from "next/link";



// Definimos el componente funcional Header
/**
 * Header component that renders the main navigation header of the application.
 * 
 * @component
 * @example
 * return (
 *   <Header />
 * )
 * 
 * @returns {JSX.Element} The rendered header component.
 * 
 * @remarks
 * This component includes a navigation menu with links to different sections of the application.
 * It also includes a search form and buttons for user registration and login.
 * 
 * @description
 * The `Header` component maintains a state `menuOpen` to handle the visibility of the navigation menu.
 * It uses dynamic class names to apply styles based on the state.
 * 
 * @function
 * @name Header
 * 
 * @returns {JSX.Element} The rendered header component.
 * 
 * @example
 * // Usage example
 * import Header from './header';
 * 
 *       <Header />
 * */

export default async function Header() {

    const session = await getServerSession();
    console.log(session);

    return (
        <header>
            {/* Título del header con estilos aplicados */}
            <h1 className={styles.h1}>AROMAS</h1>
            <nav className={styles.navContainer}>
                {/* Botón para abrir/cerrar el menú */}
                <button className={styles.hamburger}>
                    ☰
                </button>
                {/* Lista de navegación con clases dinámicas según el estado menuOpen */}
                <ul className={styles.menu}>
                    {session ? (
                        <>
                            <li>
                                <form action="/views/construccion.html" className={styles.search}>
                                    <input type="text" placeholder="Buscar..." name="search" />
                                    <button type="submit">Buscar</button>
                                </form>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href={'/offers'}>Ofertas</Link>
                                <ul className={styles.submenu}>
                                    <li><a href="#">Opción 1</a></li>
                                    <li><a href="#">Opción 2</a></li>
                                </ul>
                            </li>
                            <li>
                                <Link href={'/news'}>Novedades</Link>
                                <ul className={styles.submenu}>
                                    <li><a href="#">Opción 1</a></li>
                                    <li><a href="#">Opción 2</a></li>
                                </ul>
                            </li>
                            <li>
                                <Link href={'/gender'}>Generos</Link>
                                <ul className={styles.submenu}>
                                    <li><Link href={'/ladies'}>Damas</Link></li>
                                    <li><Link href={'/gentlemen'}>Caballeros</Link></li>
                                    <li><Link href={'/unisex'}>Unisex</Link></li>
                                </ul>
                            </li> 
                            <li> 
                                <Link href={"/account"}>
                                    Perfil
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                    <li>
                        <form action="/views/construccion.html" className={styles.search}>
                            <input type="text" placeholder="Buscar..." name="search" />
                            <button type="submit">Buscar</button>
                        </form>
                    </li>
                    <li>
                        <Link href={"/"}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href={'/offers'}>Ofertas</Link>
                        <ul className={styles.submenu}>
                            <li><a href="#">Opción 1</a></li>
                            <li><a href="#">Opción 2</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link href={'/news'}>Novedades</Link>
                        <ul className={styles.submenu}>
                            <li><a href="#">Opción 1</a></li>
                            <li><a href="#">Opción 2</a></li>
                        </ul>
                    </li>
                    <li>
                        <a>Generos</a>
                        <ul className={styles.submenu}>
                            <li><Link href={'/ladies'}>Damas</Link></li>
                            <li><Link href={'/gentlemen'}>Caballeros</Link></li>
                            <li><Link href={'/unisex'}>Unisex</Link></li>
                        </ul>
                    </li> 
                    <li> 
                        <Link href={"/signup"} className={styles.button}>
                            Registro
                        </Link>
                    </li> 
                    <li> 
                        <Link href={"/login"} className={styles.button}>
                            Iniciar Sesión
                        </Link>
                    </li> 
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}