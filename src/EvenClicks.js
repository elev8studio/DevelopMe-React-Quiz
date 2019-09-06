import React, { Component } from "react";

class EvenClicks extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { counter } = this.state;
        this.setState({
            counter: counter + 1,
        })
    }

    render() {
        let { counter } = this.state;
        return (
            <div className="jumbotron">
                <h4>Even Clicks</h4>
                <p onClick={ this.handleClick }>
                    { counter % 2 === 0 ? "Even" : "Odd" }
                </p>
            </div>
        )
    }
}

export default EvenClicks;