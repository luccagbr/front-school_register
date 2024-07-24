import { Box } from "@/styles/box";
import { Modal } from "@/styles/modal";
import { useState } from "react";

export function Login() {
    const [isStatusModal, setIsStatusModal] = useState(false);

    return (
        <div style={{ display: "flex", border: "1px solid blue", flexDirection: "column" }}>
            <Box style={{ border: "1px solid pink" }} onClick={() => setIsStatusModal((prev) => !prev)}>
                Teste
            </Box>

            <Modal open={isStatusModal}>Teste</Modal>
        </div>
    );
}
