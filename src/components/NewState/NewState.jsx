import React, {Component} from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker ,Emoji  } from 'emoji-mart'
import { Popover,Button,Icon  } from 'antd';
import './NewState.less';


export default class Newstate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textareavalue:'',
            showOrhide:false
        }
        this.addEmoji = this.addEmoji.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.stateaddClose = this.stateaddClose.bind(this);
    }
    handleChange(event){
        this.setState({textareavalue:event.target.value})
    }
    addEmoji(emoji){
        this.setState(prevState=>({
            textareavalue : prevState.textareavalue + emoji.native
        }))
        // console.log(emoji)
    }
    stateaddClose(){
        this.setState(prevState=>({
            showOrhide : false
        }))
    }

    componentWillReceiveProps(nextProps){
        this.setState({showOrhide:nextProps.ifshow})
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextProps.ifshow)
    //     console.log(this.state.showOrhide)
    //     return !(nextProps.ifshow ===this.state.showOrhide);
    // }
    render() {
        const showorhide = this.state.showOrhide;
        const content = (
            <div>
                <Picker  title='Pick your emoji…' emoji='point_up' set='emojione'  onSelect={this.addEmoji}  i18n={{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }}/>
            </div>
        );
        return (
            <div>
                {showorhide ? (
                    <div className='homeaddinfoC AddNewstateC'>
                        <a className='closea' onClick={this.stateaddClose}></a>
                        <textarea value={this.state.textareavalue} onChange={this.handleChange}></textarea>
                        {/* 表情包 */}
                        <Popover content={content} title="Title" trigger="click" style={{width:'355px',height:'421px'}}>
                            <span className='bqleft10'><Emoji emoji={{ id: 'slightly_smiling_face', skin: 3 }} size={25} /></span>
                        </Popover>
                        <div className='ANSsubmitLine'>
                        <a>发布</a>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
            
        )
    }
}