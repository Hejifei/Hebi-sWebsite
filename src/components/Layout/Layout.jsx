import React, {Component} from 'react';
import { Icon,Badge  } from 'antd';
import 'antd/lib/button/style/css';
import './Layout.css';
import './index-1.css'
import headerImg from './mini_default_room.png';
import {Menulist,RouterSon} from 'router/router'

export class PubliLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        headerInfoShow: false,
        display_name:'none'
    };
    this.headerInfoClick = this.headerInfoClick.bind(this);
  }
  componentDidMount(){
    // console.log(this.props.match.url)

  }

  headerInfoClick(){
    this.setState(prevState => ({
      headerInfoShow: !prevState.headerInfoShow,
      display_name:(!prevState.headerInfoShow)?'block':'none'
    }));
  }

  render() {
    return (
      <div>
        <div className='headArea'>
          <div className='hader'>
            <div className='haderlogo'>何必成长日记</div>
            <div className='headerPInfo'>
              <div className='headerBtnGrp'>
                <a className='headerBtnAC' onClick={this.headerInfoClick}>
                  <img src={headerImg} />
                  <Icon type={this.state.headerInfoShow ?"caret-up":"caret-down"}  />
                </a>
                <div className='headerInfoC' style={{ display: this.state.headerInfoShow ?"block":"none"}}>
                  <Icon type="caret-up" style={{color: '#fff'}}/>
                  <ul>
                    <li>
                      <div className='name'><Icon type="user" /> 何必爸爸</div>
                      <div className='emailline'>657414658@qq.com</div>
                    </li>
                    <li>
                      <a className='infoline'><Icon type="setting"/> 设置</a>
                    </li>
                    <li>
                      <a className='infoline'><Icon type="poweroff" /> 退出</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='headBtmWarp'>
          <div className='compWrapper'>
            <div className='compInnerWrapper'>
              <div className='compContainer'>
                <a>设置封面</a>
              </div>
              <div className='compContaButtom'>
                <div className='avatar-container'>
                  <img src={headerImg} />
                  <a>何爸爸</a>
                </div>
                <div className='avatar-container avatar2'>
                  <img src={headerImg} />
                  <a>汪妈妈</a>
                </div>
                <p className='CBp'>爱情宣言</p>
                <div className='CBtxt'>
                  何必小宝贝，2018年6月20号就要来到我们这个小家了，爸爸特此为何必宝宝建立了这个网站，以此来跟汪妈妈一起记录何必的点点滴滴。
                  <Icon type="smile" /><Icon type="smile" /> <Icon type="smile-o" /><Icon type="smile-o" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bodyWrap'>
          <div className='bdContent clearfix'>
            <div className='bCmenu'>
              {/* 左侧菜单 */}
              <Menulist />
            </div>
            <div className='bCcontent'>
              {/* 右侧内容 */}
              <RouterSon />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



// class Layout extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     // 这里必须是一个元素，否则会发出警告。
//     const children = this.props.children;
//     return (
//       <div>
//         <header>Header</header>
//           {children}
//         <footer>Foot</footer>
//       </div>
//     );
//   }
// }

// export default Layout;