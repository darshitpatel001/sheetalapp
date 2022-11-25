import React, { useState } from 'react'
import reviews from './data'

export default function Card() {

  const [index,setindex] =useState (0);
  
  const previ = () =>{
  // setindex(index +1)
     if (index<=0) {
      setindex(reviews.length-1)
     } else {
      setindex(index-1)
     }

  }
 
  const next = () =>{
    // setindex(index -1)
    if (index >=reviews.length-1){
      setindex(0)
    } else {
      setindex(index+1)
    }
  }
  
  return (
    <div>
       
            <article class="review">
            <div class="img-container">
              <img src={reviews[index].img} id="person-img" alt="" />
            </div>
            <h4 id="author">${reviews[index].name}</h4>
            <p id="job">${reviews[index].job}</p>
            <p id="info">
            {reviews[index].text}
            </p>
            {/* <!-- prev next buttons--> */}
            <div class="button-container">
              <button class="prev-btn" onClick={previ}>
                <i class="fas fa-chevron-left"></i>
              </button>
              <button class="next-btn" onClick={next}>
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
            {/* <!-- random button --> */}
            <button class="random-btn">surprise me</button>
          </article>
        
    </div>
    
  )
}
