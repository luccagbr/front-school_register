import "./App.css";
import { Router } from "./routers/Router";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
    return (
        <AuthContextProvider>
            <Router />
        </AuthContextProvider>
    );
}

export default App;
