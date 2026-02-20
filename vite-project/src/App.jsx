import React, {useState} from "react";
import Login from "./components/Login.jsx";
import "./App.css";

function App() {
    const savedUser = {username: "admin", password: "1234"};
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedInUser, setLoggedInUser] = useState(null);

    const LogIn = () => {
        if (username === savedUser.username && password === savedUser.password) {
            setLoggedInUser(username);
            setUsername("");
            setPassword("");
        }
    };

    const handleLogout = () => setLoggedInUser(null);

    return (
        <div className="page">
            <div className="form">
                {loggedInUser ? (
                    <>
                        <Login username={loggedInUser} password={savedUser.password} savedUser={savedUser}/>
                        <button className="btn" onClick={LogIn}>Logout</button>
                    </>
                ) : (
                    <>
                        <h2>Login</h2>
                        <input
                            type="text"
                            placeholder="نام کاربری"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input-field"
                        />
                        <input
                            type="password"
                            placeholder="رمز عبور"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="field"
                        />
                        {(username || password) &&
                            <Login username={username} password={password} savedUser={savedUser}/>}
                        <button className="submit" onClick={LogIn}>Login</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;