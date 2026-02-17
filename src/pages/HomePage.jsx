import { useState, useEffect } from 'react';
import { getPopularMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';
import Hero from "../components/Hero";

function HomePage() {
  // Taken from resource 1, updated for movies
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await getPopularMovies();
      setMovies(movieData);
    };
  
    fetchMovies();
  }, []); 

  return (
    <>
      <Hero 
        title="Welcome to ComponentCorner"
        subtitle="Discover amazing products built with React components"
        callToActionText="Shop Now"
      />
      
      <div>
        <h2>Why Shop with Us?</h2>
        <p>
          ComponentCorner is your one-stop shop for the best tech essentials. 
          We pride ourselves on quality, speed, and premium customer service. 
          Browse our collection today to find the perfect gear for your setup!
        </p>
      </div>      

        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
    </>
  );
}

export default HomePage;