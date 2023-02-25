import { Footer } from './Footer'
import iconLogo2PaBravo from './assets/logo2.png'
import MainPageInformation from './MainPageInformation'
import './landingPage.css'

function App () {
  return (

    <>
      <header className='header'>
        <img className='header_logo' src={iconLogo2PaBravo} />
        <a className='header_logIn'>Iniciar Sesion</a>
      </header>

      <main className='main'>
        <section className='main_hero'>
          <div className='hero_titleContainer'>
            <h2 className='titleContainer_title'>BIENVENIDO A LA CEVICHERIA</h2>
            <h1 className='titleContainer_name'>PA BRAVO YO</h1>
          </div>
          <a className='hero_registrarse'>Registrarse</a>
        </section>

        <MainPageInformation />
        <Footer />

      </main>

    </>

  )
}
export default App
