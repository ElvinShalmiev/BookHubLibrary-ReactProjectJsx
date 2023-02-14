import React from 'react'
import '../App';
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  console.log('favorites are ', favorites);

  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean
  };




  return (
    <div className='favorites'>
      {favorites.length > 0 ? favorites.map((book) => (
        <div key={book.id} className='book'>
          <div><h2>{book.title}</h2></div>
          <div><img src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)} /></div>

          <div>{favoritesChecker(book.id) ?
            (
              <button onClick={() => removeFromFavorites(book.id)}>Remove from Favorites</button>
            ) : (
              <button onClick={() => addToFavorites(book)}>Add to Favorites(icon here)</button>
            )
          }</div>
        </div>
      )) : <h1 className='message'>You don't have any favorites books yet!</h1>
      }
    </div>
  )
}

export default Favorites