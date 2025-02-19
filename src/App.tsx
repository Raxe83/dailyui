import Routing from "./Navigation/Routing";
import { ToastProvider } from "./notification/ToastProvider";
import { Analytics } from "@vercel/analytics/react";
import { UserProvider } from "./user/UserContext";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <UserProvider>
          <Routing />
          <Analytics />
        </UserProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
