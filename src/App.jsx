import {useState} from 'react';
import Admin from "./components/Admin";
import Guest from "./components/Guest";

function App() {
  const isLoggedIn = false;

  const [count, setCount] = useState(0);
  function handleClick() {
      setCount(count + 1);
  }
  return (
    <>
      <h1>Hello, Welcome to Audace</h1>
      {isLoggedIn ? <Admin /> : <><Guest count={count} onClick={handleClick}/><Guest count={count} onClick={handleClick}/></>}
    </>
  );
}

export default App;
