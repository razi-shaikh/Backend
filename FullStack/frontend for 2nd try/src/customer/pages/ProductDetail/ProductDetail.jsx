import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CardCarousel, CustomerReviews } from '../../components';
import { mensKurta } from '../../data/mensKurta';

const ProductDetail = () => {

  const color = [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ]

  const img = [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  ]

  const [activeImg, setActiveImage] = useState(img[0])

  const [amount, setAmount] = useState(1);

  return (
    <>
      <div className=' max-w-6xl my-16 mx-auto '>
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-top '>
          <div className='flex flex-col gap-6 lg:w-2/4'>
            <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl' />
            <div className='flex flex-row justify-between h-24'>
              {img.map((item) => (
                <img src={item} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(item)} />
              ))}

            </div>
          </div>
          {/* ABOUT */}
          <div className='flex flex-col gap-4 lg:w-2/4'>
            <div>
              <span className=' text-violet-600 font-semibold'>Special Sneaker</span>
              <h1 className='text-3xl font-bold'>Nike Invincible 3</h1>
            </div>
            <p className='text-gray-700'>
              Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
            </p>
            <div className='flex items-center justify-between mx-2'>
              <div className='flex my-2 items-center gap-4'>
                <h6 className='text-2xl font-semibold'>$ 199.00</h6>
                <h6 className='text-lg font-semibold opacity-50 line-through'>199.00</h6>
                <h6 className='text-2xl font-semibold text-green-600'>5% Off</h6>
              </div>
              <button className='bg-gray-200 py-2 px-4 rounded-lg text-indigo-600 text-3xl text-center sm:hidden' >
                <FavoriteBorderIcon /></button>
            </div>
            <h2>Size</h2>
            <div className='flex gap-4 mb-2'>
              <button className=' h-12 w-12 rounded-full bg-gray-200  text-2xl'>S</button>
              <button className=' h-12 w-12 rounded-full bg-gray-200  text-2xl'>M</button>
              <button className=' h-12 w-12 rounded-full bg-gray-200  text-2xl600'>L</button>
              <button className=' h-12 w-12 rounded-full bg-gray-200  text-2xl600'>XL</button>
            </div>

            <div className='flex flex-row items-center gap-12'>
              <div className='flex flex-row items-center'>
                <button className='bg-gray-200 py-2 px-5 rounded-lg text-indigo-600 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                <span className='py-4 px-6 rounded-lg'>{amount}</span>
                <button className='bg-gray-200 py-2 px-4 rounded-lg text-indigo-600 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
              </div>
              <button className='bg-indigo-600 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
              <button className='bg-gray-200 py-2 px-4 rounded-lg text-indigo-600 text-3xl hidden sm:block' ><FavoriteBorderIcon /></button>
            </div>
          </div>
        </div>
      </div>
      <div className=' max-w-7xl my-16 mx-auto '>
        <CardCarousel data={mensKurta} sectionName="Similar Product" />
      </div>
      <CustomerReviews />
    </>
  )
}

export default ProductDetail