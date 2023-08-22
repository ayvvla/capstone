"use client";
import React from "react";
import styles from "/styles/hospitals.module.css";

const HospitalAside:React.FC = ({ location, hospitals, click }) => {
  

  return (
    <aside className={styles.aside}>
      <div className={styles.fixed}>
        <h1 className={styles.header}>Nearby Cities</h1>
        {location.map((item, index) => (
          <div
            onClick={ async (item) => await click(item)}
            key={index}
            className={styles.asideItem}
          >
            {item}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default HospitalAside;
