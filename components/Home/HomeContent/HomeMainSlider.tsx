import React from 'react';
import styles from '../../../styles/Home.module.css'

export default function HomeMainSlider(props : any){
    const {currentPage,setPage} = props;
    
    return (
        <main className={styles.content}>
            {props.children.map((slide : any)=>(
                <section key={slide.key} className={`${styles["animated-slide"]} ${currentPage === slide.key ? styles["animated-active-slide"] : ''}`}>
                    {slide}
                </section>
            ))}
        </main>
    )
}