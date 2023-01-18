import React, { useContext } from 'react';
import { MyContext } from './Myprovider.component';

export function MyComponent() {
  const { count, setCount } = useContext(MyContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
