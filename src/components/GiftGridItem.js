import React from 'react';
import PropTypes from 'prop-types';
export const GiftGridItem = ({title,url}) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

GiftGridItem.propTypes = {
  title:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired
}

 /*
  installar enxyme
  1) enzyme
  2) enzyme json
  3) debe mostrar el componente correctamente
    *shallow
    *wrapper
    *wrapper . toMatchSnapshot
 
 */