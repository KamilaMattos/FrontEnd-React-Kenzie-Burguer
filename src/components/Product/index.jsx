import "../Product/style.css"
//import fotoProdutoTeste from "../../img/fotoProdutoTeste.svg"

function Product({ product, handleClick }) {
  return (
    <li className='card'>
      <div className='card__header'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='card__body'>
        <h2>{product.name}</h2>
        <span className='card__category'>{product.category}</span>
        <span className='card__price'>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className='card__footer'>
        <button onClick={() => handleClick(product.id)}>Adicionar</button>
      </div>
    </li>
  )
}

// function Product({ img, name, category, price, handleClick, id }) {
//   return (
//     <li className='card'>
//       <div className='card__header'>
//         <img src={img} alt={name} />
//       </div>
//       <div className='card__body'>
//         <h2>{name}</h2>
//         <span className='card__category'>{category}</span>
//         <span className='card__price'>R$ {price}</span>
//       </div>
//       <div className='card__footer'>
//         <button onClick={() => handleClick(id)}>Adicionar</button>
//       </div>
//     </li>
//   )
// }

export default Product
