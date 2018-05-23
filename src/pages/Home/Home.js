import React, {Component} from 'react';

import Titleimg from './tl-title-new.png';
import NewState from 'components/NewState/NewState';
import NewPhoto from 'components/NewPhoto/NewPhoto';
import './Home.less';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            stateShow:false,
            photoShow:false
        };
        this.stateAddshow = this.stateAddshow.bind(this);
        this.photoAddshow = this.photoAddshow.bind(this);
    }
    stateAddshow(){
        this.setState(prevState=>({
            stateShow :  true,
            photoShow : false
        }))
    }
    photoAddshow(){
        this.setState(prevState=>({
            stateShow :  false,
            photoShow : true
        }))
    }

    render() {
        return (
            <div>
                <div className='EditC'>
                    <div className='hometitle'><img src={Titleimg} /></div>
                    <div className='editTypeC'>
                        <div className='editTypeson' onClick={this.stateAddshow}>
                            <i className='stateicon sicon1'></i>发表状态
                        </div>
                        <div className='editTypeson' onClick={this.photoAddshow}>
                            <i className='stateicon sicon2'></i>上传照片
                        </div>
                        <div className='editTypeson'>
                            <i className='stateicon sicon3'></i>写日志
                        </div>
                    </div>
                    <NewState ifshow={this.state.stateShow}  />
                    <NewPhoto ifshow={this.state.photoShow} />
                </div>
            </div>
        )
    }
}