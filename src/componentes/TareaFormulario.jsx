import React, { useState } from "react";
import '../style-sheets/TareaFormulario.css';
import { v4 as uuidv4} from 'uuid'; 

function TareaFormulario(props) {
  
  const[input, setInput] = useState('');
  
  const manejarCambio = e =>{
    setInput(e.target.value);
    
  }
  
  const manejarEnvio = e =>{
    e.preventDefault(); //evita que se cargue todo el formulario al momento del envío
   
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completado: false
    }

    props.onSubmit(tareaNueva);
  }
  
  return(
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}
    >
      <input 
        className='tarea-input'
        type='text'
        placeholder='Ingresa una Tarea'
        name='texto'
        onChange = {manejarCambio}
      />
      <button className='tarea-boton'>Agregar Tarea</button>

    </form>
  );
}

export default TareaFormulario;