import React from "react";

function Login({ username, password, savedUser = { username: "admin", password: "1234" } }) {
    if (username !== savedUser.username || password !== savedUser.password) {
        return (
            <div>
                <p className="error-message">نام کاربری یا رمز عبور اشتباه است</p>
            </div>
        );
    }

    return <h3 className="success-message">خوش آمدید {username}</h3>;
}

export default Login;