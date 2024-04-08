import "../app/globals.css";
import { Nav } from "./components/Nav/Nav";
import { SideBar } from "./components/SideBar/SideBar";

function App() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <SideBar>
                <Nav />
            </SideBar>
        </div>
    );
}

export default App;
