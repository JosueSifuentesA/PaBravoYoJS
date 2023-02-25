import './landingPage.css'
import iconWelcome from './assets/welcome.svg'
import iconAboutUs from './assets/aboutUs.svg'
import iconContactUs from './assets/phone.svg'
import ModuleCarrousel from './ModuleCarrousel'
import ModuleAboutUs from './ModuleAboutUs'

import { useState } from 'react'
import ModuleContactUs from './ModuleContactUs'

const moduleCarrousel = <ModuleCarrousel />
const moduleAboutUs = <ModuleAboutUs />
const moduleContactUs = <ModuleContactUs />

function MainPageInformation () {
  const [actualModule, setActualModule] = useState(<ModuleCarrousel />)

  const module = (moduleName) => {
    const MODULE_LIST = {
      Welcome: moduleCarrousel,
      AboutUs: moduleAboutUs,
      ContactUs: moduleContactUs
    }
    console.log(MODULE_LIST[moduleName])
    return MODULE_LIST[moduleName]
  }

  return (

    <section className='main_information'>

      <div className='information_selectorContainer'>
        <img onClick={() => { setActualModule(module('Welcome')) }} className='selectorContainer_img img_welcome' src={iconWelcome} alt='A icon for Welcome option' />
        <img onClick={() => { setActualModule(module('AboutUs')) }} className='selectorContainer_img img_aboutUs' src={iconAboutUs} alt='A icon for About us option' />
        <img onClick={() => { setActualModule(module('ContactUs')) }} className='selectorContainer_img img_contactUs' src={iconContactUs} alt='A icon for Contact us option' />
      </div>

      <div className='information_container'>
        {actualModule}
      </div>

    </section>

  )
}

export default MainPageInformation
