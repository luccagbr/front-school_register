import { useAuth } from "@/contexts/AuthContext";
import MyComponent from "./Component";
import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";

type ChildrenInfo = {
    component: string;
    menu: string;
    path: string;
    loader?: string;
    component_error?: string;
    children: ChildrenInfo[];
};

export function PrivateRoute() {
    // const { routes } = useAuth();

    const routeMapping = (params: ChildrenInfo[]): RouteObject[] => {
        let routesFromUser = params.map((route): RouteObject => {
            if (route.children.length) {
                const children = routeMapping(route.children);

                return {
                    path: route.path,
                    element: <MyComponent tag={route.component} />,
                    children: children,
                };
            }

            return {
                path: route.path,
                element: <MyComponent tag={route.component} />,
            };
        });

        return routesFromUser;
    };

    const access_page: ChildrenInfo[] = [
        {
            component: "Home",
            menu: "",
            path: "",
            children: [
                {
                    component: "Dashboard",
                    menu: "",
                    path: "dashboard",
                    children: [
                        {
                            component: "Login",
                            menu: "",
                            path: "login",
                            children: [],
                        },
                    ],
                },
            ],
        },
    ];

    const router = createBrowserRouter([
        ...routeMapping(access_page),
        {
            path: "*",
            element: <div>Não encontrada</div>,
        },
    ]);

    return <RouterProvider router={router} />;
}
