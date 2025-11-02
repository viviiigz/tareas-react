import { useState } from 'react';
import { FirstApp } from './FirstApp.jsx';
import { Login } from '../components/Login.jsx';
import { Register } from '../components/Register.jsx';
import { MultipleCustomHooks } from './MultipleCustomHooks.jsx';

function App() {

  //controlo que pantalla se debe mostrar
  const [mostrarTarea, setMostrarTarea] = useState('tarea1'); 
  //estado para el usuario logueado, guardo el email
  const [user, setUser] = useState(''); //el profe uso userForm

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
        <button onClick={() => setMostrarTarea('tarea3')}>
          Mostrar Tarea 3
        </button>
      </div>

      {/* mostrar una u otra tarea*/}
      {mostrarTarea === 'tarea1' ? ( 
        //si es la tarea 1 mostra el firstapp
        <FirstApp />
      ) : mostrarTarea === 'tarea2' ? (
        //si es la tarea 2 mostrar login y register
        <div>
          <Login onLogin={handleLogin} user={user} onLogout={handleLogout} />
          <Register />
        </div>
      ) : (
        // si es la tarea 3 mostrar multiple custom hooks
        <div>
          <MultipleCustomHooks />
        </div>
      )}
    </div>
  );
}


export default App;