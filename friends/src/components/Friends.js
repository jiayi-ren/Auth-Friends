import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friends = props =>{

    const [friendsList, setFriendsList] = useState([])

    const getData = () =>{
        axiosWithAuth()
            .get("api/friends")
            .then(res =>{
                console.log("SUCCESS",res.data)
                setFriendsList(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <div>
            {friendsList.map( (friend, index) =>{
                return(
                    <div key={index}>
                        <h3>ID: {friend.id}</h3>
                        <h3>Name: {friend.name}</h3>
                        <h3>Age: {friend.age}</h3>
                        <h3>Email: {friend.email}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Friends;