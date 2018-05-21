import React, {Component} from 'react';
import './DateBook.less';
const svg1 = require('./1.svg');
const svg2 = require('./2.svg');
const svg3 = require('./3.svg');
const svg4 = require('./4.svg');
const svg5 = require('./5.svg');

export default class DateBook extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='DBtitle'>大事记</div>
                <div className="DBcontent">
                    <div className='line'></div>
                    {/* 右 */}
                    <div class="year-glory year-glory-right" style={{top: 0,right:'-40px',border:'1px solid #aadf06'}}>
                        我们终于有了自己的小窝，理想家园 53幢304，虽然不是什么高档小区，但是毕竟我们还年轻，慢慢来。
                        <div class="circle" style={{top:'2px',left:'-30px',borderColor:'#aadf06'}}></div>
                        <div class="circle-line" style={{top: '10px',left:'-18px',borderColor:'#aadf06'}}></div>
                        <div class="year" style={{top: '2px',left:'-180px'}}>
                            <svg style={{width:'35px',height:'33px'}}  dangerouslySetInnerHTML={{__html: svg1 }} />
                            <span style={{color:'#aadf06'}}>2017.01</span>
                        </div>
                    </div>
                    {/* 左 */}
                    <div class="year-glory year-glory-right" style={{top: '100px',left:'-40px',border:'1px solid #9cdf21'}}>
                        就这样，爸爸这个马路杀手在妈妈英明神武的指挥之下，上路了。从此开启了我们的开车拌嘴之路，哈哈哈。
                        <div class="circle" style={{top:'2px',right:'-30px',borderColor:'#9cdf21'}}></div>
                        <div class="circle-line" style={{top: '10px',right:'-18px',borderColor:'#9cdf21'}}></div>
                        <div class="year" style={{top: '2px',right:'-240px'}}>
                            <span style={{color:'#9cdf21'}}>2017.04</span>
                            <svg style={{width:'73px',height:'75px'}}  dangerouslySetInnerHTML={{__html: svg2 }} />
                        </div>
                    </div>
                    {/* 右 */}
                    <div class="year-glory year-glory-right" style={{top: '260px',right:'-40px',border:'1px solid #92df2f'}}>
                        忙碌了几个月，住个新房不容易，一把辛酸史，终于入住了。
                        <div class="circle" style={{top:'2px',left:'-30px',borderColor:'#92df2f'}}></div>
                        <div class="circle-line" style={{top: '10px',left:'-18px',borderColor:'#92df2f'}}></div>
                        <div class="year" style={{top: '2px',left:'-140px'}}>
                            <span style={{color:'#92df2f'}}>2017.07</span>
                        </div>
                    </div>
                    {/* 左 */}
                    <div class="year-glory year-glory-right" style={{top: '320px',left:'-40px',border:'1px solid #8bdf3d'}}>
                        哈哈，我们有了何必小宝贝，初为人父，紧张又激动。
                        <div class="circle" style={{top:'2px',right:'-30px',borderColor:'#8bdf3d'}}></div>
                        <div class="circle-line" style={{top: '10px',right:'-18px',borderColor:'#8bdf3d'}}></div>
                        <div class="year" style={{top: '2px',right:'-170px'}}>
                            <span style={{color:'#8bdf3d'}}>2017.10</span>
                        </div>
                    </div>
                    {/* 右 */}
                    <div class="year-glory year-glory-right" style={{top: '400px',right:'-40px',border:'1px solid #85e049'}}>
                        爸爸妈妈终于结婚啦，你这个小何必一点都不乖，妈妈都受尽了你的凌辱。婚礼只是匆匆走了个过场。
                        <div class="circle" style={{top:'2px',left:'-30px',borderColor:'#85e049'}}></div>
                        <div class="circle-line" style={{top: '10px',left:'-18px',borderColor:'#85e049'}}></div>
                        <div class="year" style={{top: '2px',left:'-140px'}}>
                            <span style={{color:'#85e049'}}>2017.12</span>
                        </div>
                    </div>
                    {/* 左 */}
                    <div class="year-glory year-glory-right" style={{top: '500px',left:'-40px',border:'1px solid #7ddf55'}}>
                        何必宝宝唐筛竟然有一项是中危，爸爸妈妈收到短信一夜没睡好，第二天一早赶紧去医院做了无创，幸亏结果还好。
                        <div class="circle" style={{top:'2px',right:'-30px',borderColor:'#7ddf55'}}></div>
                        <div class="circle-line" style={{top: '10px',right:'-18px',borderColor:'#7ddf55'}}></div>
                        <div class="year" style={{top: '2px',right:'-230px'}}>
                            <span style={{color:'#7ddf55'}}>2018.03</span>
                            <svg style={{width:'56px',height:'44px'}}  dangerouslySetInnerHTML={{__html: svg3 }} />
                        </div>
                    </div>
                    {/* 右*/}
                    <div class="year-glory year-glory-right" style={{top: '600px',right:'-40px',border:'1px solid #70e06e'}}>
                        何必宝宝终于出生了
                        <div class="circle" style={{top:'2px',left:'-30px',borderColor:'#70e06e'}}></div>
                        <div class="circle-line" style={{top: '10px',left:'-18px',borderColor:'#70e06e'}}></div>
                        <div class="year" style={{top: '2px',left:'-190px'}}>
                            <svg style={{width:'51px',height:'55px'}}  dangerouslySetInnerHTML={{__html: svg4 }} />
                            <span style={{color:'#70e06e'}}>2018.06</span>
                        </div>
                    </div>
                    {/* 左  */}
                    {/* <div class="year-glory year-glory-right" style={{top: '700px',left:'-40px',border:'1px solid #63e083'}}>
                        描述文字
                        <div class="circle" style={{top:'2px',right:'-30px',borderColor:'#63e083'}}></div>
                        <div class="circle-line" style={{top: '10px',right:'-18px',borderColor:'#63e083'}}></div>
                        <div class="year" style={{top: '2px',right:'-120px'}}>
                            <span style={{color:'#63e083'}}>2015</span>
                        </div>
                    </div> */}
                    {/* 右 */}
                    {/* <div class="year-glory year-glory-right" style={{top: '840px',right:'-40px',border:'1px solid #55e19e'}}>
                        描述文字
                        <div class="circle" style={{top:'2px',left:'-30px',borderColor:'#55e19e'}}></div>
                        <div class="circle-line" style={{top: '10px',left:'-18px',borderColor:'#55e19e'}}></div>
                        <div class="year" style={{top: '2px',left:'-100px'}}>
                            <span style={{color:'#55e19e'}}>2016</span>
                            <svg style={{width:'204px',height:'90px'}} className='rocket'  dangerouslySetInnerHTML={{__html: svg5 }} />
                            
                        </div>
                    </div> */}
                    {/* 左  */}
                    {/* <div class="year-glory year-glory-right" style={{top: '1000px',left:'-40px',border:'1px solid #46e1b8'}}>
                        描述文字
                        <div class="circle" style={{top:'2px',right:'-30px',borderColor:'#46e1b8'}}></div>
                        <div class="circle-line" style={{top: '10px',right:'-18px',borderColor:'#46e1b8'}}></div>
                        <div class="year" style={{top: '2px',right:'-120px'}}>
                            <span style={{color:'#46e1b8'}}>2017</span>
                        </div>
                    </div> */}
                </div>
             </div>
        )
    }
}