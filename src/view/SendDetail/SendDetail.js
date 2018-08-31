import React, { Component } from 'react';
import { NavBar, Icon, List, WhiteSpace, Button } from 'antd-mobile';

const Item = List.Item;
export default class SendDetail extends Component {
    handleBack = () => {
        this.props.history.replace('/send');
    }
    render() {
        return (
            <div className="app-wrap-con">
            <div style={{ height: '100%', overflow: 'auto' }}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.handleBack}
                >发送包裹详细信息</NavBar>
                <WhiteSpace size="sm" />
                    <List style={{ backgroundColor: 'white' }}>
                        <Item
                            extra={<span>如风达</span>}
                            multipleLine
                        >
                            快递公司
                    </Item>
                        <Item
                            extra={<span>TWE98273ksdfjslj</span>}
                            multipleLine
                        >
                            快递单号
                    </Item>
                        <Item
                            extra={<span>已发送</span>}
                            multipleLine
                        >
                            状态
                    </Item>
                        <Item
                            extra={<span>张三</span>}
                            multipleLine
                        >
                            发件人姓名
                    </Item>
                        <Item
                            extra={<span>注册手机</span>}
                            multipleLine
                        >
                            发件人手机
                    </Item>
                        <Item
                            extra={<span>11号楼4单元107</span>}
                            multipleLine
                        >
                            发件人住址
                    </Item>
                        <Item
                            extra={<span>1320389238728302840</span>}
                            multipleLine
                        >
                            身份证号
                    </Item>
                    </List>
                    <WhiteSpace size="sm" />
                    <List style={{ backgroundColor: 'white' }}>
                        <Item
                            extra={<span>李四</span>}
                            multipleLine
                        >
                            收件人姓名
                    </Item>
                        <Item
                            extra={<span>13223420394</span>}
                            multipleLine
                        >
                            收件人手机
                    </Item>
                        <Item
                            extra={<span>山东省潍坊市和平街58号密云小区11号楼4单元107</span>}
                            multipleLine
                        >
                            收件人地址
                    </Item>
                        <Item
                            extra={<span>file</span>}
                            multipleLine
                        >
                            物品品类
                    </Item>
                        <Item
                            extra={<span>1.42</span>}
                            multipleLine
                        >
                            重量
                    </Item>
                        <Item
                            extra={<span>32.00</span>}
                            multipleLine
                        >
                            快递费
                    </Item>
                        <Item
                            extra={<span>2018-09-03 12：30</span>}
                            multipleLine
                        >
                            请求时间
                    </Item>
                        <Item
                            extra={<span>2018-09-03 12：30</span>}
                            multipleLine
                        >
                            支付时间
                    </Item>
                        <Item
                            extra={<span>2018-09-03 12：30</span>}
                            multipleLine
                        >
                            发送时间
                    </Item>
                        <Item>
                            <Button type="primary" size="small" style={{ color: '#fff', background: '#f60' }} onClick={this.handleLogin}>取消</Button>
                        </Item>
                    </List>
                </div>
            </div>
        );
    }
}
