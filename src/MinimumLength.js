import React, { Component } from "react";

class MinimumLength extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let inputEl = e.currentTarget.value
        this.setState({
            input: inputEl,
        })
    }

    render() {
        let { length } = this.props;
        let { input } = this.state;
        return (
            <div className="jumbotron">
                <h4>Minimum Length</h4>
                <form>
                    <input onChange={ this.handleChange } value={ input } className="form-control" />
                    <label className="mt-2">
                        {
                            input.length >= 0 && input.length < length ? `${length - input.length} characters required` : ""
                        }
                    </label>
                </form>
            </div>
        )
    }
}

export default MinimumLength;