import { useEffect, useState } from 'react';

const usePagination = (totalItems, itemsPerPage) => {
 
    const [currentPage, setCurrentPage] = useState(1);

    const [recordsPerPage] = useState(itemsPerPage);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const nPages = Math.ceil(totalItems / recordsPerPage);


  return [nPages, currentPage, setCurrentPage ];
};


export { usePagination };