import { BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from './Pages/Home/Home'
import Footer from "./Components/Footer/Footer"
import Comic from "./Pages/Comic/Comic"

function App() {
  return (
    <div className='w-full mx-auto bg-[#231B27]'>
      <BrowserRouter>
        <Header/> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/comic" element={<Comic/>}>
            <Route path=":comicId" element={<Comic/>}></Route>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App
