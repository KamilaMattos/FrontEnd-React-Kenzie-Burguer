import CartTotal from "../CartTotal"
import "../Cart/style.css"

function Cart({ currentSale, setCurrentSale }) {
  function deleteProduct(prodToRemove) {
    const filtered = currentSale.filter((item) => item !== prodToRemove)
    setCurrentSale(filtered)
  }

  return (
    <aside className='cart'>
      <div className='cart__header'>
        <h2>Carrinho de compras</h2>
      </div>
      {currentSale.map((product) => (
        <div className='cart__body'>
          <ul className='cart__containerProducts'>
            <li key={product.id} className='cart__products'>
              <div className='cart__img'>
                <img src={product.img} alt={product.name} />
              </div>
              <div className='cart__titleEremove'>
                <h3>{product.name}</h3>
                <span
                  onClick={() => deleteProduct(product)}
                  className='cart__remover'
                >
                  Remover
                </span>
              </div>
              <div className='cart__categoria'>
                <span className='categoria'>{product.category}</span>
              </div>
            </li>
          </ul>
        </div>
      ))}
      <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </aside>
  )
}

export default Cart
