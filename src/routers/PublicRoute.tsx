import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyComponent from "../routers/component.tsx";
import { Login } from "@/pages/login/Login";
import { NotFound } from "@/components/NotFound/NotFound.tsx";
import { InfoLogin } from "@/components/Login/InfoLogin.tsx";
import { BaseLayoutPublic } from "@/components/BaseLayoutPublic/BaseLayoutPublic.tsx";

export function PublicRoute() {
    const router = createBrowserRouter([
        {
            path: "",
            element: <BaseLayoutPublic />,
            children: [
                {
                    path: "/login",
                    element: <Login />,
                    children: [
                        {
                            index: true,
                            element: <InfoLogin />,
                        },
                    ],
                },
            ],
        },
        {
            path: "/*",
            element: <NotFound />,
        },
    ]);

    return <RouterProvider router={router} />;
}
