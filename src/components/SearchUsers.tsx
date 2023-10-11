import React,{FC, useState} from 'react'

interface SearchUsersProps {
    changeValueHandler:(field:string,event:React.ChangeEvent<HTMLInputElement>,setData:(str:string)=>void)=>void
}

const SearchUsers:FC<SearchUsersProps>=({changeValueHandler})=>{
    const [userAge,setUserAge]=useState('');
    const [userName,setUserName]=useState('');
    return (
        <div>
            <input 
            type="text"
            placeholder='name' 
            value={userName}
            onChange={(e)=>changeValueHandler('name',e,setUserName)}
            />
            <input
             type="text"
             value={userAge}
            onChange={(e)=>changeValueHandler('age',e,setUserAge)}
             placeholder='age' 
              />
        </div>
    )
}
export default SearchUsers;