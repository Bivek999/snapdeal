import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ContextData from "../context/product-data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import '../style/right.css'

const Right = () => {
  const { allProducts,active,setActive } = useContext(ContextData);
  const [array, setArray] = useState([]);
  const [page, setPage] = useState(0);

  function paginate(Products) {
    const perPage = 6;
    const totalPages = Math.ceil(Products.length / perPage);
    const product = Array.from({ length: totalPages }, (_, idx) => {
      return Products.slice(idx * perPage, idx * perPage + perPage);
    });
    return product;
  }

  useEffect(()=>{
    if(active===allProducts){
      setArray(paginate(allProducts))
    }else{
    setArray([...active])
    }
    console.log([...active]);
  },[active])

  function HandleCategory(e) {}

  function handlePageClick(e) {
    console.log(array[e.selected]);
    setPage(e.selected);
  }

  let arr=active.map((data)=>{    
    return (
      <>
      <img src={data.images}/>
      </>
    )
  })

  return (
    <div className="right-side">
      <div>{arr}</div>
      <div>
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={array.length}
          pageRangeDisplayed={4}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default Right;
