import { Outlet } from "react-router-dom";

export function Dashboard() {
    return (
        <>
            <div style={{ width: "100%", height: "200px" }}>Teste</div>
            <Outlet />
        </>
    );
}
