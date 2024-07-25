import { ComponentProps } from "react";

export interface PortalProps extends ComponentProps<"dialog"> {}

export function Portal(props: PortalProps) {
    return <dialog {...props} />;
}
