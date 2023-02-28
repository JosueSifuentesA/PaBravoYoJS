import MainPage from './MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPageInformation from './MainPageInformation'
import ShopHome from './ShopHome'
import LoginPage from './LoginPage'
import './landingPage.css'

function App () {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/registro' element={<MainPageInformation />} />
        <Route path='/iniciarSesion' element={<LoginPage />} />
        <Route path='/paginaPrincipal' element={<ShopHome />} />
      </Routes>

    </BrowserRouter>

  )
}
export default App
