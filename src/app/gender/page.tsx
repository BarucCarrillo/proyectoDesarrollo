
import styles from '@/styles/Gender.module.css'

function Gender(){

    return(
        <div className={styles.container}>
            <h1 className={styles.h1}>GENEROS</h1>
            <div className={styles.genderContainer}>
                <img src="https://wallpaperaccess.com/full/4849734.jpg" alt="" className={styles.img}/>
            </div>
            <div className={styles.genderContainer}>
                <img src="https://wallpaperaccess.com/full/4849734.jpg" alt="" className={styles.img}/>
            </div>
            <div className={styles.genderContainer}>
                <img src="https://wallpaperaccess.com/full/4849734.jpg" alt="" className={styles.img}/>
            </div>
        </div>
    )

}

export default Gender;