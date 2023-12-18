import React, { useContext, useState } from "react";
import { Contesto } from "../contextProvider/context";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
function Pago() {
  const { productos, dispatch, val, setval,can, setcan } = useContext(Contesto);
  
  console.log(can);
  console.log(productos, "prueba");
  console.log(val);
  return (
   <div>
    <h1 className="font-bold text-4xl mt-16">FACTURACIÓN</h1>
    {productos.length > 0 ? 
    <div className="container  m-auto mt-32   rounded overflow-hidden shadow-lg w-full h-full grid md:grid-cols-2 sm:grid-cols-1 gap-8 justify-center items-center">
    {productos.map((dato) => {
      return (
        <>
          <div className="justify-center items-center mb-8">
            <img
              src={dato.image}
              alt=""
              className=" justify-center items-center w-auto "
            />
          </div>
          <div className="text-center  px-6 pt-1 pb-6  mt-16">
            <p className="text-2xl font-bold">{dato.title}</p>
            <p className="text-md">{dato.description}</p>
            <p>
              {dato.price} x {dato.cantidad} = {dato.price * dato.cantidad}
            </p>
            <button
              class="rounded bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-32 text-xl"
              onClick={() => {
                setcan(can+1)
                dispatch({
                  type: "aumentar",
                  payload: { title: dato.title },
                });
                setval(val + dato.price);
                console.log(can);
              }}
            >
              <FiPlusCircle className="m-auto" />
            </button>
            <button
              class="rounded bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-32 ml-4 text-xl"
              onClick={() => {
                setval(val - dato.price);
                setcan(can-1)
                dispatch({
                  type: "restar",
                  payload: { title: dato.title },
                });
                setcan(can - 1);
                console.log(can);
              }}
            >
             <FiMinusCircle className="m-auto" />
            </button>
            <button
              class="rounded justify-center items-center bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded w-32 ml-4 text-xl"
              onClick={() => {
                setval(val - dato.price*dato.cantidad);
                setcan(can-dato.cantidad)
                dispatch({
                  type: "eliminar",
                  payload: { title: dato.title },
                });
                
                console.log(can);
              }}
            >
             <RiDeleteBin6Line className="m-auto" />
            </button>
          </div>
        </>
      );
    })}
   
  </div>
    :
    <p className="text-4xl mt-16">POR FAVOR INGRESE SUS PRODUCTOS</p>
  }
     
    <div className="flex flex-row  mt-4">
      <h1 className="text-2xl text-cyan-800 text-right mb-8 basis-1/2">
        TOTAL A PAGAR 
      </h1>
      <button class=" basis-1/3 mb-8 ml-8 mr-16  bg-sky-600 hover:bg-sky-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      onClick={()=>{
        setval(0)
        setcan(0)
        dispatch({
          type:"pagar"
        })
     
      }}>
      {val.toFixed(3)}
      </button>
      
      </div>
     
   </div>
  );
}

export default Pago;
