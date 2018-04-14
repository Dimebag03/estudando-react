import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;

function CustomHeader() {
    return (
        <Header>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}>
                <Menu.Item key="1" style={{ float: 'right' }}>
                    <Link to='/login'><Icon type="poweroff" /> Logout</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default CustomHeader;