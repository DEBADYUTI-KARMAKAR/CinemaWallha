/* eslint-disable react/prop-types */

function Pagination(props) {

  let {pageNumber,onPrevious,onNext} = props;
  return (
    <div className='flex justify-center
    text-blue-950
    my-4
    '>
        <div className='
        border-2 
        border-r-0
        p-2
        rounded-l-xl
        border-blue-950
        cursor-pointer
        ' 
        onClick={onPrevious}>Previous</div>
        <div className='
        border-2 
        border-r-0
        p-2
        border-blue-950
        
        '>{pageNumber}</div>
        <div className='
        border-2 
        p-2
        rounded-r-xl
        border-blue-950
        cursor-pointer
        '
        onClick={onNext}
        >Next</div>
      
    </div>
  )
}

export default Pagination
