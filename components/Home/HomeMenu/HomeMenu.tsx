import styles from '../../../styles/HomeMenu.module.css'
import HomeMenuFooter from './HomeMenuFooter'
import HomeMenuLogo from './HomeMenuLogo'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';

const menuItems = [
	{
		icon : <HomeRoundedIcon />,
		active : true,
		title : "Home"
	},
	{
		icon : <PersonRoundedIcon />,
		title : "About"
	},
	{
		icon : <MenuBookRoundedIcon />,
		title : "Experience"
	},
	{
		icon : <ArchitectureRoundedIcon />,
		title : "Works"
	},
	{
		icon : <ChatBubbleRoundedIcon />,
		title : "Contact"
	}
]

export default function HomeMenu(props: any) {

	const {currentPage,setPage} = props;

	return (
		<header className={`${styles.header} d-flex align-content-between flex-wrap`}>

			<HomeMenuLogo />

			<nav>
				<ul className={styles["main-menu"]}>
					{menuItems.map(item=>(
						<li key={item.title}>
							<a 
								href={`#${item.title.toLocaleLowerCase()}`}
								className={currentPage === item.title.toLocaleLowerCase() ? styles.active : ''}
								onClick={()=>setPage(item.title.toLocaleLowerCase())}
							>
								{item.icon}
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</nav>

			<HomeMenuFooter />

		</header>
	)
}
