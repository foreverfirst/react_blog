//引入react jsx写法的必须
import React from 'react'; 
//引入一些模块
import { BrowserRouter as Router, Route} from "react-router-dom";
//引入需要用到的页面组件 
import Home from '../layouts/layout';
import ArticleList from '../page/ArticleList';
import PostArticle from '../page/PostArticle';
import BlogDetail from '../page/BlogDetail';
import UserMana from '../page/UserMana';
import CateMana from '../page/CateMana';
import DataCharts from '../page/DataCharts';

function MyRouter(){
    return (
        <Router>
            <Route exact path="/home" component={Home} />
            <Route path="/articleList" component={ArticleList} />
            <Route path="/postArticle" component={PostArticle} />
            <Route path="/blogDetail" component={BlogDetail} />
            <Route path="/editBlog" component={PostArticle} />
            <Route path="/user" component={UserMana} />
            <Route path="/cateMana" component={CateMana} />
            <Route path="/charts" component={DataCharts} />
        </Router>
    );
}

export default MyRouter;