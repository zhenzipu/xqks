import React, { Component } from 'react';
// import { withRouter } from "react-router-dom";
import createContainer from '@/utils/createContainer'
import { NavBar, Button } from 'antd-mobile';

class Send extends Component {
    shouldComponentUpdate(nextProps) {
        console.log('---------home next:', nextProps, nextProps.location.pathname)
        return (nextProps.location.pathname === '/send' || this.props.location.pathname === '/send')
    }
    navTo (nav) {
        this.props.history.push(nav);
    }
    render() {
        console.log('-------home props:', this.props)
        let { pathname } = this.props.location
        let { nowRoute } = this.props
        return (
            <div className="app-wrap-con" style={{ display: pathname === nowRoute ? 'block' : 'none' }}>
                <NavBar
                    mode="light"
                >首页</NavBar>
                <div>这是首页</div>
                <Button onClick={this.navTo.bind(this, 'homeInfo')}>首页详情</Button>
                <Button onClick={this.navTo.bind(this, 'login')}>登陆</Button>
            </div>
        );
    }
}

export default createContainer(
    ({ test }) => {
        return {
            test: test
        }
    },        // mapStateToProps,
    require('@/redux/actions/test').default,    // mapActionCreators,
    Send
)
