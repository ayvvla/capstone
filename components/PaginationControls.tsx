"use client";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import {GrFormNextLink, GrFormPreviousLink} from 'react-icons/gr'
import styles from "/styles/hospitals.module.css"

export const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((hospital: any) => (
        <div key={hospital.id} className="pageItem">
          <h1>{hospital.name}</h1>
          <p>{hospital.address}</p> 
        </div>
      ))}
    </>
  );
};

const HospitalItem = ({ hospitals }) => {
  // console.log(hospitals)
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage: number = 10;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = hospitals.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(hospitals.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % hospitals.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        activeClassName={`${styles.item} ${styles.active} `}
        breakClassName={`${styles.item} ${styles.breakme}`}
        breakLabel={'...'}
        containerClassName={styles.pagination}
        disabledClassName={styles.disabledpage}
        marginPagesDisplayed={2}
        nextClassName={`${styles.item} ${styles.next} `}
        nextLabel={<GrFormNextLink style={{ fontSize: 18, width: 150 }} />}
        pageCount={pageCount}
        pageClassName={`${styles.item} ${styles.paginationPage} `}
        pageRangeDisplayed={4}
        previousClassName={`${styles.item} ${styles.previous} `}
        previousLabel={<GrFormPreviousLink style={{ fontSize: 18, width: 150 }} />}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default HospitalItem;
