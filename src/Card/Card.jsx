import React from 'react'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    const {flag, alt, name, capital } = props;
  return (
 <div className="col-lg-4">
    <div className='card' >
    <img src={flag} alt={alt} height='200' />
    <h4 className='country'>Country: {name}</h4>
    <h5 className='capital'>Capital: {capital}</h5>
    <NavLink to={`/country/name/${name.toLowerCase()}` }>Single page</NavLink>
</div>
 </div>
  )
}

export default Card;