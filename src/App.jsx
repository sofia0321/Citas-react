import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import { useState } from "react"

function App() {

  const[pacientes, setPacientes]= useState(
    [
      {
      nombre: " lll", 
      propietario: " hhh",
      email:" huhhu",
      fecha: " uidhuisdhuidhui",
      sintomas:" kjsuisui"
      }
    ]
    )

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes}  setPacientes={setPacientes}/>
        <ListadoPacientes pacientes={pacientes} />
      </div>

    </div>
  )
}

export default App
