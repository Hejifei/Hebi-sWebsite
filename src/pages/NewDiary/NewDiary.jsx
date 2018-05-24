import React, {Component} from 'react';
import './NewDiary.less';
import LzEditor from 'react-lz-editor/editor/index';
import 'react-lz-editor/editor/components.css';
import 'react-lz-editor/global/supports/resources/system.css';
import 'react-lz-editor/global/supports/resources/default/iconfont.woff';
import 'react-lz-editor/global/supports/resources/default/iconfont.ttf';
// import 'react-lz-editor/global/supports/resources/default/iconfont.css'
// require('./components.css');


// require('../global/supports/resources/system.css');

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlContent: `<h1> Head level 1</h1>
                <p style='text-align:center;'><span style="color:#ED5565">red text</span>,center ,<strong>bold</strong>，<em>italic</em></p>
                <blockquote style='text-align:left;'><span style="color:#967adc">C</span> <span style="color:#a0d468">O</span><span style="color:#48cfad">L</span><span style="color:#4a89dc">O</span><span style="color:#967adc">R</span><span style="color:#434a54">S</span></blockquote>
                <p>Note that the upload feature cannot be uploaded in this demo page because of server configuration. Here only the code demos are available.</p>
                <p><br></p>
                <ul>
                  <li><span style="color:#434a54">list 1</span></li>
                  <li><span style="color:#434a54">list 2</span></li>
                  <li><span style="color:#434a54">list 3</span></li>
                </ul>
                <pre><code>Block here.Block here.Block here.Block here.</code></pre>
                <pre><code>Block here.Block here.Block here.Block here.Block here.</code></pre>
                <pre><code>Block here.Block here.Block here.Block here.Block here.</code></pre>
                <p><img src="https://image.qiluyidian.mobi/43053508139910678747.jpg"/></p>
                <p><br></p>
                <h2>Yankees, Peeking at the Red Sox, Will Soon Get an Eyeful</h2>
                <p>Leaning over the railing from his perch on the top step of the first-base dugout this past weekend in Cleveland, Yankees Manager Joe Girardi did not have to divert his gaze to catch glimpses of the out-of-town scoreboard./p>
                <p>It was all there on the left-field wall.</p>
                <p>“You’re going to look — it’s impossible not to,” Girardi said. “I haven’t seen a ballpark where they put it behind you. You pay attention, of course.”</p>
                <p>Whenever Girardi stole a glance, there was rarely any good news for the Yankees. While Girardi’s charges were clawing their way to a split of their four-game series against the formidable Indians, the Boston Red Sox were plowing past the rebuilding Chicago White Sox, sweeping four games at Fenway Park.</p>`,
      markdownContent: "## HEAD 2 \n markdown examples \n ``` welcome ```",
      rawContent: '{"entityMap":{"0":{"type":"image","mutability":"IMMUTABLE","data":{"src":"https://image.qiluyidian.mobi/4305350813991067' +
          '8747.jpg"}},"1":{"type":"image","mutability":"IMMUTABLE","data":{"src":"https://image.qiluyidian.mobi/430535081399106787' +
          '47.jpg"}}},"blocks":[{"key":"fr2lj","text":"Yankees, Peeking at the Red Sox, Will Soon Get an Eyeful","type":"header-one","depth":0,"inlineStyleRanges":[],"entityRanges":[]' +
          ',"data":{}},{"key":"90kdv","text":"Leaning over the railing from his perch on the top step of the first-base dugout this past weekend in Cleveland, Yankees Manager Joe Girardi did not have to divert his gaze to catch glimpses of the out-of-town scoreboard.","type":"unstyled","depth":0,"inlin' +
          'eStyleRanges":[],"entityRanges":[],"data":{}},{"key":"b60ni","text":"Whenever Girardi stole a glance, there was rarely any good news for the Yankees. While Girardi’s charges were clawing their way to a split of their four-game series against the formidable Indians, the Boston Red Sox were plowing past the rebuilding Chicago White Sox, sweeping four games at Fenway Park.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"eui4h","text' +
          '":"The Yankees, who trail the Red Sox by three games in the American League East, will have their rivals right in front of them on three of the next four weekends, beginning Friday night at Yankee Stadium.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],' +
          '"data":{}},{"key":"29t6l","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"lengt' +
          'h":1,"key":0}],"data":{}},{"key":"7ujeo","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],' +
          '"data":{}},{"key":"3n9d4","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"lengt' +
          'h":1,"key":1}],"data":{}},{"key":"9r0k2","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],' +
          '"data":{}}]}',
      responseList: []
    }
    this.receiveHtml=this.receiveHtml.bind(this);
  }
  receiveHtml(content) {
    console.log("recieved HTML content", content);
    this.setState({responseList:[]});
  }
  render() {
    let policy = "";
    const uploadProps = {
      action: "http://v0.api.upyun.com/devopee",
      onChange: this.onChange,
      listType: 'picture',
      fileList: this.state.responseList,
      data: (file) => {

      },
      multiple: true,
      beforeUpload: this.beforeUpload,
      showUploadList: true
    }
    return (
      <div>
        <div>Editor demo 2 (use markdown format ):
        </div>
        <LzEditor
          active={true}
          importContent={this.state.markdownContent}
          cbReceiver={this.receiveMarkdown}
          image={false}
          video={false}
          audio={false}
          convertFormat="markdown"/>
      </div>
    );
  }
}
export default class Newstate extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
       
        return (
            <div>
                日记
                <Test />
            </div>
            
        )
    }
}