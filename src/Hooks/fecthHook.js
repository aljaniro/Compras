import { useState, useCallback, useEffect } from "react";

export function FecthHook(url) {
  const [datos, setdatos] = useState({
    data: null,
    isloading: true,
    error: null,
  });
  const [ayu,setayu]= useState()
  const { data, isloading, error } = datos;

  const cargar = useCallback(async () => {
    if (!url) return;
    try {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      setayu(data)
      setdatos({ data, isloading: false, error: null });
    } catch (error) {
      console.log(error);
      setdatos({ data: null, isloading: false, error: error });
    }
  }, [url]);

  useEffect(() => {
    cargar();
  }, [cargar, url]);

  return {
    data,
    isloading,
    error,
    setdatos,
    cargar,
    ayu
  };
}
