import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyComponent from "../routers/component.tsx";
import { Login } from "@/pages/login/Login";
import { NotFound } from "@/components/NotFound/NotFound.tsx";

export function PublicRoute() {
    const router = createBrowserRouter([
        {
            path: "/login",
            element: <Login />,
            children: [
                {
                    path: "teste",
                    element: <>Login teste</>,
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
