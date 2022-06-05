import "../CartTotal/style.css"

function CartTotal({ currentSale, setCurrentSale }) {
  const totalPrice = currentSale.reduce((acc, cur) => {
    return acc + cur.price
  }, 0)

  function removeAll() {
    setCurrentSale([])
  }

  return (
    <>
      <div className='cart__footer'>
        <p>Total</p>
        <span>
          R${" "}
          {totalPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button className='cart__footerBtn' onClick={() => removeAll()}>
        Remover todos
      </button>
    </>
  )
}

export default CartTotal
