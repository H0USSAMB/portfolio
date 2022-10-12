import React from 'react'
import "./App.css"
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Head/Header'
import Home from './Components/home/Home'
import Project from './Components/Projects/Project'
const App = () => {
  return (
    <>
    <Header></Header>
    <Home></Home>
    <About></About>
    <Project></Project>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App