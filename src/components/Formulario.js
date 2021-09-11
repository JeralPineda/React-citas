import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Formulario = ({ crearCita }) => {
   // Crear state de citas
   const [cita, actualizarCita] = useState({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
   });

   const [error, actualizarError] = useState(false);

   //    Funcion que se ejecuta cada que el usuario escribe en un input
   const actualizarState = (e) => {
      actualizarCita({
         ...cita,
         [e.target.name]: e.target.value,
      });
   };

   //    Extrae los valores
   const { mascota, propietario, fecha, hora, sintomas } = cita;

   //    cuando el usuario presiona agregar cita
   const submitCita = (e) => {
      e.preventDefault();

      //   validar
      if (!mascota.trim() || !propietario.trim() || !fecha.trim() || !hora.trim() || !sintomas.trim()) {
         actualizarError(true);

         //   eliminar error cuando ya esten completos los campos
         setInterval(() => {
            actualizarError(false);
         }, 6000);

         return;
      }

      //   eliminar error cuando ya esten completos los campos
      //   actualizarError(false);

      // Asignar un ID
      cita.id = uuidv4();

      // Crear la cita
      crearCita(cita);

      // Reiniciar el form
      actualizarCita({
         mascota: '',
         propietario: '',
         fecha: '',
         hora: '',
         sintomas: '',
      });
   };

   return (
      <>
         <h2>Crear Cita</h2>

         {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}

         <form onSubmit={submitCita}>
            <label>Nombre Mascota</label>
            <input
               //
               type='text'
               name='mascota'
               className='u-full-width'
               placeholder='Nombre Mascota'
               value={mascota}
               onChange={actualizarState}
            />

            <label>Nombre Dueño</label>
            <input
               //
               type='text'
               name='propietario'
               className='u-full-width'
               placeholder='Nombre Dueño de la mascota'
               value={propietario}
               onChange={actualizarState}
            />

            <label>Fecha</label>
            <input
               //
               type='date'
               name='fecha'
               className='u-full-width'
               value={fecha}
               onChange={actualizarState}
            />

            <label>Hora</label>
            <input
               //
               type='time'
               name='hora'
               className='u-full-width'
               value={hora}
               onChange={actualizarState}
            />

            <label>Sintomas</label>
            <textarea
               //
               name='sintomas'
               className='u-full-width'
               value={sintomas}
               onChange={actualizarState}
            ></textarea>

            <button
               //
               type='submit'
               className='u-full-width button'
            >
               Agregar Cita
            </button>
         </form>
      </>
   );
};
