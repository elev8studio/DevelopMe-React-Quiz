import React, { Component } from "react";

class CountBy extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { step } = this.props;
        let { count } = this.state;
        this.setState({
            count: count + step
        })
    }

    render() {
        let { count } = this.state;
        return (
            <div className="jumbotron">
                <h4>Count By</h4>
                <p onClick={ this.handleClick }>{ count }</p>
            </div>
        )
    }
}

export default CountBy;