import React, { useState } from "react";
import Login from "../../vite-project/src/components/Login"; // با حرف بزرگ
import "./App.css";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [savedUser, setSavedUser] = useState({ username: "admin", password: "1234" });
    const [attempt, setAttempt] = useState(null); // برای ذخیره آخرین تلاش ورود

    const handleSubmit = () => {
        // اگر فیلدها خالی باشند
        if (!username || !password) {
            setAttempt({ username: "", password: "" }); // باعث نمایش پیام خطا می‌شود
            return;
        }

        if (isSignUp) {
            // ثبت‌نام: ذخیره کاربر جدید و برگشت به حالت ورود
            setSavedUser({ username, password });
            setIsSignUp(false);
            setUsername("");
            setPassword("");
            setAttempt(null);
        } else {
            // ورود: بررسی اطلاعات
            if (username === savedUser.username && password === savedUser.password) {
                setLoggedInUser(username);
                setAttempt(null);
                setUsername("");
                setPassword("");
            } else {
                setAttempt({ username, password }); // نمایش خطا
            }
        }
    };

    const handleLogout = () => {
        setLoggedInUser(null);
        setAttempt(null);
    };

    const switchMode = () => {
        setIsSignUp(!isSignUp);
        setAttempt(null);
        setUsername("");
        setPassword("");
    };

    return (
        <div className="page">
            <div className="form-container">
                {loggedInUser ? (
                    // نمایش پیام خوش‌آمدگویی با استفاده از کامپوننت Login
                    <Login username={loggedInUser} password={savedUser.password} savedUser={savedUser} />
                ) : (
                    <>
                        <h3>{isSignUp ? "Sign In" : "Login"}</h3>

                        <div className="input-group">
                            <label>نام کاربری</label>
                            <input
                                type="text"
                                placeholder={isSignUp ? "نام کاربری جدید" : "نام کاربری"}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <label>رمز عبور</label>
                            <input
                                type="password"
                                placeholder={isSignUp ? "رمز عبور جدید" : "رمز عبور"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* نمایش نتیجه تلاش ورود با کامپوننت Login */}
                        {attempt && <Login username={attempt.username} password={attempt.password} savedUser={savedUser} />}

                        <button className="submit-btn" onClick={handleSubmit}>
                            {isSignUp ? "Sign In" : "Login"}
                        </button>

                        {/* لینک تغییر حالت */}
                        <p>
                            {isSignUp ? "قبلاً ثبت‌نام کردی؟ " : "اکانت نداری؟ "}
                            <span className="link" onClick={switchMode}>
                                {isSignUp ? "Login" : "Sign In"}
                            </span>
                        </p>
                    </>
                )}

                {loggedInUser && (
                    <button className="submit-btn" onClick={handleLogout}>
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
}

export default App;