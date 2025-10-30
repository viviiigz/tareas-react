import { useState } from 'react';
import { FirstApp } from './FirstApp.jsx';
import { Login } from './components/Login.jsx';
import { Register } from './components/Register.jsx';

function App() {
  const [mostrarTarea, setMostrarTarea] = useState('tarea1');  // 'tarea1' o 'tarea2'

  return (
    <div>
      {/* Botones para cambiar entre tareas */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setMostrarTarea('tarea1')}> 
          Mostrar Tarea 1
        </button>
        <button onClick={() => setMostrarTarea('tarea2')}>
          Mostrar Tarea 2
        </button>
      </div>

      {/* Mostrar una u otra */}
      {mostrarTarea === 'tarea1' ? (
        <FirstApp />
      ) : (
        <div>
          <Login />
          <Register />
        </div>
      )}
    </div>
  );
}

export default App;