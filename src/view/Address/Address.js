import React, { Component } from 'react';
import { NavBar, Icon, List, Picker } from 'antd-mobile';
import './Address.less'
const ListItem = List.Item;
const district = [
    {
        label: '东亚上北中心',
        vlaue: 'ddd',
        key: 1
    },
    {
        label: '流星花园三区',
        vlaue: 'sss',
        key: 2
    },
]
export default class Address extends Component {
    handleBack = () => {
        this.props.history.replace('/send');
    }
    render() {
        return (
            <div className="app-wrap-con">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.handleBack}
                >交易记录</NavBar>
                <Picker extra="请选择" data={district} cols={1}>
                    <ListItem arrow="horizontal" >小区</ListItem>
                </Picker>
                <Picker extra="请选择" data={district} cols={1}>
                    <ListItem arrow="horizontal" >楼号</ListItem>
                </Picker>
                <Picker extra="请选择" data={district} cols={1}>
                    <ListItem arrow="horizontal" >单元</ListItem>
                </Picker>
                <Picker extra="请选择" data={district} cols={1}>
                    <ListItem arrow="horizontal" >楼层</ListItem>
                </Picker>
                <Picker extra="请选择" data={district} cols={1}>
                    <ListItem arrow="horizontal" >房间号</ListItem>
                </Picker>
            </div>
        );
    }
}
