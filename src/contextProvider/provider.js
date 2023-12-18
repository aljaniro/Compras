import { Contesto } from "./context";
import React, { useReducer, useState } from "react";
import { FecthHook } from "../Hooks/fecthHook";
export const ProductData = ({ children }) => {
  const { data, isloading, error, setdatos, ayu } = FecthHook(
    "https://fakestoreapi.com/products"
  );

  const init = [];
  const first = (state, action) => {
    switch (action.type) {
      case "aumentar":
        console.log("hola");
        console.log(state);
        return state.map((valor) =>
          action.payload.title === valor.title
            ? { ...valor, cantidad: valor.cantidad + 1 }
            : valor
        );

      case "restar":
        console.log("hola");
        console.log(state);

        return state.map((valor) =>
          action.payload.title === valor.title && valor.cantidad > 0
            ? { ...valor, cantidad: valor.cantidad - 1 }
            : // ? { ...valor, cantidad: valor.cantidad - 1 }
              valor
        );

      case "agregar":
        console.log("estoy probando", action.payload);
        const fil = state.filter(
          (valor) => action.payload.title === valor.title
        );
        if (fil.length === 0) {
          console.log(fil.length);
          return [
            ...state,
            {
              title: action.payload.title,
              category: action.payload.category,
              description: action.payload.description,
              image: action.payload.image,
              price: action.payload.price,
              cantidad: 1,
            },
          ];
        } else {
          console.log(state);
          return state.map((valor) =>
            action.payload.title === valor.title
              ? { ...valor, cantidad: valor.cantidad + 1 }
              : valor
          );
        }

      case "pagar":
        return [];

      case "eliminar":
        return state.filter((val) => val.title !== action.payload.title);
      default:
        return state;
    }
  };
  const [productos, dispatch] = useReducer(first, init);
  const [val, setval] = useState(0);
  const [can, setcan] = useState(0);
  return (
    <Contesto.Provider
      value={{
        data,
        isloading,
        error,
        setdatos,
        productos,
        dispatch,
        ayu,
        val,
        setval,can, setcan
      }}
    >
      {children}
    </Contesto.Provider>
  );
};
