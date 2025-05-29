import { useState } from 'react'
import './App.css'

import movieData from './movies.json'

function Movie(props) {
  return (
    <>
      <h3>Name: {props.name}, Release Year: {props.year}, Rating: {props.rating}</h3>
    </>
  )
}

function MovieList({data}) {
  return (
    <>
    {
      data.map( (movie) => {
        return <Movie name={movie.name} year={movie.year} rating={movie.rating}/>
      })
    }
    </>
  )
}

function NavBar() {
  const [status, setStatus] = useState(true);

  return (
    <header>
       <h1>Assignment 1</h1>
      <button name="login_button" id="login_button" onClick={() => setStatus(!status)}>{status ? "Login" : "Log Out"}</button>
    </header>
  )
}

function App() {

  return (
    <div>
      <NavBar />
      <MovieList data={movieData.movies}/>
    </div>
  )
}

export default App
