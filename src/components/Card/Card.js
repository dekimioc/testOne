import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './Card.style.scss'

const Card = ({data}) => {
    const [clickedElement, setClickedEl] = useState(null)

    const clickedElementHandler = (event) => {
        setClickedEl(event)
    }
 
    return(
        data.map(e => <div 
                        key={e.id} 
                        className={`user-card col-12 pt-3 pb-3 pl-0 d-flex flex-md-row align-items-center ${e.id === clickedElement ? "clickedRow" : ''}`} 
                        onClick={event => clickedElementHandler(e.id)}>
                        <img className="user-image mr-3" src={e.owner.avatar_url} alt=""/>
                        <p className="mb-0 card-name">{Object.keys(e.files)[0]}</p>
                    </div>)
        
    )
}

Card.propTypes = {
  data: PropTypes.array.isRequired
}

export default Card