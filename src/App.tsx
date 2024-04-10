import "../app/globals.css";
import { Nav } from "./components/Nav/Nav";
import { SideBar } from "./components/SideBar/SideBar";
import { Login } from "./pages/auth/Login";

function App() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            {/* <SideBar>
                <Nav />
            </SideBar> */}

            <Login />
        </div>
    );
}

export default App;
