import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App()
{
    const { counter, isLogged } = useSelector(state => state);
    const dispatch = useDispatch();
    
    return (
        <div className="App">
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>



            {isLogged ? <h3>Valuable Information I shouldn't see!</h3> : <h3>Log in to see</h3>}
        </div>
    );
}

export default App;
