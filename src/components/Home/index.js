import React from 'react';
import { Layout } from 'antd';
import CustomFooter from '../CustomFooter';
import CustomHeader from '../CustomHeader';
import SideBar from '../SideBar';
import Content from './Content.js';

function Home() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <CustomHeader />
            <Layout>
                <SideBar />
                <Content />
            </Layout>
            <CustomFooter />
        </Layout>
    );
}

export default Home;