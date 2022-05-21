const Pagination = ({ totalUsers, paginate }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / 10); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination justify-content-center">
      {pageNumbers.map((num) => (
        <li key={num} className="page-item">
          <button onClick={() => paginate(num)} className="page-link">
            {num}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
