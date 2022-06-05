import "./App.css"

import ProductList from "./components/ProductsList"
import Cart from "./components/Cart"
import EmptyCart from "./components/EmptyCart"
import Header from "./components/Header"

import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [])

  function showProducts(value) {
    const filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase())
      )
    })
    if (filtered.length > 0) {
      setProducts(filtered)
    } else {
      setFilteredProducts([])
    }
  }

  function handleClick(id) {
    const findered = products.find((product) => {
      return product.id === id
    })
    const match = currentSale.find((product) => product.id === findered.id)

    if (match?.id) {
      toast.warn("Este produto já foi adicionado ao carrinho!")
    } else {
      setCurrentSale([...currentSale, findered])
      toast.success("Produto adicionado ao carrinho!")
    }
  }

  return (
    <div className='App'>
      <ToastContainer />
      <Header filteredProducts={filteredProducts} showProducts={showProducts} />
      <ProductList
        filteredProducts={filteredProducts}
        products={products}
        handleClick={handleClick}
      />
      {currentSale[0] ? (
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      ) : (
        <EmptyCart />
      )}
    </div>
  )
}

export default App
