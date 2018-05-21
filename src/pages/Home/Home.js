import React, {Component} from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import Titleimg from './tl-title-new.png';
import './Home.less';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    

    render() {
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
                        <Picker set='emojione' />
                        {/* <Picker onSelect={this.addEmoji} />
                        <Picker title='Pick your emoji…' emoji='point_up' />
                        <Picker style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
                        <Picker i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }} /> */}
                        <div className='ANSsubmitLine'>
                            <a>发布</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}