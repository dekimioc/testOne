import ReactPaginate from 'react-paginate';
import './Pagination.style.scss'

const PaginationComponent = ({changeCurrentPage}) => {
    return (
        <div className="pagination-container">
        <ReactPaginate 
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={100}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={changeCurrentPage}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            previousLabel={"<"}
            />
            </div>
    )
};

export default PaginationComponent