import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", text: "", saved: false }
        this.handleTitle = this.handleTitle.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitle(e) {
        this.setState({ title: e.currentTarget.value })
    }

    handleText(e) {
        this.setState({ text: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        let { handleUpdate } = this.props;
        let { title, text } = this.state;
        handleUpdate({ title: title, text: text });
        this.setState({ title: "", text: "", saved: true });
        setTimeout(() => this.setState({ saved: false }), 2000);
    }

    render() {
        let { title, text, saved } = this.state;
        return (
            <>
                { saved ? <span className="alert alert-success">Saved!</span> : null }

                <form onSubmit={ this.handleSubmit } className="my-3">

                    <label className="help-block">Title</label>
                    <input onChange={ this.handleTitle } className="form-control" value={ title } required />

                    <label className="help-block mt-3">Text</label>
                    <input onChange={ this.handleText } className="form-control" value={ text } required />

                    <button className="btn btn-primary mt-3">Submit</button>

                </form>
            </>
        )
    }
}

export default Form;