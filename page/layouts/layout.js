import { Layout, Menu, Breadcrumb, Switch } from 'antd';
import { Icon } from '@ant-design/compatible';
import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './layout.css';

import ArticleList from '../ArticleList';
import PostArticle from '../PostArticle';
import BlogDetail from '../BlogDetail';
import UserMana from '../UserMana';
import CateMana from '../CateMana';
import DataCharts from '../DataCharts';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class MyLayout extends Component {

    rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];
    state = {
        openKeys: [],
        collapsed: false,
        mode: 'inline',
        theme: 'light',
        cookie: '',
        param: '',

    };

    showCookie = param => {
        const reg = new RegExp(`(^|&)${param}=([^&]*)(&|$)`);
        const r = this.props.location.search.substr(1).match(reg);
        this.setState({cookie: r!=null ? decodeURIComponent(r[2]) : null});
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    changeMode = value => {
        this.setState({
            mode: value ? 'vertical' : 'inline',
        });
    }

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    render() {
        return (
            <Router>
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <div className="switch" style={{ background: '#fff' }}>
                        <Switch onChange={this.changeMode} /> 
                        Mode
                        <br/>
                        {/* <Divider type="vertical" /> */}
                        <Switch onChange={this.changeTheme} /> 
                        Style
                    </div>

                    <Menu
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        mode={this.state.mode}
                        theme={this.state.theme}
                        style={{ height: '91%' }}
                    >
                        <SubMenu key="sub1" icon={<Icon type={'User'} />} title="文章管理">
                            <Menu.Item key="1">
                                <Link to="/articleList">文章列表</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/postArticle">发表文章</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/blogDetail">博客详情</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/editBlog">编辑博客</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<Icon type={'Laptop'} />} title="用户管理">
                            <Menu.Item key="5">
                                <Link to="/user">用户管理</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<Icon type={'Notification'} />} title="栏目管理">
                            <Menu.Item key="6">
                                <Link to="/cateMana">栏目管理</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<Icon type={'Notification'} />} title="数据统计">
                            <Menu.Item key="7">
                                <Link to="/charts">数据统计</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#000', padding: 0 }}>
                        <span style={{ color: '#fff', paddingLeft: '2%', fontSize: '1.4em' }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{ cursor: 'pointer' }}
                            />
                        </span>
                        <span style={{ color: '#fff', paddingLeft: '2%', fontSize: '1.4em' }}>V部落博客管理平台</span>
                        <span style={{ color: '#fff', float: 'right', paddingRight: '1%' }}>
                            <img src={logo} className="App-logo" alt="logo" />
                        </span>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 740 }}>
                            <Route path="/articleList" component={ArticleList} />
                            <Route path="/postArticle" component={PostArticle} />
                            <Route path="/blogDetail" component={BlogDetail} />
                            <Route path="/editBlog" component={PostArticle} />
                            <Route path="/user" component={UserMana} />
                            <Route path="/cateMana" component={CateMana} />
                            <Route path="/charts" component={DataCharts} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
            </Router>
        );
    }
}