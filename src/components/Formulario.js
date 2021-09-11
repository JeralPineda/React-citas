import React, { useState } from 'react';

export const Formulario = () => {
   // Crear state de citas
   const [cita, actualizarCita] = useState({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
   });

   const actualizarState = () => {
      console.log('Escribiendo');
   };

   return (
      <>
         <h2>Crear Cita</h2>

         <form>
            <label>Nombre Mascota</label>
            <input
               //
               type='text'
               name='mascota'
               className='u-full-width'
               placeholder='Nombre Mascota'
               value={cita.macota}
               onChange={actualizarState}
            />

            <label>Nombre Dueño</label>
            <input
               //
               type='text'
               name='propietario'
               className='u-full-width'
               placeholder='Nombre Dueño de la mascota'
               onChange={actualizarState}
            />

            <label>Fecha</label>
            <input
               //
               type='date'
               name='fecha'
               className='u-full-width'
               onChange={actualizarState}
            />

            <label>Hora</label>
            <input
               //
               type='time'
               name='hora'
               className='u-full-width'
               onChange={actualizarState}
            />

            <label>Sintomas</label>
            <textarea
               //
               name='sintomas'
               className='u-full-width'
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
