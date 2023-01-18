import React from 'react'
import { useContext } from 'react'
import ContextName from './App'



export default function User() {
    const name = useContext(ContextName)
    //console.log(setName('Alex')

  return (

    <div>
        <h6>{name}</h6>
    </div>
  )
}
