import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);

        console.log("Parent constructor");
    }

    componentDidMount() {
        console.log("Parent componentDidMount");
    }

    render() {
        console.log("Parent render");
        const details_1 = {
            name: "First Class",
            location: "Hyd Class",
        };
        const details_2 = {
            name: "Second Class",
            location: "Hyd Class",
        };
        return (
            <div>
                <h1>About</h1>
                {/* <User /> */}
                <UserClass details={details_1} />
                {/* <UserClass details={details_2} /> */}
            </div>
        );
    }
}

// const About = () => {
//     const details = {
//         name: "Prashant Class",
//         location: "Hyd Class",
//     };
//     return (
//         <div>
//             <h1>About</h1>
//             {/* <User /> */}
//             <UserClass details={details} />
//         </div>
//     );
// };

export default About;
