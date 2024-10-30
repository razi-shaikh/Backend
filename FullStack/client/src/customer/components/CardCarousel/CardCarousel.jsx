import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from '../ProductCard/ProductCard';


function CardCarousel({ data, sectionName }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    }
  };
  return (
    <div className='m-6'>
      <h2 className=' text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className=' relative px-4 border'>

        <div className=' relative py-5'>
          <Carousel responsive={responsive}>
            {
              data.slice(0, 10).map((item) => (
                // <Card product={item} key={Math.random()} />
                <ProductCard data={item} key={Math.random()} />
              ))
            }
          </Carousel>
        </div>
      </div>
    </div>
  )
}



export default CardCarousel









{/* <div className=' bg-red-400'>Item 1</div>
        <div className=' bg-blue-400'>Item 2</div>
        <div className=' bg-red-400'>Item 3</div>
        <div className=' bg-blue-400'>Item 4</div>
        <div className=' bg-red-400'>Item 5</div>
        <div className=' bg-blue-400'>Item 6</div>
        <div className=' bg-red-400'>Item 7</div>
        <div className=' bg-blue-400'>Item 8</div> */}