import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '20beb74b4d3efb633227db127e7c4d18',
    language: 'es-ES',
  },
});

export default movieDB;
