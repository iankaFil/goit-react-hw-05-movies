// import ReactPaginate from 'react-paginate';
import { StyledPaginate } from './Pagination.styled';

function Pagination({ totalItems, itemsPerPage, setSearchParams, params }) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = event => {
    setSearchParams({ ...params, page: event.selected + 1 });
  };

  return (
    <>
      <StyledPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination;
