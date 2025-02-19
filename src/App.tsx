import Routing from "./Navigation/Routing";
import { ToastProvider } from "./notification/ToastProvider";
import { UserProvider } from "./Sign Up/UserContext";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <UserProvider>
          <Routing />
        </UserProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
