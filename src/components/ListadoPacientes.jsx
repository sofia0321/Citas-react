import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPacientes, paciente, setPaciente, setEditando }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>

            {
                pacientes.length === 0 ?
                    <div className="bg-red-500  p-3 text-center mt-2 ml-5">
                        <p className="text-white text-xl uppercase ">AÚN NO HAY PACIENTES REGISTRADOS </p>
                    </div> :

                    pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente} //los tres puntos indica que obtiene una copia de toda la info
                            pacientes={pacientes}
                            setPaciente={setPaciente}
                            setPacientes={setPacientes}
                            setEditando={setEditando}


                        />
                    ))
            }

        </div>

    )
}

export default ListadoPacientes;