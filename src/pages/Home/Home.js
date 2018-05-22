import React, {Component} from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Popover,Button,Icon  } from 'antd';
import { Picker ,Emoji  } from 'emoji-mart'

import Titleimg from './tl-title-new.png';
import './Home.less';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
        this.addEmoji = this.addEmoji.bind(this);
        this.hide = this.hide.bind(this);
        this.showOrhide = this.showOrhide.bind(this);
    }
    hide = () => {
        this.setState({
          visible: false,
        });
    }
    showOrhide(){
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }
    addEmoji(emoji){
        console.log(emoji)
    }

    render() {
        const content = (
            <div>
                <Picker  title='Pick your emoji…' emoji='point_up' set='emojione'  onSelect={this.addEmoji}/>
            </div>
            
        );
        // const content = (
        //     <div>
        //       <p>Content</p>
        //       <p>Content</p>
        //     </div>
        //   );
        return (
            <div>
                <div className='EditC'>
                    <div className='hometitle'><img src={Titleimg} /></div>
                    <div className='editTypeC'>
                        <div className='editTypeson'>
                            <i className='stateicon sicon1'></i>发表状态
                        </div>
                        <div className='editTypeson'>
                            <i className='stateicon sicon2'></i>发表状态
                        </div>
                        <div className='editTypeson'>
                            <i className='stateicon sicon3'></i>发表状态
                        </div>
                        <div className='editTypeson'>
                            <i className='stateicon sicon4'></i>发表状态
                        </div>
                    </div>
                    <div className='homeaddinfoC AddNewstateC'>
                        <textarea></textarea>
                        <Icon type="smile"  style={{ fontSize: 16, color: '#08c'}} />
                        <Popover visible={this.state.visible} content={content} title="Title" trigger="click" style={{width:'355px',height:'421px'}}>
                            <span onClick={this.showOrhide}><Emoji emoji={{ id: 'slightly_smiling_face', skin: 3 }} size={25} /></span>
                        </Popover>
                        <Popover content={content} title="Title" trigger="click">
                        <Button>Click me</Button>
                        </Popover>
                        <div className='ANSsubmitLine'>
                            <a>发布</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}