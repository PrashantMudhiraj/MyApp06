import { Component } from "react";
import axios from "axios";

class UserClass extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Location",
                bio: "Bio",
            },
        };
        console.log(this.props.details.name + "Child constructor");
    }
    async componentDidMount() {
        console.log(this.props.details.name + "Child componentDidMount");
        const response = await axios.get(
            "https://api.github.com/users/PrashantMudhiraj"
        );
        // console.log(response);
        this.setState({
            userInfo: response.data,
        });
    }
    componentDidUpdate() {
        console.log(this.props.details.name + "Child componentDidUpdate");
    }
    componentWillUnmount() {
        console.log(this.props.details.name + "Child componentWillUnmount");
    }
    render() {
        console.log(this.props.details.name + "Child render");
        const { name, location, bio } = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Bio : {bio}</h4>
            </div>
        );
    }
}

export default UserClass;
