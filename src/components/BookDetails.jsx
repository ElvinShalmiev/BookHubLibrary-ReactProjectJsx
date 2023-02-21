import React,{useState,useEffect} from 'react'
import '../App';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BOOK_DETAILS_URL } from '../API';

import { useAppContext } from './context/appContext';





const BookDetails = () => {

  const [book,setBook]=useState({});

  const { id } = useParams();

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
    
    

    const favoritesChecker = (id) => {
        const boolean = favorites.some((book) => book.id === id);
        return boolean
    }

  useEffect(()=>{
    axios.get(`${BOOK_DETAILS_URL}/${id}`)
    .then(res=>{
      setBook(res.data);
    }).catch((err)=>console.log(err))
  },[id]);




  return (
    <div className='book-details'>
      <div className='book-image'>
        <img src={book?.image_url} alt="#" className='book-image-details' />
        <h2>{book?.title}</h2>
        
        <div>{favoritesChecker(book.id) ?
                        (
                            <button onClick={() => removeFromFavorites(book.id)}>Remove from Favorites</button>
                        ) : (
                            <button onClick={() => addToFavorites(book)}>Add to Favorites</button>
                        )
                    }</div>

      </div>
      <div className='book-description '>
        <h2>Description</h2>
        <p>{book?.description}</p>
        <h2>Authors</h2>
        <p>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>

      </div>
    </div>
  )
}

export default BookDetails