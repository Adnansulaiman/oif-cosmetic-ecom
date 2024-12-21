
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Hero from './component/Hero/Hero
import Navbar from './component/Navbar/Navbar'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className='bg-secondary'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>

    </div>
  )
}

export default App
