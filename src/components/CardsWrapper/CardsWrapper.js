import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Card from '../Card/Card';

import './CardsWrapper.style.scss';

const CardsWrapper = () => {
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
    axios.get(process.env.REACT_APP_GIT_URL + `${pageNumber}`)
      .then(repsonse => setUsers(repsonse.data))
      .catch(err => {
        console.log(err.message);
        
      })
  }, []);
    console.log(users);

    return (
        <div>
            {users.map(e => <Card cardSrc={e.owner.avatar_url} name={Object.keys(e.files)[0]} />)}
        </div>
    )
}

export default CardsWrapper;