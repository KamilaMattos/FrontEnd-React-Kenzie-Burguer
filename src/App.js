import "./App.css"
import ProductList from "./components/ProductsList"
import Cart from "./components/Cart"
import EmptyCart from "./components/EmptyCart"
import Header from "./components/Header"
import { useEffect, useState } from "react"
//import { ToastContainer, toast } from "react-toastify"
//import "react-toastify/dist/ReactToastify.css"

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [])
  console.log(products)
  const notification = () => {
    // toast.warn("Produto já adicionado ao carrinho", {
    //   position: "bottom-center",
    //   autoClose: 2500,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    // })
  }

  function showProducts(value) {
    //const target = event.target.value
    const filtered = products.filter((product) => {
      return(
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase())
      )
      // if (
      //   product.name.toLowerCase().includes(target.toLowerCase()) ||
      //   product.category.toLowerCase().includes(target.toLowerCase())
      // ) {
      // }
      // return product
    })
    if (filtered.length > 0) {
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts([])
    }
  }

  function handleClick(id) {
    const findered = products.find((product) => {
      if (product.id === id) {
        return product
      }
    })
    const match = currentSale.find((product) => product.id === findered.id)

    if (match?.id) {
      notification()
    } else {
      setCurrentSale([...currentSale, findered])
    }
  }

  return (
    <div className='App'>
      {/* <ToastContainer /> */}
      <Header filteredProducts={filteredProducts} showProducts={showProducts} />
      <ProductList  filteredProducts={filteredProducts} products={products} handleClick={handleClick} />
      {currentSale[0] ? (
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      ) : (
        <EmptyCart />
      )}
    </div>
  )
}

export default App