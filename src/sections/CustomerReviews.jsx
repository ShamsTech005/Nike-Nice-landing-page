import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../componet/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-4xl text-center font-bold'>
        What Our <span className='text-coral-red'>Customers</span> Say?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.</p>
      
      <div className=' mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col'>
        {
          reviews.map((review) =>(
          <ReviewCard key={review.customerName} 
          imgURL={review.imgURL} 
          customerName={review.customerName} 
          rating={review.rating} 
          feedback={review.feedback}/>
          )) 
        }
      </div>
    </section>
  )
}

export default CustomerReviews