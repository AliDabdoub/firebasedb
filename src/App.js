import './App.css';
import SignIn from './Sign-in.component.jsx';
import { createContext, useState } from 'react';
import Settings from './Settings.component';

export const ContextName = createContext()


function App() {
  const name = useState('sss')
  return (
    <ContextName.Provider value={name}>
      <div>
        <SignIn />
        <Settings />
      </div> 
    </ContextName.Provider>
  );
}

export default App;
