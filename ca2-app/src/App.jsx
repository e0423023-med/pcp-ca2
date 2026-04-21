import { AppProvider } from "./context/Appcontext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AppProvider> 
      <AppRouter />
    </AppProvider>
    
  );
}

export default App;