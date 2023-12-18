import {
    DesktopOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  onClick?: () => void,
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    onClick,
  } as MenuItem;
}


type PageComponentProps = {
    children: ReactNode,
    pageTitle?: string,
}

const items: MenuItem[] = [
  getItem('Home', '1', <PieChartOutlined />),
  getItem('Board', '2', <DesktopOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Login', '3'),
    getItem(<Link to='/sign-up'>SignUp</Link>, '4'),
  ]),
  getItem('Questions', 'sub2', <TeamOutlined />),
];

const MenuFrame: React.FC<PageComponentProps> = ({children, pageTitle}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        {getMenuComponent(pageTitle)}
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          {getBreadcrumb(pageTitle)}
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

const getMenuComponent: React.FC<string|undefined> = (pageTitle?: string) => {
    if(pageTitle === "signUp"){
        return (
            <Menu theme="dark" openKeys={['sub1']} defaultSelectedKeys={['4']} mode="inline" items={items} />
        );
    }
    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    );
    
};

const getBreadcrumb: React.FC<string|undefined> = (pageTitle?: string) => {
    if(pageTitle === "signUp"){
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>SignUp</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default MenuFrame;