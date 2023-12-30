// css
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Books from './pages/Books/Books'
import Book from './pages/Book/Book'
import BookUpdate from './pages/BookUpdate/BookUpdate'

function App() {

  return (
   <div className="App">
    <BrowserRouter>
    <Navbar />
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/books' element={<Books />}/>
      <Route path="/books/:id" element={<Book />} />
      <Route path="/books/bookupdate/:id" element={<BookUpdate />}/>
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
   </div>
  )
}

export default App
