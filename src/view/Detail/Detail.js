import React, { Component } from 'react';
import { NavBar, Icon, List, WhiteSpace} from 'antd-mobile';

export default class Detail extends Component {
    handleBack = () => {
        this.props.history.replace('/receive');
    }
    render() {
        return (
            <div className="app-wrap-con">
                <NavBar
                    leftContent="包裹详细信息"
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.handleBack}
                ></NavBar>
                <WhiteSpace size="sm" />
                <List style={{ backgroundColor: 'white' }}>
                    <List.Item
                        extra={<span>如风达</span>}
                        multipleLine
                    >
                        快递公司
                    </List.Item>
                </List>
                <List style={{ backgroundColor: 'white' }}>
                    <List.Item
                        extra={<span>TWE98273ksdfjslj</span>}
                        multipleLine
                    >
                        快递单号
                    </List.Item>
                </List>
                <List style={{ backgroundColor: 'white' }}>
                    <List.Item
                        extra={<span>已领取</span>}
                        multipleLine
                    >
                        状态
                    </List.Item>
                </List>
                <List style={{ backgroundColor: 'white' }}>
                    <List.Item
                        extra={<span>注册手机</span>}
                        multipleLine
                    >
                        收件人手机
                    </List.Item>
                </List>
                <List style={{ backgroundColor: 'white' }}>
                    <List.Item
                        extra={<span>2018-09-03 12：30</span>}
                        multipleLine
                    >
                        放置时间
                    </List.Item>
                </List>
                <List style={{ backgroundColor: 'white' }}>
                    <List.Item
                        extra={<span>2018-09-03 12：30</span>}
                        multipleLine
                    >
                        领取时间
                    </List.Item>
                </List>
                <List style={{ backgroundColor: 'white' }}>
                    <List.Item
                        extra={<span>(领件码领取)</span>}
                        multipleLine
                    >
                        领取方式
                    </List.Item>
                </List>
            </div>
        );
    }
}
