import React from 'react'
import '../styles/encabezado.css'
function Head() {
  return (
    <div className='inicio   w-full md:h-96 bg-white flex md:flex-row flex-wrap sm:h-full sm:flex-col' >
      <div className='md:basis-1/2 sm:basis-1 w-auto py-9 px-9 text-4xl text-white font-bold '>

      <p>Creada para las personas.</p>
        <p className="text-amber-400">Diseñada para la productividad.</p>
        <p className="text-xl">
          Compra los mejores productos al precio indicado, aprovecha las mejores
          ofertas para crear el mercado de tus sueño. Disfruta y descubre con 
          nosotros diversidad de productos.
        </p>
        <button class="bg-white text-black text-base rounded-full px-4 py-4 mt-4 md:w-96 sm:w-56 hover:bg-amber-400">
          REGISTRARSE
        </button>
        <p className="text-sm mt-4">
          Registrese y reciba todas nuestras promociones.
        </p>
      </div>
      <div className='md:basis-1/2 sm:basis-1 w-full py-9 px-9 text-4xl text-white font-bold '>

      <img src="https://cdn.pixabay.com/photo/2020/08/06/12/28/woman-5467838_1280.jpg" alt='' className='rounded'></img>
      </div>
    </div>
  )
}

export default Head
