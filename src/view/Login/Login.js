import React, { Component } from 'react';
import { NavBar, Icon, List, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

const Item = List.Item;
class LoginForm extends Component {
    handleLogin = () => {
        sessionStorage.setItem('login', 1)
        this.props.history.replace('/mine');
    }
    handleLogout = () => {
        sessionStorage.setItem('login', 0)
        this.props.history.replace('/send');
        window.location.reload()
    }
    render() {
        const { getFieldProps } = this.props.form;
        // let loginStatus = Number(sessionStorage.getItem('login'))
        // console.log('----------login11:', this.props, loginStatus)
        return (
            <div className="app-wrap-con">
                <NavBar
                    leftContent="请登录"
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                ></NavBar>
                <List>
                    <InputItem
                        {...getFieldProps('phone')}
                        type="phone"
                        placeholder="请输入手机号"
                    >手机号</InputItem>
                    <InputItem
                        {...getFieldProps('digit')}
                        type="digit"
                        placeholder="请输入验证码"
                        extra={<a style={{ color: '#f60', borderLeft: '1px solid #ccc', padding: '0 10px' }}>获取验证码</a>}
                    >验证码</InputItem>
                    <Item>
                        <Button type="primary" size="small" style={{ color: '#fff', background: '#f60' }} onClick={this.handleLogin}>登录</Button>
                    </Item>
                </List>
            </div>
        );
    }
}
const Login = createForm()(LoginForm)
export default Login
