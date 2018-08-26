import React, { Component } from 'react';
import { NavBar, Icon, List } from 'antd-mobile';
import './Record.less'

export default class Record extends Component {
    handleBack = () => {
        this.props.history.replace('/send');
    }
    // handleLogout = () => {
    //     sessionStorage.setItem('login', 0)
    //     window.location.reload()
    // }
    render() {
        return (
            <div className="app-wrap-con">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.handleBack}
                >交易记录</NavBar>

                <List >
                    <List.Item extra={'￥77.00'}>
                        <div className="record-list">
                            <span>充值</span>
                            <span>2018-05-07 18：53</span>
                        </div>
                    </List.Item>
                    <List.Item extra={'￥77.00'}>
                        <div className="record-list">
                            <span>充值</span>
                            <span>2018-05-07 18：53</span>
                        </div>
                    </List.Item>
                    <List.Item extra={'￥77.00'}>
                        <div className="record-list">
                            <span>充值</span>
                            <span>2018-05-07 18：53</span>
                        </div>
                    </List.Item>
                    <List.Item extra={'￥77.00'}>
                        <div className="record-list">
                            <span>充值</span>
                            <span>2018-05-07 18：53</span>
                        </div>
                    </List.Item>
                    <List.Item extra={'￥77.00'}>
                        <div className="record-list">
                            <span>充值</span>
                            <span>2018-05-07 18：53</span>
                        </div>
                    </List.Item>
                </List>
            </div>
        );
    }
}
