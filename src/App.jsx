import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Navigation/Header'
import Footer from './Components/Footer/Footer'
import {Routes, Route} from 'react-router-dom'
import Blog from './Pages/Blog'
import Home from './Pages/Home'
import Baby_Collection from './Pages/Baby Collection'
import Contact from './Pages/Contact'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Pages from './Pages/Pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/Baby Collection' element={<Baby_Collection/>}></Route>
        <Route path='/Blog' element={<Contact/>}></Route>
        <Route path="/Men" element={<Men/>}></Route>
        <Route path="/Pages" element={<Pages/>}></Route>
        <Route path='/Women' element={<Women/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
