import { useCounter } from '../../hooks/useCounter';
import './counter.css';


export const CounterWhitCustomHook = () => {

    const { state:counter, decrement, increment,reset } = useCounter(1); 

    return (
        <>

          <h1> Counter con un Hook : <br/> {counter} </h1>
          <hr />

          <button onClick= { () => decrement(1.5)} className="btn btn-outline-warning" > -1 </button>
          <button onClick= { reset } className="btn btn-outline-warning" > Reset </button>
          <button onClick= { () => increment(1.5)} className="btn btn-outline-warning" > +1 </button>

        </>
    )
}
