import React, { Component } from 'react';

export default class Receive extends Component {
    render() {
        let { pathname } = this.props.location
        let { nowRoute } = this.props
        return (
            <div className="app-wrap-con" style={{ display: pathname === nowRoute ? 'block' : 'none' }}>
                Receive
            </div>
        );
    }
}
