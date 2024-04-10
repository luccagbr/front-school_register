import { useState } from "react";
import { Button } from "../ui/button";
import AppIcon from "../../assets/apps.svg?react";
import DocumentIcon from "../../assets/document.svg?react";
import DashboardIcon from "../../assets/chart-histogram.svg?react";

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
                        <a href='#'>
                            <img src='/src/assets/Group 2844.png' alt='Teste' width='25px' />
                        </a>
                    </li>
                    <li>
                        <Button>
                            <AppIcon fill='white' width='20px' height='20px' />
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <DocumentIcon fill='white' width='20px' height='20px' />
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <DashboardIcon fill='white' width='20px' height='20px' />
                        </Button>
                    </li>
                </ol>
            </nav>
            <div style={{ display: "flex", height: "'100vh", paddingLeft: "70px" }}>{children}</div>
        </>
    );
}
