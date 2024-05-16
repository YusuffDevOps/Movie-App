
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import React from 'react';
import Layout from './components/layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/header';
import Trailer from './components/trailer/trailer';
import Reviews from './components/reviews/Reviews';
import Disclaimer from './components/Disclaimer/disclaimer';

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async () => {
    try{
      const response = await api.get("api/v1/movies");

    setMovies(response.data);
    console.log(movies)
    } catch(err){
      console.log(err);
    }
    
  }

  const getMovieData = async (movieId) =>{
    try{
       const response = await api.get(`/api/v1/movies/${movieId}`);

       const singleMovie = response.data;
       setMovie(singleMovie);
       setReviews(singleMovie.reviewIds);
    } catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getMovies();
  }, [])
  return (
    <div className="App">
<Header/>
<Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home movies= {movies}/>}/>
    <Route path="Trailer/:ytTrailerId" element={<Trailer/>}/>
    <Route path="Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}/>
    <Route path="*" element={<Disclaimer/>}/>
  </Route>
</Routes>

    </div>
  );
}

export default App;
