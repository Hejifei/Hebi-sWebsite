import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


function LoginChcek(Component) {
  // 组件有已登陆的模块 直接返回 (防止从新渲染)
  if (Component.AuthenticatedComponent) {
    return Component.AuthenticatedComponent
  }

  // 创建验证组件
  class AuthenticatedComponent extends React.Component {
    // static contextTypes = {
    //   router: PropTypes.object.isRequired,
    // }
    // // static contextTypes = {router: PropTypes.object.isRequired};
    constructor(props,context) {
        super(props,context);
        this.state = {
            login: true
        }
    }

    componentWillMount() {
      // this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
      // this.checkAuth();
    }

    checkAuth() {

      // 判断登陆
      // const token  = this.props.token;
      // const login = token ? token.login : null;
      const login = this.state.login;

      // 未登陆重定向到登陆页面
      if (!login) {
        let redirect = this.props.location.pathname + this.props.location.search;
        this.props.history.push('/login')
        this.setState({
          redirect
        })
        // this.context.router.push({ pathname : '/login', state : { msg : 'you do not login yet, please login' }})
        // this.props.history.push('/login?message=401&redirect_uri=' + encodeURIComponent(redirect));
        // this.context.router.push('/login?message=401&redirect_uri=' + encodeURIComponent(redirect));
        return;
      }

      this.setState({login});
    }

    render() {
      if (this.state.login) {
        return <Component {...this.props}/>
      }
      // return ''
      return (<Redirect to={'/login?redirect_uri=' + encodeURIComponent(this.state.redirect)} />)
      // return <Component {...this.props}/>
    }
  }

  // 不使用 react-redux 的话直接返回
  // Component.AuthenticatedComponent = AuthenticatedComponent
  // return Component.AuthenticatedComponent


  function mapStateToProps(state) {
    return {
      token: state.token,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {};
  }
  Component.AuthenticatedComponent = connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
  return Component.AuthenticatedComponent
}
export default LoginChcek;