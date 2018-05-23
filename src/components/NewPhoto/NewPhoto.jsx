import React, {Component} from 'react';
import './NewPhoto.less';

import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon, Rate,
  } from 'antd';
  const FormItem = Form.Item;
  
  class Demo extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
    normFile = (e) => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };
      return (
        <Form onSubmit={this.handleSubmit}>
          
          <FormItem
            {...formItemLayout}
            label="Dragger"
            style={{margin:'20px 0 0 0'}}
          >
            <div className="dropbox">
              {getFieldDecorator('dragger', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                </Upload.Dragger>
              )}
            </div>
          </FormItem>
  
          <FormItem
            wrapperCol={{ span: 12, offset: 6 }}
          >
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      );
    }
}
  
const WrappedDemo = Form.create()(Demo);

export default class Newstate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textareavalue:'',
            showOrhide:false
        };
        this.stateaddClose = this.stateaddClose.bind(this);
    }
    stateaddClose(){
        this.setState(prevState=>({
            showOrhide : false
        }))
    }
    componentWillReceiveProps(nextProps){
        this.setState({showOrhide:nextProps.ifshow})
    }
    render() {
        const showorhide = this.state.showOrhide;
        return (
            <div>
                {showorhide ? (
                    <div className='homeaddinfoC AddNewphotoC'>
                        <a className='closea' onClick={this.stateaddClose}></a>
                        {/* <input type='file'/> */}
                        <WrappedDemo />
                    </div>
                ) : ('')}
            </div>
            
        )
    }
}