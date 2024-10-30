import React from 'react'
import { CardCarousel, HomeCarousel } from '../../components'
import { mensKurta } from '../../data/mensKurta'

function Home() {
    return (
        <div className=' max-w-6xl my-16 mx-auto '>

            <HomeCarousel />
            <div >
                <CardCarousel data={mensKurta} sectionName="Men's Shoes" />
            </div>
            <CardCarousel data={mensKurta} sectionName="Men's Shoes" />
        </div>
    )
}

export default Home