import Routing from "./Navigation/Routing";
import { ToastProvider } from "./notification/ToastProvider";
import { Analytics } from "@vercel/analytics/react";
import { UserProvider } from "./user/UserContext";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <UserProvider>
          <Routing />
          <Analytics />
          <SpeedInsights />
        </UserProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
