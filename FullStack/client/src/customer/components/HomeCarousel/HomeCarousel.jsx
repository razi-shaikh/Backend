import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeCarouselData } from '../../data/homeCarousel';


const items = homeCarouselData.map((item) => {
  return <img src={item.image} alt="" className=' cursor-pointer' />
})

function HomeCarousel() {
  return (
    <div className='-z-10'>
      <AliceCarousel
        animationType="fadeout"
        animationDuration={800}

        infinite
        autoPlay={true}
        autoPlayInterval={1500}
        items={items}

        disableButtonsControls
      // disableDotsControls
      />
    </div>
  )
}

export default HomeCarousel