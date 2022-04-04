import React from 'react'

export default function DatosEmpleado({label, value}) {
  


  return (
    <>
    
    <div>DatosEmpleado</div>
    <div className="flex space-x-5 flex-row w-full mx-auto mt-9 px-6 py-4 bg-slate-500/10 rounded-lg">
    <label>
      {label}
    </label>
    <p> {value} </p>
    </div>
    </>
  )
}
