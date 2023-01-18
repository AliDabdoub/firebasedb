import React, {useContext} from 'react'
import { MyContext } from './Myprovider.component'


export function Mycomponentseconde() {
  const {name, setName} = useContext(MyContext)
  return (
    <div>
      <p>{name}</p>
      <button onClick={()=> setName('Ali')}>change name</button>
    </div>
  )
}
