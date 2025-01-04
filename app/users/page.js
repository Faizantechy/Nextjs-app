'use client'

import React, { useEffect, useState } from 'react'
import DeleteButton from '../components/DeleteButton'

const Page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/Data');
      const data = await res.json();
      setUsers(data.users);
    };


    fetchData();
  }, []);



  return (
    <div>
      <h1>These are the users:</h1>
      <ul className='ml-5 mt-4 space-y-3'>
        {users.map(user => (
          <li key={user.id} className='flex gap-10 items-center'>
            {user.name} - {user.age} - {user.class}
            <DeleteButton id={user.id}/> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
