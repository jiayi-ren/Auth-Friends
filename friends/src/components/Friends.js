import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friends = props =>{

    const initialFormValues = {
        name:"",
        age: 0,
        email: "",
    }

    const [formValues, setFormValues] = useState(initialFormValues)
    const [friendsList, setFriendsList] = useState([])

    const getData = () =>{
        axiosWithAuth()
            .get("api/friends")
            .then(res =>{
                // console.log("SUCCESS",res.data)
                setFriendsList(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    useEffect(()=>{
        console.log("Change")
        getData()
    },[])

    const handleChange = event =>{
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event =>{
        event.preventDefault()
        axiosWithAuth()
            .post("/api/friends", {
                name: formValues.name,
                age: formValues.age,
                email: formValues.email
            })
            .then(res =>{
                // console.log(res)
                setFormValues(initialFormValues)
                setFriendsList(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    return(
        <div className="friends-container">
            <div className="friend-form-container">
            <form onSubmit={handleSubmit} className="friend-form">
                <label>
                    <input
                        name="name"
                        value={formValues.name}
                        type="text"
                        onChange={handleChange}
                        placeholder="Friend's name"
                    />
                </label>
                <label>
                    <input
                        name="age"
                        value={formValues.age}
                        type="number"
                        onChange={handleChange}
                        placeholder="Friend's age"
                    />
                </label>
                <label>
                    <input
                        name="email"
                        value={formValues.email}
                        type="text"
                        onChange={handleChange}
                        placeholder="Friend's email"
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
        <div className="friends">
        {friendsList.map( (friend, index) =>{
                return(
                    <div key={index} className="friend">
                        <h3>ID: {friend.id}</h3>
                        <h3>Name: {friend.name}</h3>
                        <h3>Age: {friend.age}</h3>
                        <h3>Email: {friend.email}</h3>
                    </div>
                )
            })}
        </div>
            
        </div>
    )
}

export default Friends;