import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import movies from './movies.json'

function NavBar() {
  const [status, setStatus] = useState(true);

  return (
    <header>
       <h1>Assignment 1</h1>
      <button name="login_button" id="login_button" onClick={() => setStatus(!status)}>{status ? "Login" : "Log Out"}</button>
    </header>
  )
}

function Movie(props) {
  return (
    <p>{props.name} {props.year} {props.rating}</p>
  )
}

function MovieList(props) {
  for (let movie in props.movieList) {
    return (
      <div>{Movie(movie)}</div>
    )
  }

}

function App() {

  return (
    <div>
      <NavBar />
      <MovieList movieList={movies}/>
    </div>
  )
}

export default App
