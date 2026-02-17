import { useState, useEffect } from 'react';

const MovieCard = ({ movie }) => {
    //Taken and modified from resource 2
    const [isFavorite, setIsFavorite] = useState(false);
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
        const isMovieFavorite = favorites.some(fav => fav.id === movie.id);
        setIsFavorite(isMovieFavorite);
    }, [movie.id]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    
        if (isFavorite) {
            const updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
            localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites));
            setIsFavorite(false);
        }
        else {
            favorites.push(movie);
            localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    //Had some ai help with structure, as this is not my strong suit and my goal of this class. button was taken from resouce 2
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={posterUrl} alt={movie.title} />
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <button 
                    className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
                    onClick={toggleFavorite}
                >
                    {isFavorite ? '♥ Remove' : '♡ Add to Favorites'}
                </button>
            </div>
        </div>
  );
};

export default MovieCard;