import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying, Movie} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
      setMoviesInCinema(resp.data.results);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //now_playing
    getMovies();
  }, []);

  return {
    moviesInCinema,
    isLoading,
  };
};
