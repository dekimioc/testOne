import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './Card.style.scss'

const Card = ({data}) => {
    const [clickedElement, setClickedEl] = useState(false)

    const clickedElementHandler = (d) => {
        setClickedEl(d)
    }
 
    return(
        data.map(e => <div key={e.id} className={`user-card col-12 pt-3 pb-3 pl-0 d-flex flex-column flex-sm-column flex-md-row align-items-center ${e.id === clickedElement ? "clickedRow" : ''}`} onClick={d => clickedElementHandler(e.id)}>
            <img className="user-image mr-3" src={e.owner.avatar_url} alt=""/>
            <p className="mb-0 card-name">{Object.keys(e.files)[0]}</p>
        </div>)
        
    )
}

Card.propTypes = {
  data: PropTypes.array.isRequired
}

export default Card