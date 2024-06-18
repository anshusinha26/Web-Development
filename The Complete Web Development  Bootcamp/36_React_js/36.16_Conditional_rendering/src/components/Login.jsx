import React from "react";
import Input from "./Input";

function Login(props) {
    return (
        <form className="form">
            <Input />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
