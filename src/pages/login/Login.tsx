import { Box } from "@/styles/box";
import { Modal } from "@/styles/modal";
import { useState } from "react";

export function Login() {
    const [isStatusModal, setIsStatusModal] = useState(false);

    return (
        <>
            <div style={{ height: "100%", border: "1px solid red", width: "100%", position: "relative" }}>
                <Box style={{ border: "1px solid pink" }} onClick={() => setIsStatusModal((prev) => !prev)}>
                    Teste
                </Box>
            </div>

            <Modal open={isStatusModal}>Teste</Modal>
        </>
    );
}
