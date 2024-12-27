import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyComponent from "../routers/component.tsx";
import { NotFound } from "@/components/NotFound/NotFound.tsx";

export function PublicRoute() {
    const router = createBrowserRouter([
        {
            path: "login",
            element: <>teste</>,
        },
        {
            path: "/*",
            element: <NotFound />,
        },
    ]);

    return <RouterProvider router={router} />;
}
