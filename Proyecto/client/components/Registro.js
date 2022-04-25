import React from 'react'

export default function Registro() {
    
    return (
    <>
    <header className=" bg-slate-400/10 w-full pt-10 rounded-b-3xl">
          <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
            <h1 className=" title">Registrar Nuevo Member</h1>
          </div>
        </header>
        <div className="min-h-screen pt-2 my-16">
          <div className="container mx-auto">
            <div className="inputs w-full max-w-2xl p-6 mx-auto">
              <h2 className="text-2xl text-gray-900">
                {" "}
                Información del nuevo Member:{" "}
              </h2>
              <form className="mt-6 border-t border-gray-400 pt-4">
                <div className="personal w-full">
                  <div className="w-full md:w-full px-3 mb-6">
                    <div className="w-full md:w-full px-3 mb-6">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-text-1"
                      >
                        Dirección de Correo
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        id="grid-text-1"
                        type="text"
                        placeholder="Ingresa el correo"
                        required
                      ></input>
                    </div>
                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nombre(s)
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        type="text"
                        required
                      ></input>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="w-full md:w-1/2 px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Apellido Paterno
                        </label>
                        <input
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          type="text"
                          required
                        ></input>
                      </div>
                      <div className="w-full md:w-1/2 px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Apellido Materno
                        </label>
                        <input
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          type="text"
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Nivel Chapter
                        </label>
                        <div className="flex-shrink w-full inline-block relative">
                          <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                            <option>Elige nivel ...</option>
                            <option>1.1</option>
                            <option>1.2</option>
                            <option>1.3</option>
                            <option>2.1</option>
                            <option>2.2</option>
                            <option>2.2</option>
                            <option>2.3</option>
                            <option>3.1</option>
                            <option>3.2</option>
                            <option>3.2</option>
                            <option>3.3</option>
                            <option>4.1</option>
                            <option>4.2</option>
                            <option>4.3</option>
                            <option>5.1</option>
                            <option>5.2</option>
                            <option>5.3</option>
                          </select>
                          <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Nivel Craft
                        </label>
                        <div className="flex-shrink w-full inline-block relative">
                          <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                            <option>Elige nivel ...</option>
                            <option>1.1</option>
                            <option>1.2</option>
                            <option>1.3</option>
                            <option>2.1</option>
                            <option>2.2</option>
                            <option>2.2</option>
                            <option>2.3</option>
                            <option>3.1</option>
                            <option>3.2</option>
                            <option>3.2</option>
                            <option>3.3</option>
                            <option>4.1</option>
                            <option>4.2</option>
                            <option>4.3</option>
                            <option>5.1</option>
                            <option>5.2</option>
                            <option>5.3</option>
                          </select>
                          <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Nivel Bussiness
                        </label>
                        <div className="flex-shrink w-full inline-block relative">
                          <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                            <option>Elige nivel ...</option>
                            <option>1.1</option>
                            <option>1.2</option>
                            <option>1.3</option>
                            <option>2.1</option>
                            <option>2.2</option>
                            <option>2.2</option>
                            <option>2.3</option>
                            <option>3.1</option>
                            <option>3.2</option>
                            <option>3.2</option>
                            <option>3.3</option>
                            <option>4.1</option>
                            <option>4.2</option>
                            <option>4.3</option>
                            <option>5.1</option>
                            <option>5.2</option>
                            <option>5.3</option>
                          </select>
                          <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Nivel People
                        </label>
                        <div className="flex-shrink w-full inline-block relative">
                          <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                            <option>Elige nivel ...</option>
                            <option>1.1</option>
                            <option>1.2</option>
                            <option>1.3</option>
                            <option>2.1</option>
                            <option>2.2</option>
                            <option>2.2</option>
                            <option>2.3</option>
                            <option>3.1</option>
                            <option>3.2</option>
                            <option>3.2</option>
                            <option>3.3</option>
                            <option>4.1</option>
                            <option>4.2</option>
                            <option>4.3</option>
                            <option>5.1</option>
                            <option>5.2</option>
                            <option>5.3</option>
                          </select>
                          <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-full px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Equipo del Member
                      </label>
                      <div className="flex-shrink w-full inline-block relative">
                        <input
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                          id="grid-text-1"
                          type="text"
                          placeholder="Ingrese el nombre del Equipo"
                          required
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                      type="submit"
                    >
                      Terminar con el Registro
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}
