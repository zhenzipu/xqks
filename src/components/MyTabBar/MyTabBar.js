import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { TabBar } from 'antd-mobile';

const TabBarItem = TabBar.Item

class MyTabBar extends Component {
    navTo = (nav) => {
        console.log(11,nav)
        this.props.history.replace(nav);
    }
    render() {
        let { showRoute, location } = this.props
        let show = showRoute.indexOf(location.pathname) === -1
        return (
            <TabBar
                unselectedTintColor="#666"
                tintColor="#f60"
                barTintColor="black"
                noRenderContent={true}
                hidden={show}
            >
                <TabBarItem
                    icon={{ uri: require('../../assets/images/receive.svg') }}
                    selectedIcon={{ uri: require('../../assets/images/receive_act.svg') }}
                    title="Receive"
                    key="Receive"
                    selected={showRoute[0] === location.pathname}
                    // badge={1}
                    onPress={() => { this.navTo(showRoute[0]) }}
                >
                </TabBarItem>
                <TabBarItem
                    title="Send"
                    key="Send"
                    icon={{ uri: require('../../assets/images/send.svg') }}
                    selectedIcon={{ uri: require('../../assets/images/send_act.svg') }}
                    selected={showRoute[1] === location.pathname}
                    onPress={() => { this.navTo(showRoute[1]) }}
                >
                </TabBarItem>
                <TabBarItem
                    icon={{ uri: require('../../assets/images/mine.svg') }}
                    selectedIcon={{ uri: require('../../assets/images/mine_act.svg') }}
                    title="Mine"
                    key="Mine"
                    selected={showRoute[2] === location.pathname}
                    onPress={() => { this.navTo(showRoute[2]) }}
                >
                </TabBarItem>
            </TabBar>
        );
    }
}

export default withRouter(MyTabBar);
