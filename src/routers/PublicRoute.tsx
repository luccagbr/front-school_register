import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyComponent from "./Component.jsx";
import { NotFound } from "@/components/NotFound.tsx";

export function PublicRoute() {
    const router = createBrowserRouter([
        {
            path: "login",
            element: <MyComponent tag='Login' />,
        },
        {
            path: "/*",
            element: <NotFound />,
        },
    ]);

    return <RouterProvider router={router} />;
}
