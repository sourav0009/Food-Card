import Home from "./components/home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Veg from "./components/veg"
import Nonveg from "./components/nonveg"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path='/' element={<Home />}></Route>
      <Route path='/veg' element={< Veg/>}></Route>
      <Route path='/nonveg' element={<Nonveg/>}></Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
