import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Card from '../Card/Card';
import PaginationComponent from '../Pagination/Pagintaion';
import ErrorModal from '../ErrorModal/ErrorModal';

import './CardsWrapper.style.scss';
import Loader from '../Loader/Loader';

const CardsWrapper = () => {
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const [errorDetailsMessage, setErrorDetailsMessage] = useState('')

    useEffect(() => {
    axios.get(process.env.REACT_APP_GIT_URL + `${pageNumber}`)
      .then(response => {
        if(response.status === 200) {
          setUsers(response.data)
          setIsLoaded(true)
        }
      })
      .catch(err => {
        if(err.response.status === 403) {
            setErrorMessage(err.response.status)
            setErrorDetailsMessage(err.response.data.message)
        } else if(err.response.status === 404) {
            setErrorMessage(err.response.status)
            setErrorDetailsMessage(err.response.statusText)
        }
      })
  }, [pageNumber]);

    const scrollToTopHandler = () => {
        if (isLoaded) {
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }
      }

    const changeCurrentPage = numPage => {
      setIsLoaded(false)
      if (pageNumber === numPage.selected + 1) {
        return
      } else {
        setPageNumber(numPage.selected + 1);
        scrollToTopHandler();
      }
  };

    return (
    !errorMessage && errorMessage.length === 0 ? <div className="container-fluid">
            {isLoaded ?  <Card data={users} /> : <Loader />}
            <PaginationComponent changeCurrentPage={(numPage) => changeCurrentPage(numPage)}/>
        </div> : <ErrorModal errorText={errorMessage} errorDetails={errorDetailsMessage}/> 
    )
}

export default CardsWrapper;