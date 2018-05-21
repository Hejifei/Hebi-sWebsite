import React, {Component} from 'react';
import 'antd/lib/button/style/css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

// const Loginbg = require('./loginbg');


import './Login.less';
import './loginbg.css';
import Loginbg from './loginbg';
const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: ''
        }
    }
    componentWillMount(){
        if(this.props.location.search){
            this.setState({
                redirect:decodeURIComponent((this.props.location.search).substr(1).split('=')[1])
            })
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='loginOut'>
                {/* <header className='loginHeader'>
                    
                </header> */}
                {/* <img src={loginbg} /> */}
                <Loginbg/>
                {/* <svg className='loginbg' style={{width:'1250',height:'630',}}  dangerouslySetInnerHTML={{__html: loginbg }} /> */}
                <div className='loginContent'>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        {/* <a className="login-form-forgot" href="">Forgot password</a> */}
                        <Button type="primary" htmlType="submit" className="login-form-button loginBtn">
                            Log in
                        </Button>
                        {/* Or <a href="">register now!</a> */}
                        </FormItem>
                    </Form>
                </div>
                
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;