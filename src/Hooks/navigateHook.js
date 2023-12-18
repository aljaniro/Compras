import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Inicio from '../pages/inicio'
import Producto from '../pages/producto'
import Pago from '../pages/pago'

function NavigateHook() {
  return (
   
   
   <Routes>
    <Route path="/" element={<Inicio></Inicio>} />
    <Route path="/home" element={<Inicio></Inicio>} />
    <Route path="/pago" element={<Pago></Pago>} />
    <Route path='/productos/:id' element={<Producto></Producto>}></Route>

   </Routes>
   
   
  )
}

export default NavigateHook
