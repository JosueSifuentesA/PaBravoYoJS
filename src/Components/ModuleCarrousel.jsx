import { useState } from 'react'
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
import c4 from '../assets/c4.jpg'
import c5 from '../assets/c5.jpg'
const ModuleCarrousel = () => {
  const imageList = [c1, c2, c3, c4, c5]
  const [imageIndex, setImageIndex] = useState(2)

  const addIndex = () => {
    if (imageIndex < imageList.length - 1) {
      setImageIndex(imageIndex + 1)
      console.log(imageIndex)
    }
  }

  const sustractIndex = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1)
    }
  }

  return (
    <div className='container_module'>
      <h1 className='carrousel_h1'>REVISA NUESTRAS OFERTAS</h1>
      <div className='carrousel'>
        <button className='carrousel_btnActive' onClick={sustractIndex}> ← </button>
        <div className='carrousel_img'>
          <img className='img_image' src={imageList[imageIndex]} />
        </div>
        <button className='carrousel_btnActive' onClick={addIndex}> → </button>
      </div>
    </div>
  )
}

export default ModuleCarrousel
