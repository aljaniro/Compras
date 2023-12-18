import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Contesto } from "../contextProvider/context";
import "../styles/producto.css";

function Producto() {
  const { id } = useParams();
  const { data, ayu, dispatch,productos,val,setval,can, setcan } = useContext(Contesto);
  const dato = ayu.filter((val) => val.id == id);
  const navigate = useNavigate();
  
  console.log(productos)
  return (
    <div className="container  m-auto mt-32  rounded overflow-hidden shadow-lg w-full h-full grid md:grid-cols-2 sm:grid-cols-1 gap-8 justify-center items-center">
      <div className="justify-center items-center ">
        <img
          src={dato[0].image}
          alt=""
          className=" justify-center items-center w-auto "
        />
      </div>
      <div className="text-center  px-6 pt-1 pb-6  mt-16">
        <p className="text-2xl font-bold">{dato[0].title}</p>
        <p className="text-md">{dato[0].description}</p>
        
       
        <div>
          <button
            class="rounded bg-lime-600 hover:bg-lime-900 text-white font-bold py-2 px-4 rounded w-32 text-xl mt-4"
            onClick={() => {
               console.log(can)
              setcan(can+1)
              setval(val+dato[0].price)
              dispatch({
                type: "agregar",
                payload: {
                  id:dato[0].id,
                  title: dato[0].title,
                  category: dato[0].category,
                  description: dato[0].description,
                  image: dato[0].image,
                  cantidad: 1,
                  price:dato[0].price
                },
              });
              navigate("/pago");
            }}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Producto;
