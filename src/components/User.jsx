import { useState } from "react";

const User = () => {
    const [count, setCount] = useState(0);
    // const [count, setCount] = useState({
    //     count: 0,
    //     count_2: 0,
    // });
    return (
        <div className="user-card">
            {/* <h1>Count : {count.count_2}</h1> */}
            <h1>Count : {count}</h1>
            <h2>Name : Prashant</h2>
            <h3>Location :Hyderabad</h3>
            <h4>Contact : Prashant_123</h4>
        </div>
    );
};

export default User;
