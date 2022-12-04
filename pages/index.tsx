import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react';
import HomeMainSlider from '../components/Home/HomeContent/HomeMainSlider';
import HomeSlide from '../components/Home/HomeContent/HomeSlide';
import HomeMenu from '../components/Home/HomeMenu/HomeMenu';
import styles from '../styles/Home.module.css'

export default function Home(props : any) {
  const router = useRouter();
  
  const refreshData = () => {
    router.replace(router.asPath);
  }

  const [currentPage,setPage] = useState('home');

  return (
    <div className="site-wrapper">
      <Head>
        <title>CV</title>
      </Head>
      <HomeMenu currentPage={currentPage} setPage={setPage} />
      <HomeMainSlider currentPage={currentPage} setPage={setPage}>
        <HomeSlide key="home" />
        <div key="about" className="d-flex justify-center align-items-center"
          style={{width:'100%',height:'100%',background:'blue'}}>
          <h1>world</h1>
        </div>
      </HomeMainSlider>
    </div>
  )
}


export async function getServerSideProps(context : any) {
  return {
    props:{}
  }
}
