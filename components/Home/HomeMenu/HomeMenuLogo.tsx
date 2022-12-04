import styles from '../../../styles/HomeMenu.module.css'

export default function HomeMenuLogo (props : any){
    return (
        <div className={styles["site-logo"]}>
			<a href="index.html" className={styles.avatar}>
				<img src="logo.jpg" alt="Ayub" />
				<span className={styles["avatar-tooltip"]}>I'm available for hire!</span>
			</a>
			<h2 className={styles.name}>Ayub</h2>
			<span className={styles.slogan}>Graphic Designer</span>
		</div>
    )
} 