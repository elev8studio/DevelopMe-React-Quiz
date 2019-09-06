import React, { Component } from "react";

import Form from "./Form";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: []
         };
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(post) {
        let { posts } = this.state;
        this.setState({
            posts: [...posts, post]
        });
    }

    render() {
        let { posts } = this.state;
        return (
            <> 
                <h1 className="mb-4">Posts</h1>
                {
                    posts.length === 0 ? <p> No posts</p> : 
                    (
                        <ul className="list-group">
                            {
                                posts.map((post, index) => (
                                    <li key={ index } className="list-group-item">
                                        <h4>{ post.title }</h4>
                                        <p className="mb-1">{ post.text }</p>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
                
                <h3 className="mt-5">Add Post</h3>
                <Form handleUpdate={ this.handleUpdate } />
                
            </>
        )
    }
}

export default Posts;