import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.name + " constructor");

        // console.log(props);

        this.state = {
            count: 0,
            count2: 1
        }
    }

    componentDidMount() {
        console.log(this.props.name + " componentDidMount");
    }

    render() {
        console.log(this.props.name + " render");

        const { location } = this.props;

        // destructuring state variable in class based components :-
        const { count2 } = this.state;

        return (
            <div className="user-card">
                <h2>count:{this.state.count}</h2>
                <h2>count2:{count2}</h2>

                <button onClick={() => {
                    // this.state.count = this.state.count + 1;

                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                    })
                }}>count increase</button>

                <h2>{this.props.name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact: @ak</h4>
            </div>
        )
    }
}

export default UserClass;