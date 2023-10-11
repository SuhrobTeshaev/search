import React,{FC} from "react";
import { User } from "../api";
interface UsersProps {
    usersProp:User[]
}

const Users:FC<UsersProps>=({usersProp})=>{
return (
    <ul>
        {
            usersProp.map((user)=>{
                return <li key={user.id}>
                    {user.name},{user.age}

                </li>
            })
        }
        
    </ul>
)
}

export default Users;