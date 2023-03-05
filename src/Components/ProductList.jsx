import { useEffect, useState } from 'react'
import './shopHome.css'
function ProductList ({ items, recieveShopingCartData = undefined }) {
  const [counts, setCounts] = useState({})
  const [shopingCart, setChopingCart] = useState([])

  const handleIncrement = (id) => {
    setCounts(prevCounts => ({ ...prevCounts, [id]: (prevCounts[id] || 0) + 1 }))
  }

  const handleDecrement = (id) => {
    setCounts(prevCounts => ({ ...prevCounts, [id]: Math.max(0, (prevCounts[id] || 0) - 1) }))
  }

  const buyItem = (count, id) => {
    const newShopingCart = [...shopingCart]
    const indexFinded = newShopingCart.findIndex(item => item.id === id)

    if (count === 0) { return }

    if (indexFinded !== -1) {
      // const updatedNumber = newShopingCart[indexFinded].itemCounts++

      if (newShopingCart[indexFinded].itemCounts !== count) {
        const updatedItem = { ...newShopingCart[indexFinded], itemCounts: count }
        newShopingCart[indexFinded] = updatedItem
      }
    } else {
      newShopingCart.push({ ...items[id], itemCounts: count })
    }

    setChopingCart(newShopingCart)
  }

  useEffect(() => {
    if (recieveShopingCartData !== undefined) {
      recieveShopingCartData(shopingCart)
    }
  }, [shopingCart])

  return (
    <>
      {Object.entries(items).map((value) => {
        const item = value[1]
        const count = counts[item.id] || 0
        return (
          <div className='productContainer' key={item.id}>
            <div className='productContainer_data'>
              <h1 className='data_h1'>{item.nombre}</h1>
              <div>Price: ${item.price}</div>
              <div className='data_counterContainer'>
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <span>{count}</span>
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
            </div>
            <button className='productContainer_buyButton' onClick={() => { buyItem(count, item.id) }}>Buy</button>
          </div>
        )
      })}
    </>
  )
} export default ProductList
