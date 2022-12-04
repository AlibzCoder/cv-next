import styles from '../../../styles/HomeMenu.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const socialIcons = [
	{
		name:'facebook',
		url : '#',
		icon : <FacebookIcon />,
	},
	{
		name:'twitter',
		url : '#',
		icon : <TwitterIcon />,
	},
	{
		name:'instagram',
		url : '#',
		icon : <InstagramIcon />,
	},
	{
		name:'dribbble',
		url : '#',
		icon : <InstagramIcon />,
	},
	{
		name:'behance',
		url : '#',
		icon : <InstagramIcon />,
	},
]

export default function HomeMenuFooter (props : any){
    return (
        <div className={styles.footer}>
			
			<ul className={styles["social-icons"]}>
				{socialIcons.map(item=>(
					<li key={item.name}>
						<a href={item.url} className={styles[item.name]}>
							{item.icon}
						</a>
					</li>
				))}
			</ul>
			
			<span className={styles.copyright}>© {new Date().getFullYear()} Ayub CV, by Abz</span>
		</div>
    )
}