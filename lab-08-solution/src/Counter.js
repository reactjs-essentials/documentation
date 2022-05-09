import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState (0)

return (

    <div>
        <h4>Counter</h4>
        <section>
            <h4>Counter : {counter}</h4>
            <button onClick={() => setCounter(counter + 1)}> + </button>
            <button onClick={() => setCounter(counter - 1)}> - </button>
        </section>
    </div>
    )
}

export default Counter;