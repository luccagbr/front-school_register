import { BaseLayout } from "@/styles/base-layout";
import { Box } from "@/styles/box";
import { Container } from "@/styles/container";
import { Outlet } from "react-router-dom";

export function BaseLayoutPublic() {
    return (
        <BaseLayout>
            Teste
            <Outlet />
        </BaseLayout>
    );
}
