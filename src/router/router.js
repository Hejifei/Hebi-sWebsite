import React,{Component} from 'react';
import { Icon  } from 'antd';

import {BrowserRouter as Router,Redirect, Route, Switch, Link,IndexLink} from 'react-router-dom';
import {PubliLayout} from 'components/Layout/Layout';

import LazyLoad from 'components/Loading/Loading';
import LoginChcek from './LoginChcek';
import 'antd/lib/button/style/css';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import Shop from 'bundle-loader?lazy&name=userInfo!pages/Shop/Shop';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
import Player from 'bundle-loader?lazy&name=player!pages/Player/Player';
import Login from 'bundle-loader?lazy&name=login!pages/Login/Login';
import DateBook from 'bundle-loader?lazy&name=datebook!pages/DateBook/DateBook';
import NewDiary from 'bundle-loader?lazy&name=newdiary!pages/NewDiary/NewDiary';
import Three from 'bundle-loader?lazy&name=three!pages/Three/Three';

export class Menulist extends React.Component{
    render(){
        return (
            <ul>
                <li><Link to="/home"><Icon type="home" /> 首页</Link></li>
                {/* <li><Link to="/page1" activeClassName='current'><Icon type="smile-o" /> Page1</Link></li>
                <li><Link to="/counter" activeClassName='current'><Icon type="picture" /> Counter</Link></li>
                <li><Link to="/userinfo" activeClassName='current'><Icon type="notification" /> UserInfo</Link></li>
                <li><Link to="/shop" activeClassName='current'><Icon type="notification" /> Redux</Link></li> */}
                <li><Link to="/newdiary"><Icon type="smile-o" /> 日志</Link></li>
                <li><Link to="/datebook"><Icon type="notification" /> 大事记</Link></li>
                <li><Link to="/three" ><Icon type="notification" /> Three.js</Link></li>
            </ul>
        )
    }
}
export class GetRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/login"  component={LazyLoad(Login)}/>
                        <Route path="/" component={PubliLayout} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export class RouterSon extends React.Component {
    render() {
        return (
            <div className='contentWrapper'>     
                <Route path="/home" component={LoginChcek(LazyLoad(Home))} />
                {/* <Redirect from='/' to='/home' /> */}
                <Route path="/page1" component={LoginChcek(LazyLoad(Page1))} />
                <Route path="/counter" component={LoginChcek(LazyLoad(Counter))} />
                <Route path="/userinfo" component={LoginChcek(LazyLoad(UserInfo))} />
                <Route path="/shop" component={LoginChcek(LazyLoad(Shop))} />
                <Route path='/datebook' component={LoginChcek(LazyLoad(DateBook))}/>
                <Route path='/newdiary' component={LoginChcek(LazyLoad(NewDiary))}/>
                <Route path='/three' component={LoginChcek(LazyLoad(Three))}/>
                <Route path='/404' component={LoginChcek(LazyLoad(NotFound))} />
                {/* <Redirect from='*' to='/404' /> */}
                {/* <Route path="*" component={LoginChcek(LazyLoad(NotFound))}/> */}
            </div>
            )
    }
}