
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { HomeInfo } from '@/view/Home'
import { Send } from '@/view/Send'
import { Receive } from '@/view/Receive'
import { Mine } from '@/view/Mine'
import { Login } from '@/view/Login'
import { Record } from '@/view/Record'
import { Address } from '@/view/Address'
import { Estimate } from '@/view/Estimate'
import { ReceiveDetail } from '@/view/ReceiveDetail'
import { SendDetail } from '@/view/SendDetail'
// import { Button } from 'antd-mobile';
import { MyTabBar } from '@components';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentWillReceiveProps(nextProps) {
		let pathName = this.props.location.pathname
		let pathNameNew = nextProps.location.pathname
		if (pathNameNew !== pathName) {
			console.log('------------路由改变', pathName, pathNameNew)
			this._navToLogin(nextProps)
		}
	}
	componentWillMount() {
		this._navToLogin(this.props)
	}
	// 判断是否登录，未登录则跳转到登录页面
	_navToLogin(props) {
		if (props.location.pathname.indexOf('login') === -1 && !sessionStorage.getItem('login')) { // 非登录页面
			props.history.replace('/login');
		}
	}
	render() {
		console.log('-------app:', this.props)
		let showRoute = ['/receive', '/send', '/mine']
		let { location, history } = this.props
		return (
			<div className="app-wrap">
				<div className="app-wrap" style={{ display: showRoute.indexOf(location.pathname) === -1 ? 'none' : 'flex' }}>
					<Receive nowRoute='/receive' location={{ ...location }} history={{ ...history }} />
					<Send nowRoute='/send' location={{ ...location }} history={{ ...history }} />
					<Mine nowRoute='/mine' location={{ ...location }} history={{ ...history }} />
					<MyTabBar showRoute={showRoute} />
				</div>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/record" component={Record} />
					<Route path="/address" component={Address} />
					<Route path="/estimate" component={Estimate} />
					<Route path='/receive_detail' component={ReceiveDetail}/>
					<Route path='/send_detail' component={SendDetail}/>
					<Route path="/homeInfo" component={HomeInfo} />
				</Switch>
			</div>
		)
	}
}

export default withRouter(App)
