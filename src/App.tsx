import { Router } from "./routers/Router";
import { AuthContextProvider } from "./contexts/AuthContext";
import { GlobalStyle } from "./styles/global";

function App() {
    return (
        <>
            <GlobalStyle />
            <AuthContextProvider>
                <Router />
            </AuthContextProvider>
        </>
    );
}

export default App;
