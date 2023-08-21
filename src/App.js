import './App.css';
import Home from './Pages/Home';
import { ShoppingCartProvider } from './Context';
function App() {
  return (
    <ShoppingCartProvider>
    
      <Home/>
    
    </ShoppingCartProvider>
  );
}

export default App;
