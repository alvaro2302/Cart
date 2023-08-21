import './App.css';
import { ShoppingCartProvider } from './Context';
import Home from './Pages/Home';
function App() {
  return (
    <ShoppingCartProvider>
    
      <Home/>
    
    </ShoppingCartProvider>
  );
}

export default App;
