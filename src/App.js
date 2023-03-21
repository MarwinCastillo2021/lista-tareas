import './App.css';
import reactLogo from './logo.svg';
/*import Tarea from './componentes/Tarea.jsx';
import TareaFormulario from './componentes/TareaFormulario';*/
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>

        <img src={reactLogo} 
        className='react-logo' />

      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        {/*<TareaFormulario />*/}
        {/*<Tarea texto='Aprender React' />*/}
        <ListaDeTareas />  
      </div>
      
    </div>
  );
}

export default App;
