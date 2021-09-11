import React from 'react';

export const Formulario = () => {
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
            />

            <label>Nombre Dueño</label>
            <input
               //
               type='text'
               name='propietario'
               className='u-full-width'
               placeholder='Nombre Dueño de la mascota'
            />

            <label>Fecha</label>
            <input
               //
               type='date'
               name='fecha'
               className='u-full-width'
            />

            <label>Hora</label>
            <input
               //
               type='time'
               name='hora'
               className='u-full-width'
            />

            <label>Sintomas</label>
            <textarea
               //
               name='sintomas'
               className='u-full-width'
            ></textarea>

            <button
               //
               type='submit'
               className='u-full-width button-light'
            >
               Agregar Cita
            </button>
         </form>
      </>
   );
};
