import iconCard2 from './assets/card2.png'

const ModuleAboutUs = () => {
  return (
    <div className='container_module'>
      <div className='module_information'>
        <h1>ABOUT US</h1>

        <div className='information_data'>
          <img className='data_icon' src={iconCard2} />
          <div className='data_mision'>
            <h2>Mision</h2>
            <p>Brindar a nuestros clientes la mejor experiencia gastronómica de ceviche y mariscos, con ingredientes frescos y un servicio excepcional.</p>
          </div>
          <div className='data_vision'>
            <h2>Vision</h2>
            <p>Ser reconocidos como el mejor restaurante de ceviche y mariscos del país, destacando por nuestra calidad, sabor y atención al cliente.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
export default ModuleAboutUs
