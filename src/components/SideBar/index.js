import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: false }
    }

    handleCollaps() {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {
        return (
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.handleCollaps.bind(this)}>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ height: '100%', borderRight: 0 }}>
                    <Menu.Item key="1">
                        <Icon type="home" /> <span>Home</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="upload" /> <span>Inserir Música</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="bar-chart" /> <span>Mixer</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default SideBar;