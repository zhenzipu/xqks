import React, { Component } from 'react';
import { Flex, Card, WhiteSpace } from 'antd-mobile';
import './Mine.less';
// const Item = List.Item;
// const RadioItem = Radio.RadioItem;
export default class Mine extends Component {
    render() {
        let { pathname } = this.props.location
        let { nowRoute } = this.props
        return (
            <div className="app-wrap-con" style={{ display: pathname === nowRoute ? 'block' : 'none' }}>
                <div style={{height:'100%',overflow:'auto'}}>
                    <Flex justify="center" direction="row" align="center" style={{ background: '#ff6700', width: '100%', height: '112px' }} >
                        <Flex.Item>
                            <div className="head-img">
                                <img src={require('@/assets/images/mine.svg')} alt="" />
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className="user-info">
                                <p>测试</p>
                                <p>18888888888</p>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className="user-account">
                                <p>222.00</p>
                                <a>我的钱包></a>
                            </div>
                        </Flex.Item>
                    </Flex>
                    <Card full>
                        <Card.Body>
                            <div className="card-list">
                                <div className="card-header">
                                    <p className="card-title">关联的可取件手机号</p>
                                    <p className="card-extra">(自己可以取关联号码的包裹，自己的包裹也可由关联号码代取)</p>
                                </div>
                                <div className="card-con">
                                    <ul>
                                        <li>
                                            <span>18810881888</span>
                                            <span className="card-del"><img src={require('@/assets/images/close.svg')} /></span>
                                        </li>
                                        <li>
                                            <span>16610661666</span>
                                            <span className="card-del"><img src={require('@/assets/images/close.svg')} /></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <a>添加更多可取件手机号></a>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <WhiteSpace size="sm" />
                    <Card full>
                        <Card.Body>
                            <div className="card-list">
                                <div className="card-header">
                                    <p className="card-title">住户姓名</p>
                                </div>
                                <div className="card-con">
                                    <ul>
                                        <li>
                                            <span>张三四</span>
                                            <span className="card-del"><img src={require('@/assets/images/close.svg')} /></span>
                                        </li>
                                        <li>
                                            <span>刘洪斌</span>
                                            <span className="card-del"><img src={require('@/assets/images/close.svg')} /></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <a>添加更多></a>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <WhiteSpace size="sm" />
                    <Card full>
                        <Card.Body>
                            <div className="card-list">
                                <div className="card-header">
                                    <p className="card-title">住户地址</p>
                                    <p className="card-extra">(勾选的为默认地址，用于上门取件)</p>
                                </div>
                                <div className="card-con">
                                    <ul>
                                        <li>
                                            <span>东亚上北中心11号楼4单元201</span>
                                            <span className="card-del"><img src={require('@/assets/images/select.svg')} /></span>
                                        </li>
                                        <li>
                                            <span>王府花园1号院1号门</span>
                                            <span className="card-del"><img src={require('@/assets/images/select_act.svg')} /></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <a>添加更多></a>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}
