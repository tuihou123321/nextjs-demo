import React from 'react'
import dateFormat from 'dateformat'
import {types} from "../public/enums/enums";
import classNames from 'classnames'


export default class CalendarMonth extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            times:this.props.times,
            currentMonth:'',
            timesDistance:0
        }
    }

    componentWillReceiveProps(nextProps) {
        // this.setState({
        //     times:nextProps.times
        //  })
    }

    getDay(day){
        //获取今天的日期
        let today=dateFormat(new Date(), 'yyyy/mm/dd');
        if(today===day){
            return '今天'
        }else{
            return day.split('/')[2];
        }

    }
    getState(type){
        let typeName='';
        types.forEach((item,index)=>{
            if(type===item.type){
                typeName=item.value;
            }
        })
        return typeName;
    }
    componentDidMount() {
        let timesDistance=new Date(this.state.times[0].date).getDay();

        let timesArr=this.state.times[0].date.split('/');

        this.setState({
            timesDistance,
            currentMonth:`${timesArr[0]}年${timesArr[1]}月`
        })
    }
    render() {

        let timesDistanceArr=[];
        for (let i=0; i<this.state.timesDistance; i++){
            timesDistanceArr.push(0);
        }

        return (
            <div className="monthBox">
                <div className="monthTitle">{this.state.currentMonth}</div>
                <div className="day">
                    {
                        timesDistanceArr.map((item,index)=>{
                            return <div className="dayItem white" key={index}>0</div>
                        })
                    }

                    {
                        this.state.times.length>0 && this.state.times.map((item,index)=>{
                            return <div className={
                                classNames('dayItem',{
                                    'activeBox': item.isActive,
                                    'item-disable':item.type==='2' || item.type==='3'
                                })
                            }
                                        key={index} onClick={()=>{this.props.selectTime(item)}}>

                                <div className="dayItemContent">
                                    <div className="day">{this.getDay(item.date)}</div>
                                    <div className="type">{this.getState(item.type)}</div>
                                </div>

                            </div>
                        })
                    }

                    <div className="clear"/>
                </div>
            </div>
        );
    }
}
