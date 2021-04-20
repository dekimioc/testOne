import React from 'react'
import PropTypes from 'prop-types'

import './Card.style.scss'

const Card = ({cardSrc, name}) => {
    return(
        <div className="user-card col-12 d-flex flex-column flex-sm-column flex-md-row align-items-center">
            <img className="user-image" src={cardSrc} alt=""/>
            <p>{name}</p>
        </div>
    )
}

Card.propTypes = {
  cardSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Card