import React, { Component } from "react";

class MinimumLength extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "", message: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let { length } = this.props;
        let inputEl = e.currentTarget.value
        this.setState({
            input: inputEl,
            message: `${length - inputEl.length} characters required`
        })
    }

    render() {
        let { input, message } = this.state;
        return (
            <div className="jumbotron">
                <h4>Minimum Length</h4>
                <form>
                    <input onChange={ this.handleChange } value={ input } className="form-control" />
                    <label className="mt-2">{ message }</label>
                </form>
            </div>
        )
    }
}

export default MinimumLength;