import React, { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FecthHook } from "../Hooks/fecthHook";
import { Contesto } from "../contextProvider/context";
import "../styles/lista.css";

import { ProductData } from "../contextProvider/provider";
function Home() {
  const {
    data,
    isloading,
    error,
    setdatos,

    productos,
    dispatch,

    ayu,
  } = useContext(Contesto);
  console.log(data);
  let auxi = data;
  let [aux, setaux] = useState(auxi);
  const nave = useNavigate();
  useEffect(() => {}, []);
  console.log(aux);
  console.log(data);
  console.log(auxi);
  console.log(productos);
  console.log(ayu);

  return (
    <div className="container mx-auto mt-16 text-red-900 font-bold">
      {console.log(productos)}
      {console.log(aux)}

      <h1 className=" text-4xl">LISTA DE PRODUCTOS</h1>
      <div className="botones flex flex-row flex-wrap justify-center items-center">
        <button
          class="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 w-auto"
          onClick={() => {
            setdatos({ data: ayu });
          }}
        >
          All
        </button>
        <button
          class="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 w-auto"
          onClick={() => {
            const dat = ayu.filter((val) => val.category == "men's clothing");
            dispatch({
              type: "filtro",
              title: "men's clothing",
            });

            setdatos({ data: dat });
          }}
        >
          men's clothing
        </button>
        <button
          class="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 w-auto"
          onClick={() => {
            console.log(aux);

            const dat = ayu.filter((val) => val.category == "jewelery");
            setdatos({ data: dat });
          }}
        >
          jewelery
        </button>
        <button
          class="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 w-auto"
          onClick={() => {
            const dat = ayu.filter((val) => val.category == "electronics");
            setdatos({ data: dat });
          }}
        >
          electronics
        </button>
        <button
          class="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 w-auto"
          onClick={() => {
            console.log(aux);
            const dat = ayu.filter((val) => val.category == "women's clothing");
            setdatos({ data: dat });
          }}
        >
          women's clothing
        </button>
      </div>
      {isloading ? (
        <h1>Cargando data</h1>
      ) : error ? (
        <h1>Existe un error {error}</h1>
      ) : (
        <div
          className="grid lg:grid-cols-3 md:grid-cols-3   gap-4 justify-center items-center sm:grid-cols-2 w-full"
          style={{}}
        >
          {auxi.map((item, index) => {
            return (
              <>
                <div
                  className=" rounded overflow-hidden shadow-lg mt-6 bg-fixed bg-white justify-center items-center"
                  key={index}
                >
                  <div className="w-full">
                    <img src={item.image} alt="" className="h-72 w-auto md:w-auto" />
                  </div>

                  <div className="px-6 py-4 h-6">
                    <div className="font-bold text-lg mb-2">{item.title}</div>
                  </div>
                  <div className="px-6 pt-1 pb-6 font-bold mt-16">
                    <h4>Precio : {item.price}</h4>
                    <h4>Rate : {item.rating.rate}</h4>
                    <h4>Cantidad : {item.rating.count} </h4>
                    <div className="botones mt-6">
                      <button
                        class="bg-cyan-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32"
                        onClick={() => {
                          nave(`/productos/${item.id}`, { replace: true });
                        }}
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
