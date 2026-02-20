import React from "react";

function Login({ username, password, savedUser = { username: "admin", password: "1234" } }) {
    if (username !== savedUser.username || password !== savedUser.password) {
        return (
            <div>
                <p className="error-message"></p>
            </div>
        );
    }

    return <h3 className="success-message"> Welcome {username}</h3>;
}

export default Login;