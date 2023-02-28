import { Link } from 'react-router-dom'
import iconLogo2PaBravo from '../assets/logo2.png'
function Header ({ children }) {
  return (
    <>
      <header className='header'>
        <Link to='/'>
          <img className='header_logo' src={iconLogo2PaBravo} />
        </Link>
        {children}
      </header>
    </>
  )
}

export default Header
