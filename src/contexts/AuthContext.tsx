import DarkTheme from "@/themes/dark-theme";
import LightTheme from "@/themes/light-theme";
import { PeopleInfo } from "@/types/user.type";
import { FC, createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

interface Props {
    children: React.ReactNode;
}

interface IAccessPage {
    id_page: number;
    name: string;
    component: string;
    route: string;
    access_pages: IAccessPage[];
}

interface IRoutes {
    id_menu: number;
    name_menu: string;
    route_menu: string;
    access_pages: IAccessPage[];
}

interface IUser {
    id: number;
    is_first_password: boolean;
    people: PeopleInfo;
}

type AuthContextType = {
    user: IUser | null;
    routes: IRoutes[];
    theme: string;
    changeTheme: () => void;
    saveRoutes: (params: IRoutes[]) => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider: FC<Props> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [routes, setRoutes] = useState<IRoutes[]>([]);
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    const saveRoutes = (params: IRoutes[]) => {
        setRoutes(params);
    };

    const changeTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                routes,
                theme,
                saveRoutes,
                changeTheme,
            }}>
            <ThemeProvider theme={theme === "dark" ? DarkTheme : LightTheme}>{children}</ThemeProvider>
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
