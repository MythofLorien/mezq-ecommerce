import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (


    <>
      <div>

        <NavBar />
        <h2 className='estilosh2'>Un ecommerce de disfraces para michis</h2>

      </div>

      <div>
        <h1>Disfraces Para michis</h1>
        <ItemListContainer greetings="¡Hola, michi lovers!" />
      </div>

    </>

  )
}

export default App
