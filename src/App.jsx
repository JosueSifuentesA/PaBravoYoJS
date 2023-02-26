import MainPage from './MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPageInformation from './MainPageInformation'
import LoginPage from './LoginPage'
import './landingPage.css'

function App () {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/registro' element={<MainPageInformation />} />
        <Route path='/iniciarSesion' element={<LoginPage />} />
      </Routes>

    </BrowserRouter>

  )
}
export default App
