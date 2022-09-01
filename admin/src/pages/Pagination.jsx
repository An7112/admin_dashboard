import React,{memo} from 'react'

const Pagination = memo(({datasPerPage, currentPage, totalDatas, paginate}) => {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalDatas/datasPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <div className='flex flex-row max-w-md ml-8'>
        {pageNumbers.map(number => (
            <div key={number} className={`${currentPage === number ? 'bg-gray-600' : 'bg-pink-600'} m-1 rounded-xl`}>
                <button onClick={() => paginate(number)} className="w-10 h-10 text-white">
                    {number}
                </button>
            </div>
        ))}
    </div>
  )
})

export default Pagination