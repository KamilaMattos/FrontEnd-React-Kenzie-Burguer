import "../EmptyCart/style.css"

function EmptyCart() {
  return (
    <aside className='cart'>
      <div className='cart__header'>
        <h2>Carrinho de compras</h2>
      </div>
      <div className='cart__bodyInfo'>
        <p>Sua sacola está vazia</p>
        <span>Adicione itens</span>
      </div>
    </aside>
  )
}

export default EmptyCart
