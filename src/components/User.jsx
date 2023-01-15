import React from 'react'
import Userdata from './Userdata'
export default function User(users) {
  
    return (
        <>
     { users.users.map((p) => (
    <Userdata key={p.id} user={p} />
  ))} 
  </>
    )
}
