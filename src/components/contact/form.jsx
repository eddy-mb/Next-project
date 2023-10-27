"use client";

import { useRef, useState } from "react";
import { userCreate } from "@/api/apiForm";
import { useForm } from "react-hook-form";

export default function FormContact() {
  const form = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const sendData = async (data) => {
    const response = await userCreate(data);
    try {
      if (response.status === 200) {
        confirm("Mensaje enviado exitosamente!");
      } else if (response.status === 500) {
        alert("Ocurrio un problema al enviar, intente de nuevo!");
      }
    } catch (error) {
      alert("Error en la solicitud, intentelo mas tarde! ");
    }
    form.current.reset();
  };

  return (
    <div className="space-y-4 shadow-my shadow-[#ffa726] p-8 rounded-lg md:w-[400px] md:hidden">
      <h2 className=" text-center">Formulario de contacto</h2>

      <form
        onSubmit={handleSubmit(sendData)}
        className="flex flex-col w-full"
        ref={form}>
        <label
          htmlFor="name"
          className="my-2">
          Nombre y Apellidos *
        </label>
        <input
          {...register("user_name", {
            required: { value: true, message: "El Nombre es requerido" },
          })}
          className="bg-transparent p-1 border-b border-[#ffa726]/50"
          type="text"
          id="name"
          placeholder="Introduce tu nombre"
        />
        {errors.user_name && (
          <span className="text-red-400 text-sm">
            {errors.user_name.message}
          </span>
        )}

        <label
          htmlFor="email"
          className="my-2">
          Correo Electrónico *
        </label>
        <input
          {...register("user_email", {
            required: {
              value: true,
              message: "El correo electronico es requerido",
            },
          })}
          type="email"
          className="bg-transparent border-b p-1 border-[#ffa726]/50"
          id="email"
          name="user_email"
          placeholder="Introduce tu correo electronico"
        />
        {errors.user_email && (
          <span className="text-red-400 text-sm">
            {errors.user_email.message}{" "}
          </span>
        )}

        <label
          htmlFor="mensaje"
          className="my-2">
          Mensaje *
        </label>
        <textarea
          {...register("user_message", { required: true })}
          className="bg-white/10 rounded border border-[#ffa726]/50 p-2"
          name="user_message"
          id="mensaje"
          cols="30"
          rows="10"
          placeholder="Ingrese su mensaje"></textarea>
        {errors.user_message && (
          <span className="text-red-400 text-sm">El memsaje es requerido</span>
        )}
        <button
          type="submit"
          className="w-min py-2 mt-6 px-12 rounded-full  place-self-center hover:cursor-pointer hover:shadow-md hover:shadow-[#ffa726] border border-[#ffa726]">
          Enviar
        </button>
      </form>
    </div>
  );
}
