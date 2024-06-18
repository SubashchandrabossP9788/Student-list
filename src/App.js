import Student from './components/Student'
import Context from './components/context'
import Favouritestudent from './components/Favouritestudent'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
const App = () =>{

  return(
    <>
      <Context>
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Student></Student>}></Route>
              <Route path='/favoritestudent' element={<Favouritestudent ></Favouritestudent>}></Route>
            </Routes>
          </BrowserRouter>
      </Context>
      
    </>
  )
}

export default App
