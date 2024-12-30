import { Router } from "./routers/Router";
import { AuthContextProvider } from "./contexts/AuthContext";
import { useEffect, useState } from "react";
import { THEME } from "./constants/local-storage";
import { HomePage } from "./components/HomePage";
import { GlobalStyle } from "./styles/global";

function App() {
    const localTheme = localStorage.getItem(window.btoa(THEME)) as "light" | "dark";
    const [theme, setTheme] = useState<"light" | "dark">(localTheme ?? "dark");

    useEffect(() => {
        if (localTheme === undefined) {
            localStorage.setItem(window.btoa(THEME), theme);
        }

        setTheme(localTheme);
    }, [localTheme]);

    return (
        <HomePage>
            <GlobalStyle />
            <AuthContextProvider>
                <Router />
            </AuthContextProvider>
        </HomePage>
    );
}

export default App;
