import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Component } from "react";
class MyComponent extends Component {
    components = {
        Home: Home,
        Dashboard: Dashboard,
        Login: Login,
    };

    render() {
        const TagName = this.components[this.props.tag || "Home"];
        return <TagName />;
    }
}
export default MyComponent;
