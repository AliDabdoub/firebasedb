import { createContext } from 'react';
import React, { useState } from 'react';


export const MyContext = createContext();


export function MyProvider({ children}) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alex');

  return (
    <MyContext.Provider value={{ count, setCount, name, setName }}>
      {children}
    </MyContext.Provider>
  );
}
