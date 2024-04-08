export function Nav() {
    return (
        <header
            style={{ display: "flex", border: "1px solid red", alignItems: "center", width: "100%", height: "50px" }}>
            <div style={{ display: "flex" }}>
                <img src='/src/assets/document.svg' width='20px' />
                <h4>Documentos</h4>
            </div>
        </header>
    );
}
