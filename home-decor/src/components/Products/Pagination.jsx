import React from 'react'

const Pagination = ({totalPage, productPerPage}) => {
    const pageNumber = [];
    for(let i=1; i<=Math.ceil(totalPage, productPerPage); i++)
  return (
    <div>Pagination</div>
  )
}

export default Pagination