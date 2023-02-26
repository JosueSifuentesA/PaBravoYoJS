import iconLogo2PaBravo from './assets/logo2.png'
import { Route, Link, Routes } from 'react-router-dom'
import imgIniciarSesion from './assets/iniciarSesion.jpg'
import { Footer } from './Footer'
import './login.css'
import { useState } from 'react'
const LoginPage = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const handleClick = (e) => {
    e.preventDefault()
  }

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
              <input onChange={(e) => { setUser(e.target.value) }} value={user} placeholder='Escriba su usuario..' />
            </div>

            <div className='form_passwordInput'>
              <label>Contraseña : </label>
              <input type='password' onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder='*******' />
            </div>
            <button onClick={handleClick} className='form_button'>Iniciar Session</button>
          </form>
        </div>

        <Footer />

      </main>

    </>
  )
}

export default LoginPage
