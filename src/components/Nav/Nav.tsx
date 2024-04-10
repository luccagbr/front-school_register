import DocumentIcon from "../../assets/document.svg?react";

export function Nav() {
    return (
        <header style={{ display: "flex", alignItems: "center", width: "100%", height: "50px" }}>
            <div style={{ display: "flex" }}>
                <DocumentIcon width='20px' height='20px' />
                <h4>Documentos</h4>
            </div>
        </header>
    );
}
