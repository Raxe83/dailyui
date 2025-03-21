import { ToastProvider } from "./notification/ToastProvider";
import { UserProvider } from "./user/UserContext";
import CookieConsent from "./Components/privacy/CookieConsent";
import { CookieProvider } from "./Components/privacy/CookieProvider";
import Layout from "./Components/Layout";

function App() {
  return (
    <div className="App">
      <CookieProvider>
        <ToastProvider>
          <UserProvider>
            <Layout />
            <CookieConsent />
          </UserProvider>
        </ToastProvider>
      </CookieProvider>
    </div>
  );
}

export default App;
