import React, { Component } from "react"

export default class ClassComponentDemo extends Component {
    constructor(props) {
        super(props)
        this.state = { simpleMessage: "Welcome user!" }
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h4>
                        {this.state.simpleMessage}
                    </h4>
                </div>
            </div>
        )
    }
}

