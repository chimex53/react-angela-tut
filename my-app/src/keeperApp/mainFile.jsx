import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'
import './sytle.css'
import joke from './joke'

function createJokes(joking){
  return <Note
    key={joking.id}
    name={joking.name}
    sex={joking.sex}
    img={joking.img}
  />
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header />
  {joke.map(createJokes)}
  <Footer />
  </StrictMode>,
)
