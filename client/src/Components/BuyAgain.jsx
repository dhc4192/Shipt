import React from "react";
import { Link, } from 'react-router-dom'
import "./ItemCarousels.css"
function BuyAgain(props) {
  const results = props.results
  return (
    <div>
      <Link to={`/BuyAgainList/`} ><h3>Buy Again</h3></Link>


      <div className='section-box'>
        {props.results.map((result, index) =>
          <div className='list-items'>
            <img
              src={result.imgURL}
              height='170px'
              width='125px'
              alt="item"
            />
            <p className="price">$ {result.price}</p>
            <p className="name">{result.name}</p>
            <p className="measurement">{result.measurement}</p>
          </div>
        )}

      </div>

    </div>
  )

} export default BuyAgain


// alt = "item"
// const results = props.results