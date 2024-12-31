import { useAuth } from "@/contexts/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useState } from "react";
import { HomePage } from "@/components/HomePage";

export function Router() {
    const { user } = useAuth();
    const [isConnected, setIsConnected] = useState<Boolean>(false);

    return <HomePage>{isConnected ? <PrivateRoute /> : <PublicRoute />}</HomePage>;
}
