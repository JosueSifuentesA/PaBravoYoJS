import iconBell from '../assets/bell.svg'
import iconAddress from '../assets/address.svg'
import iconEmail from '../assets/email.svg'

const ModuleContactUs = () => {
  return (

    <section className='module_contacUsContainer'>

      <div className='contactUsContainer'>
        <img src={iconAddress} />
        <label>Direccion</label>
        <span>Av La Fontana #123, La Molina, Perú</span>
      </div>
      <div className='contactUsContainer'>
        <img src={iconEmail} />
        <label>Telefono</label>
        <span>+917453680</span>
      </div>
      <div className='contactUsContainer'>
        <img src={iconEmail} />
        <label>Email</label>
        <span>info@pabravo_yo.com</span>
      </div>
      <div className='contactUsContainer'>
        <img src={iconBell} />
        <label>Horario de atencion</label>
        <span>Lunes a viernes: 12:00 pm - 9:00 pm</span>
      </div>

    </section>

  )
}

export default ModuleContactUs
