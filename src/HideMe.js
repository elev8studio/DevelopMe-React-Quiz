import React, { Component } from "react";

class HideMe extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            visible: false,
        })
    }

    render() {
        let { children } = this.props;
        let { visible } = this.state;
        return (
            <div className="jumbotron">
                <h4>Hide Me</h4>
                <p onClick={ this.handleClick } className={ !visible ? "d-none" : "d-block" }>{ children }</p>
            </div>
        )
    }
}

export default HideMe;