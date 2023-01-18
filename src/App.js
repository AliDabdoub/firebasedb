import './App.css';
import SignIn from './Sign-in.component.jsx';
import { createContext} from 'react';
import Settings from './Settings.component';
import { MyComponent } from './Mycomponent.component.jsx';
import { Mycomponentseconde } from './Mycomponentseconde';
import {MyProvider} from './Myprovider.component.jsx'

export const ContextName = createContext()


function App() {
  return (
    <MyProvider>
      <MyComponent />
      <Mycomponentseconde />
      <div>
      <SignIn />
      <Settings />
      </div> 
    </MyProvider>
  );
}

export default App;
