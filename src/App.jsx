import MenuItems from "./components/MenuItems"
import { menuItems } from "./data/db"

function App() {


  return (
    <div className="">
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid  md:grid-cols-2 ">

        <div className="">
          <h2 className="">Menu</h2>

          {menuItems.map(item => (
            <MenuItems key={item.id} menu={item} />
          ))
          }
        </div>

        <div className="">
          <h2 className="">Consumo</h2>
        </div>


      </main>
    </div>
  )
}

export default App
