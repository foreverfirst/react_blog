import React from 'react'

import {Table, Radio, Input, Button} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];



export default class BlogDetail extends React.Component {

  handleLink = (e) => {

  }

    render() {
        return (
            <div>
        <Radio.Group defaultValue="a" buttonStyle="solid" onChange={this.handleLink } style={{marginTop: 16}}>
          <Radio.Button value="a" >全部文章</Radio.Button>
          <Radio.Button value="b" disabled>已发表</Radio.Button>
          <Radio.Button value="c">草稿箱</Radio.Button>
          <Radio.Button value="d">回收站</Radio.Button>
          <Radio.Button value="e">博客管理</Radio.Button>
          <Radio.Button value="f">博客配置</Radio.Button>
        </Radio.Group>
        <div style={{marginTop:15}}>
           <Input placeholder={"通过标题搜索该分类下的博客..."} style={{width: 400}} size={"middle"} >

        </Input>
          <Button icon={<SearchOutlined />} style={{marginLeft:5}} size={"middle"}>
          </Button>
        </div>
              <Table dataSource={dataSource} columns={columns}/>



            </div>
    )
    }
}