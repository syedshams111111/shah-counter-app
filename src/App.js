import React,{useState} from "react";

function App() {
    const [count, setCount]=useState(0)
  return (
    <div className="container my-5">
     <div className="card text-center my-5">
         <div className="card-body">
             <h1 className="demo">Counter App</h1>
             <div className="my-5">
                 <h2 className="my-5">{count}</h2>
                 <button className="mx-1" onClick={() => setCount(count+1)}>Increment</button>
                 <button className="mx-2" onClick={() => setCount(count-1)}>Decrement</button>
                 <button className="mx-3" onClick={() => setCount(0)}>Reset</button>

             </div>

         </div>

     </div>
    </div>
  );
}

export default App;
