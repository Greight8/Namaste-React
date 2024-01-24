import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.name + " constructor");

        // console.log(props);

        this.state = {
            count: 0,
            count2: 1,

            userInfo: {
                name: "no name",
                location: "no location"
            }
        }
    }

    async componentDidMount() {
        console.log(this.props.name + " componentDidMount");

        let url = "https://api.github.com/users/" + this.props.user;
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);

        this.setState({
            userInfo: data
        })
        // console.log(this.state.userInfo)

        // this.timer = setInterval(() => {
        //     console.log("after every 1 sec")
        // }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.name + " componentDidUpdate called bec state is updated inside cdm");
        // console.log(this.state.userInfo)

        // if (this.state.count !== prevState.count) {
        //     console.log("count changed");
        // }

        // if (this.state.count2 !== prevState.count2) {
        //     console.log("count2 changed");
        // }
    }

    componentWillUnmount() {
        // console.log(this.props.name + " componentWillUnmount");

        // clearInterval(this.timer)
    }

    render() {
        console.log(this.props.name + " render");

        const { location } = this.props;

        // destructuring state variable in class based components :-
        const { count2, userInfo } = this.state;

        return (
            <div className="m-4 p-4 w-[250px] rounded-lg  bg-gray-200 hover:bg-gray-400">
                <img className="rounded-lg h-[150px] mx-auto" src={userInfo.avatar_url} alt="img" />
                <h2>{userInfo.name}</h2>
                <h2>count:{this.state.count}</h2>
                <h2>count2:{count2}</h2>

                <button className="bg-blue-300 mt-2 mb-2 p-2 rounded-lg" onClick={() => {
                    // 1) never do this , it will not work in class based components
                    // this.state.count = this.state.count + 1;

                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                    })
                }}>count increase</button>

                {/* <h2>{userInfo.name}</h2>
                <h2>{userInfo.login}</h2>
                <h3>Location:{userInfo.location}</h3> */}
                <h4>Contact: @ak</h4>
            </div>
        )
    }
}

export default UserClass;