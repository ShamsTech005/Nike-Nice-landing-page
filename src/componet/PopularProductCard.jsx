import React from 'react'
import { products } from '../constants'
import { star } from '../assets/icons'
const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='felx flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt="name" className=' w[280px] h[280px]'/>
        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt="rating" width={24} height={24}/>
            <p className='font-montserra leading-normal text-xl text-slate-gray'>(4.5)</p>
        </div>
        <h3 className='mt-2 font-palanquin leading-normal font-semibold'>{name}</h3>
        <p className='text-coral-red font-semibold font-montserrat leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCard