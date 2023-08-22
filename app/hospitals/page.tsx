import React from "react";
import styles from "/styles/hospitals.module.css";
import HospitalItem from "@/components/PaginationControls";
import HospitalAside from "@/components/HospitalAside";

const Hospitals = async (): Promise<any> => {
  const res = await fetch("http://localhost:3000/api/hospitals");

  const data = await res.json();

  const hospitals = data.lists;

  const locationSet = new Set(hospitals.map((items: any) => items.location));
  const location = Array.from(locationSet);

  const click = async (item) => {
    "use server";
    const found = await hospitals.filter(
      (obj) => obj.location.toLowerCase() === item.toLowerCase()
    );
    console.log(found);
  };

  return (
    <div className={styles.hospital}>
      <h1 className={styles.title}>Featured Hospitals</h1>
      <div className={styles.main}>
        <HospitalAside
          location={location}
          hospitals={hospitals}
          click={click}
        />

        <div className={styles.page}>
          <HospitalItem hospitals={hospitals} />
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
