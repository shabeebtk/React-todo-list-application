import React, { useState } from "react";
import './users.css'

function Users() {

    const [users, SetUsers] = useState([
        { name: 'shabeeb', email: 'shabeeb@gmail.com' },
        { name: 'ashwin', email: 'ashwn@gmail.com' },
        { name: 'nihad', email: 'nhad@gmail.com' },
        { name: 'shas', email: 'shas@gmail.com' },
    ])

    return (
        <div className="user_main_div">
            {users.map(user =>(
                <div className="user_div">
                    <h1>{user.name}</h1>
                    <h4>email : {user.email}</h4>
                </div>
            ))}    
        </div>
    )
}

export default Users;