import "../ProductsList/style.css"
import Product from "../Product"

function ProductList({ products, handleClick }) {
  return (
    <ul className='container__listaProdutos'>
      {products.map((product) => (
        <Product key={product.id} product={product} handleClick={handleClick} />
      ))}
    </ul>
  )
}

export default ProductList
