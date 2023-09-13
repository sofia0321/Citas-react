import React from 'react'

const Alerta = ({error, mensaje}) => {
  return (
    <div className=
    {`${error ? 'bg-red-600':'bg-indigo-600'} 
    text-white text-center p-3 uppercase font-bold mb-3 rounded-lg`}>{mensaje}</div>
  )
}

export default Alerta