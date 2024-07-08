import { useAuth } from "@/contexts/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import DarkTheme from "@/themes/dark-theme";
import LightTheme from "@/themes/light-theme";
import { BaseLayout } from "@/styles/base-layout";

export function Router() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    const { user } = useAuth();
    const isConnected = false;

    return (
        <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>
            <BaseLayout>{isConnected ? <PrivateRoute /> : <PublicRoute />}</BaseLayout>
        </ThemeProvider>
    );
}
