import React from "react";
import UserContext from "./UserContext";

class About extends React.Component {

    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    constructor(props) {
        console.log('constructor');
        super(props);

        this.state = {
            age: 23,
            userInfo: {}
        }
    }

    async componentDidMount() {
        const userJson = await fetch('https://api.github.com/users/venkat8268');
        const user = await userJson.json();
        console.log('componentDidMount');
        this.setState({
            userInfo: user
        })

        this.timer = setInterval(() => {
            console.log('Logging every 10000000 ms');
        }, 10000000)
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { login, type, public_repos } = this.state.userInfo;
        console.log('render');
        
        return (
            <div>
                <div>
                    <h1>About The Developer</h1>
                    <h2>Developer : 
                        <UserContext.Consumer>
                            {(data) => {                                
                                return <span className="font-bold"> {data.loggedInUser}</span>
                            }}
                        </UserContext.Consumer>
                    </h2>
                    <h2>Age : {this.state.age}</h2>
                    <button
                        onClick={
                            () => {
                                this.setState({
                                    age: this.state.age + 1
                                })
                            }
                        }
                    >
                        Increase age
                    </button>
                </div>

                <div>
                    <h1>About The Git Hub Api User</h1>
                    <h2>Name : {login}</h2>
                    <h2>Type : {type}</h2>
                    <h2>Repos : {public_repos}</h2>
                </div>
            </div>
        )
    }
}

export default About