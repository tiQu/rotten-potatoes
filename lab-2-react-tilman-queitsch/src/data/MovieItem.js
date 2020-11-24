import React, { Component } from 'react'

export default class Movieitem extends Component {
    render() {
        return (
                <div>
                    {this.props.title} {this.props.vote_average}
                </div>
        );
    }
}