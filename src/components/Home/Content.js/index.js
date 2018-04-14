import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

function HomeContent() {
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                Content
            </Content>
        </Layout>
    );
}

export default HomeContent;