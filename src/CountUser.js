import React, { useEffect, useState } from "react";
import './counter.css'
import axios from "axios";

function CountUsers() {

    const [counter, setCounter] = useState(1)
    const [users, setUsers] = useState([])
    const [userNotFound, setUserNotFound] = useState(false)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${counter}`)
            .then((response) => {
                setUsers(response.data)
                setUserNotFound(false);
            }).catch(error => {
                setUsers(null);
                setUserNotFound(true)
            })

    }, [counter])

    console.log(userNotFound)

    return (
        <>
            <div className="count_div">
                <button onClick={() => setCounter(counter > 1 ? counter - 1 : counter)} className="count_btn">-</button>
                <h1>{counter}</h1>
                <button onClick={() => setCounter(counter + 1)} className="count_btn">+</button>
            </div>

            <div className="user_master_div">
                <div className="user_main_div">
                    <div className="user_div">
                        {users ?
                            <>
                                <h1>{users.name}</h1>
                                <h4>email : {users.email}</h4>
                            </>
                            :
                            <h1>User Not Found</h1>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default CountUsers;