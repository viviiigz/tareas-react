import { useState } from 'react';
import { FirstApp } from './FirstApp.jsx';
import { Login } from './components/Login.jsx';
import { Register } from './components/Register.jsx';

function App() {

  //controlo que pantalla se debe mostrar
  const [mostrarTarea, setMostrarTarea] = useState(''); 
  //estado para el usuario logueado, guardo el email
  const [user, setUser] = useState('');

  //funcion para el login: reecibo el email del componente de login y lo guardo
    const handleLogin = (email) => {
    setUser(email);
  };

  //funcion para el logout: limpio el estado de usuario
    const handleLogout = () => {
    setUser('');
  };
//el logout aparece despues de hacer el login y por eso va en app


  return (
    <div>
      {/* botones para cambiar entre tareas */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setMostrarTarea('tarea1')}> 
          Mostrar Tarea 1
        </button>
        <button onClick={() => setMostrarTarea('tarea2')}>
          Mostrar Tarea 2
        </button>
      </div>

      {/* mostrar una u otra tarea*/}
      {mostrarTarea === 'tarea1' ? ( 
        //si es la tarea 1 mostra el firstapp
        <FirstApp />
      ) : (
        // si no formularios
        <div>
          {/* formularios */}
          <Login onLogin={handleLogin} user={user} onLogout={handleLogout} />
          <Register />
        </div>
      )}
    </div>
  );
}


export default App;