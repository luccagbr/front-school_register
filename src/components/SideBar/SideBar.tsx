import { useState } from "react";

type SideBarProps = {
    children: React.ReactNode;
};

export function SideBar({ children }: SideBarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav
                style={{
                    position: "fixed",
                    left: 0,
                    width: "70px",
                    height: "100vh",
                    border: "1px solid #D1D1D1",
                    padding: "20px 0 10px 0",
                }}>
                <ol
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "40px",
                    }}>
                    <li style={{ marginBottom: "15px" }}>
                        <button>
                            <img src='/src/assets/Group 2844.png' alt='Teste' width='25px' />
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src='/src/assets/apps.svg' alt='Teste' width='20px' />
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src='/src/assets/document.svg' alt='Teste' width='20px' />
                        </button>
                    </li>
                    <li>
                        <img src='/src/assets/chart-histogram.svg' alt='Teste' width='20px' />
                    </li>
                    <li>
                        <button>
                            <img src='/src/assets/apps.svg' alt='Teste' width='20px' />
                        </button>
                    </li>
                </ol>
            </nav>

            <div style={{ display: "flex", height: "'100vh", paddingLeft: "70px" }}>{children}</div>
        </>
    );
}
