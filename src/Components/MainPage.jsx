import { Footer } from './Footer'
import iconLogo2PaBravo from '../assets/logo2.png'
import { Link } from 'react-router-dom'
import MainPageInformation from './MainPageInformation'
import './landingPage.css'

const MainPage = () => {
  return (
    <>
      <header className='header'>
        <Link to='/'>
          <img className='header_logo' src={iconLogo2PaBravo} />
        </Link>
        <Link to='/iniciarSesion' className='header_logIn'>Iniciar Sesion</Link>
      </header>

      <main className='main'>
        <section className='main_hero'>
          <div className='hero_titleContainer'>
            <h2 className='titleContainer_title'>BIENVENIDO A LA CEVICHERIA</h2>
            <h1 className='titleContainer_name'>PA BRAVO YO</h1>
          </div>
          <Link to='/registro' className='hero_registrarse'>Registrarse</Link>
        </section>

        <MainPageInformation />
        <Footer />

      </main>

    </>

  )
}

export default MainPage
