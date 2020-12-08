import React, { Component } from 'react'
import './NewsFeed.css'

export default class NewsFeed extends Component {

    state = {
        posts: [],
        postText: ''
    }

    handleInput = (postText) => {
        this.setState({postText})
    }

    createPost = () =>{
        let posts = [...this.state.posts]
        posts.push(this.state.postText)
        this.setState({posts, postText: ''})
    }

    enterPressed = (e) => {
        if(e.key === "Enter" ) {
            this.createPost()
        }
    }

    render() {
        let { posts } = this.state
        return (
            <div className="flex-box container">

                <div className="header">
                    See posts here!!
                </div>

                <div className = "create-post">
                    <input value = {this.state.postText} className = "post-input" onChange = {(e) => this.handleInput(e.target.value)} 
                    placeholder = "What's on your mind!!" onKeyPress = {(e) => this.enterPressed(e)} />
                    <button className="post-btn" disabled={!this.state.postText.length} onClick = {() => {this.createPost()}}> Post</button>
                </div>


                <div className="flex-box news-feed-container">
                    {
                        posts.map(item => (
                            <div className="flex-box post">
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div >
        )
    }
}