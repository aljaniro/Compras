import './App.css';
import Navbar from './Componentes/navbar';
import NavigateHook from './Hooks/navigateHook';
import Inicio from './pages/inicio';

function App() {
  return (
    
    <div className="App">
      <Navbar></Navbar>
     <NavigateHook></NavigateHook>
    </div>
  );
}

export default App;
