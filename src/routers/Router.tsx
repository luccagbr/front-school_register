import { useAuth } from "@/contexts/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { BaseLayout } from "@/styles/base-layout";

export function Router() {
    const { user } = useAuth();
    const isConnected = false;

    return <BaseLayout>{isConnected ? <PrivateRoute /> : <PublicRoute />}</BaseLayout>;
}
