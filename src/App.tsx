import { Router } from "./routers/Router";
import { AuthContextProvider } from "./contexts/AuthContext";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import DarkTheme from "./themes/dark-theme";
import LightTheme from "./themes/light-theme";

function App() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    return (
        <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
            <GlobalStyle />
            <AuthContextProvider>
                <Router />
            </AuthContextProvider>
        </ThemeProvider>
    );
}

export default App;
