import { PeopleInfo } from "@/types/user.type";
import { FC, createContext, useContext, useState } from "react";

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
    saveRoutes: (params: IRoutes[]) => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider: FC<Props> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [routes, setRoutes] = useState<IRoutes[]>([]);

    const saveRoutes = (params: IRoutes[]) => {
        setRoutes(params);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                routes,
                saveRoutes,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
