//This was all taken from resouce 2, modified to fit this project.

import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>My Favorite Movies</h2>
        <p>Your saved movie collection</p>
      </div>
      
      {favorites.length > 0 ? (
        // We use a div with className="movie-grid" to act as the Grid component
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No favorite movies yet. Start adding some from the home page!</p>
        </div>
      )}
    </main>
  );
}

export default Favorites;