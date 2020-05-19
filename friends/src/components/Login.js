import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props =>{

    const initialCredentials = {
        username: "",
        password: "",
    }

    const [credentials, setCredentials] = useState(initialCredentials)

    const handleChange = event =>{
        setCredentials({
            ...credentials,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = event =>{
        event.preventDefault()
        axiosWithAuth()
            .post("/api/login", credentials)
            .then(res =>{
                localStorage.setItem("token", res.data.payload)
                props.history.push("/friends")
                setCredentials(initialCredentials)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    return(
        <div>
            <form>
                <label>
                    <input
                        name="username"
                        value={credentials.username}
                        type="text"
                        placeholder="username"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        name="password"
                        value={credentials.password}
                        type="password"
                        placeholder="password"
                        onChange={handleChange}
                    />
                </label>
            </form>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login;