import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import { useEffect, useState } from "react"

function App() {

  const[pacientes, setPacientes]= useState(
    JSON.parse(localStorage.getItem("pacientes"))|| []
    )
  
  const guardar =()=>{
    localStorage.setItem("pacientes",JSON.stringify(pacientes)) 
  }

  useEffect(()=>{
    guardar()
  },[pacientes])

  /*const borrarLocal =()=>{ 
    localStorage.clear("")

   }*/

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes}  setPacientes={setPacientes}/>
        <ListadoPacientes pacientes={pacientes} setPacientes={setPacientes} />
      </div>

    </div>
  )
}

export default App
