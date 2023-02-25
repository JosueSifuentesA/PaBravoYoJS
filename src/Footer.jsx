import './landingPage.css'
import iconLogoPaBravo from './assets/PaBravoYo.png'

import iconFacebook from './assets/iconFacebook.svg'
import iconTwitter from './assets/iconsTwitter.svg'
import iconInstagram from './assets/iconInstagram.svg'

export function Footer () {
  return (
    <footer className='footer'>
      <div className='footer_infoContainer'>
        <img src={iconLogoPaBravo} className='infoContainer_logo' alt='A logo of the page' />
        <div className='infoContainer_information'>
          <h1 className='infoContainer_title'>Siguenos en nuestras redes sociales</h1>
          <div className='infoContainer_socialMedia'>
            <img src={iconFacebook} className='socialMedia_icon socialMedia_iconFacebook' alt='The svg icon of facebook' />
            <img src={iconTwitter} className='socialMedia_icon socialMedia_iconTwitter' alt='The svg icon of twitter' />
            <img src={iconInstagram} className='socialMedia_icon socialMedia_iconInstagram' alt='The svg icon of instagram' />
          </div>
        </div>
      </div>
      <h1 className='footer_copyright'>2023-Todos los derechos reservados</h1>
    </footer>
  )
}
