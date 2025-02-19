import Routing from "./Navigation/Routing";
import { ToastProvider } from "./notification/ToastProvider";
import { UserProvider } from "./user/UserContext";
import CookieConsent from "./Components/privacy/CookieConsent";
import { CookieProvider } from "./Components/privacy/CookieProvider";

function App() {
  return (
    <div className="App">
      <CookieProvider>
        <ToastProvider>
          <UserProvider>
            <Routing />
            <CookieConsent />
          </UserProvider>
        </ToastProvider>
      </CookieProvider>
    </div>
  );
}

export default App;
