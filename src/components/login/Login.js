import './Login.css';
import { useState } from 'react'
import { useHistory } from "react-router-dom";

export default function Login() {
    const history = useHistory();

    let [userName, setUserName] = useState('')
    let [password, setpassword] = useState('')
    return (
        <div className="login-container">
            <div className="login-header">
                Login
            </div>
            <input className = "text-input" placeholder="User Name" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
            <input className = "text-input" type="password" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
            <button className="primary-btn" disabled={!(userName.length && password.length)}
                onClick={() => history.push('/newsfeed')}>
                Login
            </button>
        </div>
    );
}
