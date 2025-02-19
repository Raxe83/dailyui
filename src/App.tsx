import Routing from "./Navigation/Routing";
import { ToastProvider } from "./notification/ToastProvider";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <ToastProvider>
          <Routing />
          <Analytics />
      </ToastProvider>
    </div>
  );
}

export default App;
