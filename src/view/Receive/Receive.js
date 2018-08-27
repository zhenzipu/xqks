import React, { Component } from 'react';
import { Tabs, WhiteSpace, Card, Picker, List } from 'antd-mobile';
import './Receive.less';
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
const tabs = [
    { title: '未取快递' },
    { title: '已取快递' },
];
export default class Receive extends Component {
    // 添加上门取件门牌号
    handleAddress = () => {
        console.log(111)
        this.props.history.replace('/address');
    }
    handleEstimate=()=>{
        this.props.history.replace('/estimate');
    }
    handleChangeDetail=()=>{
        this.props.history.replace('/detail');
    }
    render() {
        let { pathname } = this.props.location
        let { nowRoute } = this.props

        return (
            <div className="app-wrap-con" style={{ display: pathname === nowRoute ? 'block' : 'none' }}>
                <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
                    {/* 已取快递 start */}
                    <div>
                        <p>您可以使用取件码取件，也可以扫描取件。扫描取件可以同时取走关联手机的包裹，取件码智能取走自己注册手机的包裹。</p>
                        <WhiteSpace size="sm" />
                        <p>您有以下快递在<span>马连店家园</span>代收点</p>
                        <Card full onClick={this.handleChangeDetail}>
                            <Card.Header
                                title="18829388372"
                                extra={<span className="title-right">如风达TEST23203948093</span>}
                            />
                            <Card.Body>
                                <div className="wait-list">
                                    <p><span>放置于</span><span>2018-12-03 12：30</span></p>
                                    <p><span>已放置</span><span>17天14小时</span></p>
                                </div>
                            </Card.Body>
                        </Card>
                        <WhiteSpace size="sm" />
                        <Card full onClick={this.handleChangeDetail}>
                            <Card.Header
                                title="注册手机"
                                extra={<span className="title-right">如风达TEST23203948093</span>}
                            />
                            <Card.Body>
                                <div className="wait-list">
                                    <p><span>放置于</span><span>2018-09-03 12：30</span></p>
                                    <p><span>已放置</span><span>65天21小时</span></p>
                                </div>
                            </Card.Body>
                        </Card>
                        <p>您有以下快递在<span>流星花园三区</span>代收点</p>
                        <Card full onClick={this.handleChangeDetail}>
                            <Card.Header
                                title="18829388372"
                                extra={<span className="title-right">如风达TEST23203948093</span>}
                            />
                            <Card.Body>
                                <div className="wait-list">
                                    <p><span>放置于</span><span>2018-12-03 12：30</span></p>
                                    <p><span>已放置</span><span>17天14小时</span></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* 未取快递 end */}
                    {/* 已取快递 start */}
                    <div>
                        <WhiteSpace size="sm" />
                        <Card full onClick={this.handleChangeDetail}>
                            <Card.Header
                                title="马连店家园"
                                extra={<span className="title-right">如风达TEST23203948093</span>}
                            />
                            <Card.Body>
                                <div className="wait-list">
                                    <p><span>包裹收件人</span><span>18829388372</span></p>
                                    <p><span>取件时间</span><span>2018-12-03 12：30</span></p>
                                    <p><span>实际取件人</span><span>(领件码领取)</span></p>
                                </div>
                            </Card.Body>
                        </Card>
                        <WhiteSpace size="sm" />
                        <Card full onClick={this.handleChangeDetail}>
                            <Card.Header
                                title="流星花园三区"
                                extra={<span className="title-right">如风达TEST23203948093</span>}
                            />
                            <Card.Body>
                                <div className="wait-list">
                                    <p><span>收件人姓名电话</span><span>注册手机</span></p>
                                    <p><span>取件时间</span><span>2018-12-03 18：30</span></p>
                                    <p><span>实际取件人</span><span>(领件码领取)</span></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* 已取快递 end */}
                </Tabs>
            </div>
        );
    }
}
