import React from 'react'
import styles from '../styles/Hero.module.css'
import {FiSearch} from 'react-icons/fi'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h2 className={styles.title}>Find Hospitals closest to you</h2> 
        <p className={styles.para}>Discover your perfect care: Find your hospitals <span>Anytime Anywhere!</span> </p>
        <button className={styles.button}> <FiSearch style={{marginRight:'5px'}}/> Find hospitals in your location</button>
      </div>
    </section>
  )
}

export default Hero