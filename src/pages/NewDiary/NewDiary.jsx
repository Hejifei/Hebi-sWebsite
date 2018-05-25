import React, {Component} from 'react';
import './NewDiary.less';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

export default class Newstate extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRawChange = this.handleRawChange.bind(this);
    }
    handleChange = (content) => {
      console.log(content)
    }
  
    handleRawChange = (rawContent) => {
      console.log(rawContent)
    }
    render() {
      const editorProps = {
        height: 500,
        contentFormat: 'raw',//指定初始内容跟onChange的内容格式
        initialContent: '<p>Hello World!</p>',//表机器的初始内容
        onSave : this.handleChange,
        onRawChange: this.handleRawChange,
        media :{
          allowPasteImage: true, // 是否允许直接粘贴剪贴板图片（例如QQ截图等）到编辑器
          image: true, // 开启图片插入功能
          video: true, // 开启视频插入功能
          audio: true, // 开启音频插入功能
          validateFn: null, // 指定本地校验函数，说明见下文
          uploadFn: null, // 指定上传函数，说明见下文
          removeConfirmFn: null, // 指定删除前的确认函数，说明见下文
          onRemove: null, // 指定媒体库文件被删除时的回调，参数为被删除的媒体文件列表(数组)
          onChange: null, // 指定媒体库文件列表发生变化时的回调，参数为媒体库文件列表(数组)
          onInsert: null, // 指定从媒体库插入文件到编辑器时的回调，参数为被插入的媒体文件列表(数组)
        },
        imageControls:{
          floatLeft: true,
          floatRight: true,
          alignLeft: true,
          alignCenter: true,
          alignRight: true,
          link: true,
          size: true
        }
      }
        return (
            <div>
                日记
                <div className="editorC">
                  <BraftEditor {...editorProps}/>
                </div>
            </div>
            
        )
    }
}