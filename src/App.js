import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signin } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>REDUX</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      {isLogged ? (
        <button onClick={() => dispatch(signin())}>SIGN OUT</button>
      ) : (
        <button onClick={() => dispatch(signin())}>SIGN IN</button>
      )}

      <br />
      {isLogged ? <h3>You are Logged In</h3> : <h3>You are not Logged In</h3>}
    </div>
  );
}

export default App;
