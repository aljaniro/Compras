import React from "react";

function Seccion() {
  return (
    <div className="mt-32 container text-red-900 mx-auto">
      <h1 className=" font-bold text-4xl ">Conocenos</h1>
      <div className="container mt-8 w-full mx-auto   text-white grid md:grid-cols-3 sm:grid-cols-1 gap-4 w-full h-96 gap-2 text-black font-bold justify-center">
        <div className="basis-1/3   font-bold ">
          <img
            src="https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_1280.jpg"
            alt=""
            className="h-64"
          ></img>
          <h1 className="text-2xl text-red-900">Gerente</h1>
        </div>
        <div className="basis-1/3   font-bold">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg"
            alt=""
            className="h-64  "
          ></img>
          <h1 className="text-2xl text-red-900">Equipo de Marketing</h1>
        </div>
        <div className="basis-1/4  font-bold">
          <img
            src="https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_1280.jpg"
            alt=""
            className="h-64  "
          ></img>
          <h1 className="text-2xl text-red-900">Ventas</h1>
        </div>
      </div>
    </div>
  );
}

export default Seccion;
