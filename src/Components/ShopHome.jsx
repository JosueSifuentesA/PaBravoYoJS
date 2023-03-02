/* UNIT TEST , TEST END TO END , 5 PATRONES DE DISEÑO POR LO MENOS,
 IDENTAR EL CODIGO Y CACHEAR ERRORES
 HACER BIEN LA RESPUESTA
HACER UN BUEN CLEAN CODE

LEVANTAME UN ENTORNO VIRTUAL PARA PASAR DATOS DE UNA API ABIERTA

*/

import { Footer } from './Footer'
import ProductList from './ProductList'
import './shopHome.css'
import iconCart from '../assets/cart.svg'
import iconClose from '../assets/close.svg'
import Header from './Header'
import { useState } from 'react'
const ITEM_LIST = {

  0: {
    nombre: 'Ceviche clasico',
    thumbnail: null,
    price: 8,
    id: 0
  },
  1: {
    nombre: 'Arroz con Mariscos',
    thumbnail: null,
    price: 25,
    id: 1
  },
  2: {
    nombre: 'Almejas gratinadas',
    thumbnail: null,
    price: 15,
    id: 2
  },
  3: {
    nombre: 'Langostinos al ajillo',
    thumbnail: null,
    price: 20,
    id: 3
  },
  4: {
    nombre: 'Langostinos al vapor',
    thumbnail: null,
    price: 25,
    id: 4
  },
  5: {
    nombre: 'Camarones a la plancha',
    thumbnail: null,
    price: 18,
    id: 5
  },
  6: {
    nombre: 'Parihuela',
    thumbnail: null,
    price: 12,
    id: 6
  },
  7: {
    nombre: 'Leche de tigre',
    thumbnail: null,
    price: 5,
    id: 7
  }

}

const ShopHome = () => {
  const items = ITEM_LIST

  const [shopingModule, setShopingModule] = useState(false)
  const [shopingCart, setShopingCart] = useState({})

  const recieveShopingCartData = (data) => {
    setShopingCart(data)
  }

  return (
    <>

      {shopingModule && (

        <div className='shopingCartContainer'>
          <div className='shopingCartContainer_handler'>
            <img className='handler_img' onClick={() => { setShopingModule(false) }} src={iconClose} />
            <h1>Carrito de compras</h1>

            <div style={{
              display: 'flex',
              flexFlow: 'column',
              gap: '10px',
              width: '100%'
            }}
            >

              {
              Object.entries(shopingCart).map((value) => {
                console.log(value)
                const item = value[1]
                return (
                  <div
                    style={{
                      border: '1px solid black',
                      backgroundColor: 'gray',
                      display: 'flex',
                      justifyContent: 'space-between',
                      height: '100%',
                      alignItems: 'center',
                      boxSizing: 'border-box',
                      padding: '10px',
                      borderRadius: '10px'
                    }} key={item.id}
                  >
                    <label style={{ maxWidth: '120px' }}>{item.nombre}</label>
                    <span style={{ minWidth: '15px', textAlign: 'center' }}>{item.price}</span>
                    <span style={{ minWidth: '15px', textAlign: 'center' }}>{item.itemCounts}</span>
                    <span style={{ minWidth: '15px', textAlign: 'center' }}>{item.price * item.itemCounts}</span>
                  </div>

                )
              })

            }

            </div>
          </div>
        </div>

      )}

      <Header>
        <div onClick={() => { setShopingModule(true) }} className='header_cartContainer'>
          <img className='cartContainer_img' src={iconCart} />
        </div>
      </Header>
      <main className='main_containerShop'>
        <section className='main_shopHome'>
          <ProductList recieveShopingCartData={recieveShopingCartData} items={items} />
        </section>
        <Footer />
      </main>
    </>
  )
}

export default ShopHome
