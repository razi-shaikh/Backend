import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard({ data }) {
  const navigate = useNavigate()
  // console.log(data);
  return (
    <div className="sm:w-[230px] w-[160px] relative group mb-4 rounded-md flex flex-col items-center" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} onClick={() => navigate(`/product/5`)}>
      <div className="overflow-hidden h-[12rem] sm:h-[15rem] w-[140px] sm:w-[180px]">
        <img className="object-cover object-top w-full h-full transition-all duration-300 group-hover:scale-125" src={data.imageUrl} alt="" />
      </div>
      <div className="absolute left-3 top-3">
        <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">New</p>
      </div>
      <div className="flex items-start justify-between mt-2 sm:mt-4 space-x-4">
        <div className='p-2'>
          <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
            <a href="#" title="">
              {data.title}
              <span className="absolute inset-0" aria-hidden="true"></span>
            </a>
          </h3>
          {/* price section */}
          <div className="flex gap-3">
            <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">₹{data.discountedPrice}</p>
            <p className="text-xs font-bold opacity-50 line-through text-gray-900 sm:text-sm md:text-base">₹{data.price}</p>
            <p className="text-xs font-bold text-green-600 sm:text-sm md:text-base">5% Off</p>
          </div>
          {/* star section */}
          <div className="flex items-center my-2.5 space-x-px">
            {[1, 1, 1, 1, 1].map(() => (
              <svg className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" key={Math.random()}>
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard