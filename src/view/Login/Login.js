import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

export default class Login extends Component {
    handleLogin = () => {
        sessionStorage.setItem('login', 1)
        this.props.history.replace('/send');
    }
    handleLogout = () => {
        sessionStorage.setItem('login', 0)
        this.props.history.replace('/send');
        window.location.reload()
    }
    render() {
        let loginStatus = Number(sessionStorage.getItem('login'))
        console.log('----------login11:', this.props, loginStatus)
        return (
            <div className="app-wrap-con">
                <NavBar
                    leftContent="请登录"
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                ></NavBar>
                {
                    loginStatus === 1 ?
                        <button onClick={this.handleLogout}>loginout</button>
                        :
                        <button onClick={this.handleLogin}>login</button>
                }
            </div>
        );
    }
}
