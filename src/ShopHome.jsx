/* UNIT TEST , TEST END TO END , 5 PATRONES DE DISEÑO POR LO MENOS,
 IDENTAR EL CODIGO Y CACHEAR ERRORES
 HACER BIEN LA RESPUESTA
HACER UN BUEN CLEAN CODE

LEVANTAME UN ENTORNO VIRTUAL PARA PASAR DATOS DE UNA API ABIERTA

*/

const ITEM_LIST = {

  0: {
    nombre: 'Ceviche',
    thumbnail: null,
    price: '20$',
    id: 0
  },
  1: {
    nombre: 'Arroz con mariscos',
    thumbnail: null,
    price: '30$',
    id: 1
  },
  2: {
    nombre: 'Ceviche',
    thumbnail: null,
    price: '20$',
    id: 2
  },
  3: {
    nombre: 'Ceviche',
    thumbnail: null,
    price: '20$',
    id: 3
  },
  4: {
    nombre: 'Ceviche',
    thumbnail: null,
    price: '20$',
    id: 4
  },
  5: {
    nombre: 'Ceviche',
    thumbnail: null,
    price: '20$',
    id: 5
  },
  6: {
    nombre: 'Ceviche',
    thumbnail: null,
    price: '20$',
    id: 6
  },
  7: {
    nombre: 'Ceviche',
    thumbnail: null,
    price: '20$',
    id: 7
  }

}

const ShopHome = () => {
  const items = ITEM_LIST

  return (
    <main style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px' }}>

      {Object.entries(items).map((value) => {
        const item = value[1]
        return (

          <div key={item.id} style={{ alignItems: 'center', display: 'flex', flexFlow: 'column', maxWidth: '230px', maxHeight: '300px', borderRadius: '15px', boxShadow: '8px 8px 4px rgba(0, 0, 0, 0.25)' }}>
            <img />
            <div style={{ overflow: 'hidden', gap: '10px', padding: '15px', boxSizing: 'border-box', alignItems: 'center', width: '100%', height: '100%', display: 'flex', flexFlow: 'column', backgroundColor: '#48ABF3', color: 'white' }}>
              <h1 style={{ fontSize: '1em', textAlign: 'center' }}>{item.nombre}</h1>
              <span>Price : {item.price}</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
                <button>-</button>
                <label>0</label>
                <button>+</button>
              </div>
            </div>
            <button style={{ width: '100%', border: '1px solid white', borderRadius: '0px 0px 10px 10px' }}>Buy</button>
          </div>

        )
      })}

    </main>
  )
}

export default ShopHome
