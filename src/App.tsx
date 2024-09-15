import Home from "./components/home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Veg from "./components/veg"
import Nonveg from "./components/nonveg"
import About from "./components/about"
import Contact from "./components/contact"


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/veg' element={< Veg />}></Route>
        <Route path='/nonveg' element={<Nonveg />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
