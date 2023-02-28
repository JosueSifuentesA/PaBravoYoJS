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
    nombre: 'Ceviche',
    thumbnail: null,
    price: 20,
    id: 0
  },
  1: {
    nombre: 'Arroz con mariscos',
    thumbnail: null,
    price: 30,
    id: 1
  },
  2: {
    nombre: 'Ceviche',
    thumbnail: null,
    price: 20,
    id: 2
  },
  3: {
    nombre: 'Ceviche',
    thumbnail: null,
    price: 20,
    id: 3
  },
  4: {
    nombre: 'Ceviche',
    thumbnail: null,
    price: 20,
    id: 4
  },
  5: {
    nombre: 'Ceviche',
    thumbnail: null,
    price: 20,
    id: 5
  },
  6: {
    nombre: 'Ceviche',
    thumbnail: null,
    price: 20,
    id: 6
  },
  7: {
    nombre: 'Ceviche',
    thumbnail: null,
    price: 20,
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

        <div style={{ zIndex: '10000', position: 'fixed', backgroundColor: 'rgb(0,0,0,0.25)', height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '80%', maxWidth: '550px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column', backgroundColor: 'white', justifySelf: 'center', alignSelf: 'center', padding: '20px', boxSizing: 'border-box', borderRadius: '15px' }}>
            <img onClick={() => { setShopingModule(false) }} src={iconClose} style={{ width: '5%', height: '5%', alignSelf: 'flex-end' }} />
            <h1>Carrito de compras</h1>

            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>

                {
              Object.entries(shopingCart).map((value) => {
                console.log(value)
                const item = value[1]
                return (
                  <tr key={item.id}>
                    <td>{item.nombre}</td>
                    <td>{item.price}</td>
                    <td>{item.itemCounts}</td>
                    <td>{item.price * item.itemCounts}</td>
                  </tr>

                )
              })

            }
              </tbody>
            </table>
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
