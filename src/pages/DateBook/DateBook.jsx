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
                        在新加坡创立PatSnap；后获得新加坡大学生创业扶持基金，5万新币，收购第一批美国专利数据
                        <div class="circle" style={{top:'2px',left:'-30px',borderColor:'#aadf06'}}></div>
                        <div class="circle-line" style={{top: '10px',left:'-18px',borderColor:'#aadf06'}}></div>
                        <div class="year" style={{top: '2px',left:'-140px'}}>
                            <svg style={{width:'35px',height:'33px'}}  dangerouslySetInnerHTML={{__html: svg1 }} />
                            <span style={{color:'#aadf06'}}>2007</span>
                        </div>
                    </div>
                    {/* 左 */}
                    <div class="year-glory year-glory-right" style={{top: '100px',left:'-40px',border:'1px solid #9cdf21'}}>
                        在中国苏州组建智慧芽研发团队；当时只有十几人的小小团队，一间公寓承载着我们的梦想
                        <div class="circle" style={{top:'2px',right:'-30px',borderColor:'#9cdf21'}}></div>
                        <div class="circle-line" style={{top: '10px',right:'-18px',borderColor:'#9cdf21'}}></div>
                        <div class="year" style={{top: '2px',right:'-200px'}}>
                            <span style={{color:'#9cdf21'}}>2008</span>
                            <svg style={{width:'73px',height:'75px'}}  dangerouslySetInnerHTML={{__html: svg2 }} />
                        </div>
                    </div>
                    {/* 右 */}
                    <div class="year-glory year-glory-right" style={{top: '260px',right:'-40px',border:'1px solid #92df2f'}}>
                        推出自主研发的全球专利数据库平台，并有了自己的客户。
                        <div class="circle" style={{top:'2px',left:'-30px',borderColor:'#92df2f'}}></div>
                        <div class="circle-line" style={{top: '10px',left:'-18px',borderColor:'#92df2f'}}></div>
                        <div class="year" style={{top: '2px',left:'-140px'}}>
                            <span style={{color:'#92df2f'}}>2009</span>
                        </div>
                    </div>
                    {/* 左 */}
                    <div class="year-glory year-glory-right" style={{top: '320px',left:'-40px',border:'1px solid #8bdf3d'}}>
                        获种子基金500万人民币的投资。
                        <div class="circle" style={{top:'2px',right:'-30px',borderColor:'#8bdf3d'}}></div>
                        <div class="circle-line" style={{top: '10px',right:'-18px',borderColor:'#8bdf3d'}}></div>
                        <div class="year" style={{top: '2px',right:'-120px'}}>
                            <span style={{color:'#8bdf3d'}}>2010</span>
                        </div>
                    </div>
                    {/* 右 */}
                    <div class="year-glory year-glory-right" style={{top: '400px',right:'-40px',border:'1px solid #85e049'}}>
                        智慧芽产品重构，人员调整，推出集专利记录、提醒、报告、分析等多种功能于一身的专利数据库。
                        <div class="circle" style={{top:'2px',left:'-30px',borderColor:'#85e049'}}></div>
                        <div class="circle-line" style={{top: '10px',left:'-18px',borderColor:'#85e049'}}></div>
                        <div class="year" style={{top: '2px',left:'-180px'}}>
                            <span style={{color:'#85e049'}}>2011 - 2012</span>
                        </div>
                    </div>
                    {/* 左  2013*/}
                    <div class="year-glory year-glory-right" style={{top: '500px',left:'-40px',border:'1px solid #7ddf55'}}>
                        破土而出，达到自负盈亏，获得第二届中国知识产权聚焦2013-最佳国际知识产权解决方案提供商奖。
                        <div class="circle" style={{top:'2px',right:'-30px',borderColor:'#7ddf55'}}></div>
                        <div class="circle-line" style={{top: '10px',right:'-18px',borderColor:'#7ddf55'}}></div>
                        <div class="year" style={{top: '2px',right:'-180px'}}>
                            <span style={{color:'#7ddf55'}}>2013</span>
                            <svg style={{width:'56px',height:'44px'}}  dangerouslySetInnerHTML={{__html: svg3 }} />
                        </div>
                    </div>
                    {/* 右 2014*/}
                    <div class="year-glory year-glory-right" style={{top: '600px',right:'-40px',border:'1px solid #70e06e'}}>
                        获A轮风投2200万人民币，创始人Jeffrey也被评为苏州工业园区成长型领军人才。这是智慧芽迅速发展的一年。
                        <div class="circle" style={{top:'2px',left:'-30px',borderColor:'#70e06e'}}></div>
                        <div class="circle-line" style={{top: '10px',left:'-18px',borderColor:'#70e06e'}}></div>
                        <div class="year" style={{top: '2px',left:'-150px'}}>
                            <svg style={{width:'51px',height:'55px'}}  dangerouslySetInnerHTML={{__html: svg4 }} />
                            <span style={{color:'#70e06e'}}>2014</span>
                        </div>
                    </div>
                    {/* 左  2015*/}
                    <div class="year-glory year-glory-right" style={{top: '700px',left:'-40px',border:'1px solid #63e083'}}>
                        获B轮风投1200万美元，在全球知识产权生态大会上被评为2015年度IPR新锐机构。推出自主研发产品-智慧芽分析系统Insights以及知识产权在线教育平台-智慧芽学院。
                        <div class="circle" style={{top:'2px',right:'-30px',borderColor:'#63e083'}}></div>
                        <div class="circle-line" style={{top: '10px',right:'-18px',borderColor:'#63e083'}}></div>
                        <div class="year" style={{top: '2px',right:'-120px'}}>
                            <span style={{color:'#63e083'}}>2015</span>
                            {/* <svg style={{width:'56px',height:'44px'}}  dangerouslySetInnerHTML={{__html: svg5 }} /> */}
                        </div>
                    </div>
                    {/* 右 2016*/}
                    <div class="year-glory year-glory-right" style={{top: '840px',right:'-40px',border:'1px solid #55e19e'}}>
                        获C轮融资，由红杉资本中国基金领投，雷军和许达来共同创立的顺为资本跟投。推出产品化学数据库。同年被享负盛名的德勤评选为亚太区高科技高成长企业50强。
                        <div class="circle" style={{top:'2px',left:'-30px',borderColor:'#55e19e'}}></div>
                        <div class="circle-line" style={{top: '10px',left:'-18px',borderColor:'#55e19e'}}></div>
                        <div class="year" style={{top: '2px',left:'-100px'}}>
                            <span style={{color:'#55e19e'}}>2016</span>
                            <svg style={{width:'204px',height:'90px'}} className='rocket'  dangerouslySetInnerHTML={{__html: svg5 }} />
                            
                        </div>
                    </div>
                    {/* 左  2017*/}
                    <div class="year-glory year-glory-right" style={{top: '1000px',left:'-40px',border:'1px solid #46e1b8'}}>
                        全球员工达到近800人。其中中国团队超过500人，70%为技术研发人员。与摩拜单车、京东金融等公司获选《中国企业家》评选的「2017年最具成长性新兴企业100强」。
                        <div class="circle" style={{top:'2px',right:'-30px',borderColor:'#46e1b8'}}></div>
                        <div class="circle-line" style={{top: '10px',right:'-18px',borderColor:'#46e1b8'}}></div>
                        <div class="year" style={{top: '2px',right:'-120px'}}>
                            <span style={{color:'#46e1b8'}}>2017</span>
                        </div>
                    </div>
                </div>
             </div>
        )
    }
}