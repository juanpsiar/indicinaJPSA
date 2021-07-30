import { useState } from 'react';

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  console.log( data[0],  title, pageLimit, dataLimit )
  function goNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      
      <h1 className='text-lg font-bold'>{title}</h1>
      {/* show the posts, 10 posts at a time */}
      <div className='dataContainer'>
        {getPaginatedData().map((d, idx) => (
           d.name && (<RenderComponent id={idx} data={d} />)
        ))}
      </div>

      
      <div className='flex items-center justify-end mb-10 mr-11'>
        {/* previous button */}
        <button
          onClick={goPreviousPage}
          className={currentPage === 1? 
            'pointer-events-none  text-gray-300 bg-gray-100 h-full w-1/12  rounded-xl text-3xl': 
          'bg-black text-white h-full w-1/12 border rounded-xl text-3xl'}

        >
          {'<'}
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={currentPage === item ? 'pointer-events-none mx-1 w-5': 'text-gray-400 mx-1 w-5'}
          >
            <span className=''>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goNextPage}
          className={currentPage === pages? 'pointer-events-none': 
          'bg-black text-white h-full w-1/12 border rounded-xl text-3xl'}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default Pagination;
