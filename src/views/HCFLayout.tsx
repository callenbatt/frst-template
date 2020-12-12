import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function HCFLayout() {
  return (
    <Layout className="layout">
      <Header style={{color: "#fff"}}>header</Header>
      <Content>content</Content>
      <Footer>footer</Footer>
    </Layout>
  );
}
export default HCFLayout;
