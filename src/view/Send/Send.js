import React, { Component } from 'react';
import { Tabs, WhiteSpace, Card, Picker, List } from 'antd-mobile';
import './Send.less';
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
    { title: '请求发快递' },
    { title: '待处理快递' },
    { title: '已发送快递' },
];
export default class Send extends Component {
    // 添加上门取件门牌号
    handleAddress = () => {
        console.log(111)
        this.props.history.replace('/address');
    }
    handleEstimate=()=>{
        this.props.history.replace('/estimate');
    }
    render() {
        let { pathname } = this.props.location
        let { nowRoute } = this.props

        return (
            <div className="app-wrap-con" style={{ display: pathname === nowRoute ? 'block' : 'none' }}>
                <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
                    <div>
                        <Picker extra="请选择" data={district} cols={1}>
                            <ListItem arrow="horizontal" >发件小区</ListItem>
                        </Picker>
                        <List style={{ backgroundColor: 'white' }}>
                            <List.Item
                                extra={<a style={{ color: '#f60' }}>1号楼2单元505室</a>}
                                multipleLine
                            >
                                上门取件
                            </List.Item>
                        </List>
                        <List style={{ backgroundColor: 'white' }}>
                            <List.Item>
                                1号楼2单元505室
                            </List.Item>
                        </List>
                        <List style={{ backgroundColor: 'white' }}>
                            <List.Item>
                                1号楼2单元505室
                            </List.Item>
                        </List>
                        <List style={{ backgroundColor: 'white' }}>
                            <List.Item>
                                <div style={{ textAlign: 'right' }}>
                                    <a onClick={this.handleAddress} style={{ margin: 0, color: '#999' }}>添加上门取件门牌号></a>
                                </div>
                            </List.Item>
                        </List>
                        <WhiteSpace size="sm" />
                        <List style={{ backgroundColor: 'white' }}>
                            <List.Item
                                extra={<a>请选择</a>}
                                multipleLine
                            >
                                发件人信息
                            </List.Item>
                        </List>
                        <List style={{ backgroundColor: 'white' }}>
                            <List.Item
                                extra={<a style={{ color: '#f60' }}>李三</a>}
                                multipleLine
                            >
                                发件人姓名
                            </List.Item>
                        </List>
                        <List style={{ backgroundColor: 'white' }}>
                            <List.Item
                                extra={<a style={{ color: '#f60' }}>188888888888</a>}
                                multipleLine
                            >
                                发件人电话
                            </List.Item>
                        </List>
                        <List style={{ backgroundColor: 'white' }}>
                            <List.Item
                                extra={<a style={{ color: '#f60' }}>北京市昌平区流星花园三区5号楼4单元107室</a>}
                                multipleLine
                            >
                                发件人地址
                            </List.Item>
                        </List>
                        <List style={{ backgroundColor: 'white' }}>
                            <List.Item
                                extra={<a style={{ color: '#f60' }}>10100000329342384838</a>}
                                multipleLine
                            >
                                身份证号码
                            </List.Item>
                        </List>
                        <WhiteSpace size="sm" />
                        <List style={{ backgroundColor: 'white' }}>
                            <List.Item
                                extra={<a>请选择</a>}
                                multipleLine
                            >
                                收件人
                            </List.Item>
                        </List>
                        <List style={{ backgroundColor: 'white' }}>
                            <List.Item
                                extra={<a style={{ color: '#f60' }}>赵四</a>}
                                multipleLine
                            >
                                收件人姓名
                            </List.Item>
                        </List>
                        <List style={{ backgroundColor: 'white' }}>
                            <List.Item
                                extra={<a style={{ color: '#f60' }}>1666666666</a>}
                                multipleLine
                            >
                                收件人电话
                            </List.Item>
                        </List>
                        <List style={{ backgroundColor: 'white' }}>
                            <List.Item
                                extra={<a style={{ color: '#f60' }}>北京市昌平区流星花园三区5号楼4单元107室</a>}
                                multipleLine
                            >
                                收件人
                            </List.Item>
                        </List>
                        <List style={{ backgroundColor: 'white' }}>
                            <List.Item
                                extra={<a style={{ color: '#f60' }}>10100000329342384838</a>}
                                multipleLine
                            >
                                身份证号码
                            </List.Item>
                        </List>
                        <Picker extra="请选择" data={district} cols={1}>
                            <ListItem arrow="horizontal" >快递品类</ListItem>
                        </Picker>
                        <WhiteSpace size="sm" />
                        <Picker extra="请选择" data={district} cols={1}>
                            <ListItem arrow="horizontal" >快递公司</ListItem>
                        </Picker>
                        <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
                            <List.Item
                                extra={<a onClick={this.handleEstimate}>去估算</a>}
                                multipleLine
                            >
                                费用估算
                            </List.Item>
                        </List>

                    </div>
                    <div>
                        <WhiteSpace size="sm" />
                        <Card full>
                            <Card.Header
                                title="邮寄包裹"
                                extra={<span>马上付款</span>}
                            />
                            <Card.Body>
                                <div className="wait-list">
                                    <p><span>收件人姓名电话</span><span>张三四 18829388372</span></p>
                                    <p><span>收件人详细地址</span><span>北京市昌平区流星花园三区5号楼4单元107室</span></p>
                                    <p><span>重量/快递费</span><span>1.33公斤 / 25.00元</span></p>
                                    <p><span>状态</span><span>待支付</span></p>
                                </div>
                            </Card.Body>
                            <Card.Footer content="1.33公斤/25.00元" extra={<div>快递状态</div>} />
                        </Card>
                        <WhiteSpace size="sm" />
                        <Card full>
                            <Card.Header
                                title="邮寄包裹"
                                extra={<span>马上付款</span>}
                            />
                            <Card.Body>
                                <div className="wait-list">
                                    <p><span>收件人姓名电话</span><span>张三四 18829388372</span></p>
                                    <p><span>收件人详细地址</span><span>北京市昌平区流星花园三区5号楼4单元107室</span></p>
                                    <p><span>重量/快递费</span><span>1.33公斤 / 25.00元</span></p>
                                    <p><span>状态</span><span>待支付</span></p>
                                </div>
                            </Card.Body>
                            <Card.Footer content="1.33公斤/25.00元" extra={<div>快递状态</div>} />
                        </Card>
                        <WhiteSpace size="sm" />
                        <Card full>
                            <Card.Header
                                title="邮寄包裹"
                                extra={<span>马上付款</span>}
                            />
                            <Card.Body>
                                <div className="wait-list">
                                    <p><span>收件人姓名电话</span><span>张三四 18829388372</span></p>
                                    <p><span>收件人详细地址</span><span>北京市昌平区流星花园三区5号楼4单元107室</span></p>
                                    <p><span>重量/快递费</span><span>1.33公斤 / 25.00元</span></p>
                                    <p><span>状态</span><span>待支付</span></p>
                                </div>
                            </Card.Body>
                            <Card.Footer content="1.33公斤/25.00元" extra={<div>快递状态</div>} />
                        </Card>
                    </div>
                    <div>
                        <WhiteSpace size="sm" />
                        <Card full>
                            <Card.Header
                                title="邮寄包裹"
                                extra={<span>如风达T35343Ssdfsdf23423</span>}
                            />
                            <Card.Body>
                                <div>
                                    <p>张三四（188103378883）</p>
                                    <p>北京市昌平区流星花园三区5号楼4单元107室</p>
                                </div>
                            </Card.Body>
                            <Card.Footer content="1.33公斤/25.00元" extra={<div>快递状态</div>} />
                        </Card>
                        <WhiteSpace size="sm" />
                        <Card full>
                            <Card.Header
                                title="邮寄包裹"
                                extra={<span>如风达T35343Ssdfsdf23423</span>}
                            />
                            <Card.Body>
                                <div>
                                    <p>张三四（188103378883）</p>
                                    <p>北京市昌平区流星花园三区5号楼4单元107室</p>
                                </div>
                            </Card.Body>
                            <Card.Footer content="1.33公斤/25.00元" extra={<div>快递状态</div>} />
                        </Card>
                        <WhiteSpace size="sm" />
                        <Card full>
                            <Card.Header
                                title="邮寄包裹"
                                extra={<span>如风达T35343Ssdfsdf23423</span>}
                            />
                            <Card.Body>
                                <div>
                                    <p>张三四（188103378883）</p>
                                    <p>北京市昌平区流星花园三区5号楼4单元107室</p>
                                </div>
                            </Card.Body>
                            <Card.Footer content="1.33公斤/25.00元" extra={<div>快递状态</div>} />
                        </Card>
                    </div>
                </Tabs>
            </div>
        );
    }
}
