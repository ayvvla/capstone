import React from "react";
import styles from "/styles/hospitals.module.css";
import HospitalItem, {PaginationControls} from "@/components/PaginationControls";

const Hospitals = async (): Promise<any> => {

  const res = await fetch('http://localhost:3000/api/hospitals');

  const data = await res.json();

  const hospitals = data.lists;

  const locationSet = new Set(hospitals.map((items: any) => items.location));
  const location = Array.from(locationSet);
  

  return (
    <div className={styles.hospital}>
      <h1 className={styles.title}>Featured Hospitals</h1>
      <div className={styles.main}>
        <aside className={styles.aside}>
          <div className={styles.fixed}>
            <h1 className={styles.header}>Nearby Cities</h1>
            {location.map((item, index) => (
              <div key={index} className={styles.asideItem}>
                {item}
              </div>
            ))}
          </div>
        </aside>

        <div className={styles.page}>
          <HospitalItem hospitals={hospitals} />
          

        </div>
      </div>

      
    </div>
  );
};

export default Hospitals;
