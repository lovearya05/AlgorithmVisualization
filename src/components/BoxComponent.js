import React from 'react'
import "../Home.css"

const BoxComponent = ({algo, image,color, address}) => {
  return (
         <a href={`/${address}`} className="algo__box" >
           <div className="image__algo" >
            <img alt="algoname" src={image} />
           </div>
           <div className="name__algo" style={{backgroundColor:color}}>
              <h3>{algo}</h3>
           </div>
         </a>       
  )
}

export default BoxComponent
