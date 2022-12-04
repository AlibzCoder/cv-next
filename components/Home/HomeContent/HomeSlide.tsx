import styles from '../../../styles/Home.module.css';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export default function HomeSlide(props: any) {
    return (<div className={`${styles["main-hero"]} d-flex align-items-center`} style={{backgroundImage:'url("hero.png")'}}>
        <div className={styles["contact-info"]}>
            <ul>
                <li><PhoneAndroidRoundedIcon/> +1-202-555-0135</li>
                <li><MailOutlineRoundedIcon/> hello@example.com</li>
            </ul>
        </div>
        <div className="container-fluid">
            <div className={styles.intro}>
                <span className={styles.headline}>
                    <img src="wave.png" alt="Hello"/>
                    Hello!
                </span>
                <h1>I'm Riono.</h1>
                <p>I am Riono Doe, web developer from USA, California. I have rich experience in web site design and building and customization, also I am good at WordPress.</p>

                <div>
                    <a href="#contact" className="section-link btn btn-default me-3">Hire Me</a>
                    <a href="#works" className="section-link btn btn-text btn-icon">View Works<ArrowForwardRoundedIcon/></a>
                </div>
            </div>
        </div>
    </div>)
}