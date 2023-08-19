import React from "react";
import styles from "../styles/About.module.css";
import { BsHospital } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { FaShareSquare } from "react-icons/fa";
import { TiExport } from "react-icons/ti";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <h2 className={styles.title}>About</h2>
      <p className={styles.para}>
        Carefinder is a platform where users can search for hospitals in their
        areas, export hospital details for your records and enhance your
        healthcare experience by connecting with others and sharing valuable
        resources.
      </p>
      <div className={styles.box}>
        <div className={styles.card}>
          <div className={styles.circle}>
            <FaUserDoctor size={60} color="white" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.bold}>Search Doctors</h1>
            <p className={styles.para}>Effortlessly find the best hospitals near you</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.circle}>
            <BsHospital size={60} color="white" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.bold}>Search Hospitals</h1>
            <p className={styles.para}>Effortlessly find the best hospitals near you</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.circle}>
            <TiExport size={60} color="white" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.bold}>Export Hospitals</h1>
            <p className={styles.para}>Effortlessly find the best hospitals near you</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.circle}>
            <FaShareSquare size={60} color="white" />
          </div>
          <div className={styles.text}>
            <h1 className={styles.bold}>Share Hospitals</h1>
            <p className={styles.para}>Effortlessly find the best hospitals near you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
