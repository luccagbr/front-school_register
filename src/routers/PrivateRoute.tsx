import { useAuth } from "@/contexts/AuthContext";
import MyComponent from "../routers/component";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

type ChildrenInfo = {
    component: string;
    menu: string;
    path: string;
    children: ChildrenInfo[];
};

export function PrivateRoute() {
    // const { routes } = useAuth();

    const routeMapping = (params: ChildrenInfo[]) => {
        let routesFromUser = params.map((route) => {
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
                            path: "",
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
