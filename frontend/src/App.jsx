import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header/> 
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
