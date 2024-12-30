import { Component } from "react";
import Login from "../pages/Login/Login";

class MyComponent extends Component {
    components = {
        Login: Login,
    };

    render() {
        const TagName = this.components[this.props.tag || "Home"];
        return <TagName />;
    }
}
export default MyComponent;
