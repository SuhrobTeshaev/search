import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './style.css';
import { Query, User, requestUsers, requestUsersWithError } from './api';
import { error } from 'console';

function App() {
  const [filterParams,setFilterParams]=useState<Query>({
    name:'',
    age:'',
    limit:4,
    offset:0
  });
  const [isLoading,setIsLoading]=useState(false);
  const [isError,setIsError]=useState<string|null>(null);
  const [users,setUsers]=useState<User[]>([]);
  const [page,setPage]=useState(1); 
  const refPage=useRef<number>(1);
  refPage.current=page;

  useEffect(()=>{
    setIsLoading(true);
    setIsError(null);
    requestUsers(filterParams)
    .then((data)=>{
      data.length?setUsers(data):setIsError('users not found');
      setIsLoading(false);
    })
    .catch((e)=>{
      setIsLoading(false);
      requestUsersWithError().catch((error)=>{
        setIsError(error.message);
      })
    })
  },[filterParams]);
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
