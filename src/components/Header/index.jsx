import logo from "../../img/logo.svg"
import "../Header/style.css"

function Header({showProducts, filteredProducts}) {
  

  return (
    <header className='header'>
      <img src={logo} alt='Logo' />
      <form className='header__form'>
        <input
          onChange={(event) => showProducts(event.target.value)}
          className='header__inputSearch'
          type='text'
          placeholder='Digitar pesquisa'
        />
        <button onClick={filteredProducts} className='header__btn' type='submit'>
          Pesquisar
        </button>
      </form>
    </header>
  )
}

export default Header
