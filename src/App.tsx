import Routing from "./Navigation/Routing";
import { ToastProvider } from "./notification/ToastProvider";

function App() {
  return (
    <div className="App">
      <ToastProvider>
          <Routing />
      </ToastProvider>
    </div>
  );
}

export default App;
