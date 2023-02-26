import iconLogo2PaBravo from './assets/logo2.png'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import imgIniciarSesion from './assets/iniciarSesion.jpg'
import './login.css'
const LoginPage = () => {
  return (
    <>

      <header className='header'>
        <Link to='/'>
          <img className='header_logo' src={iconLogo2PaBravo} />
        </Link>
        <Link to='/iniciarSesion' className='header_logIn'>Iniciar Sesion</Link>
      </header>

      <main className='mainLogin'>
        <div className='mainLogin_container'>
          <img src={imgIniciarSesion} className='container_img' />
          <form className='container_form'>
            <div className='form_userInput'>
              <label>Usuario : </label>
              <input />
            </div>

            <div className='form_passwordInput'>
              <label>Contraseña : </label>
              <input />
            </div>
            <button className='form_button'>Iniciar Session</button>
          </form>
        </div>
      </main>

    </>
  )
}

export default LoginPage
