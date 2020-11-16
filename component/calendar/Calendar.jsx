import React from 'react';
import CalendarMonth from "./component/CalendarMonth";
import {format} from "./public/js/public";
import classNames from 'classnames'

import PropTypes from 'prop-types';


export default class Calendar extends React.Component {
    static propTypes={
        times:PropTypes.array,
        onChange:PropTypes.func,
        isFixed:PropTypes.boolean
    }

    constructor(props) {
        super(props);
        this.state = {
            weekday:['日','一','二','三','四','五','六'],
            times:this.props.times,
            timesArr:[]
        }
    }

    selectTime(itemData){
        let { times }=this.props;
        const { date }=itemData;
        times.forEach(item=> item.isActive= item.date===date);

        this.setState({
            times
        })

        this.props.onChange(itemData)

    }

    componentWillReceiveProps(nextProps) {
        //格式化数据
        let {times}=nextProps;

        if(times.length>0){
            this.setState({
                timesArr:format(times)
            })
        }
    }

    render(){

        return (
            <div className="ydl-calendar-container">
                <div className={classNames('titleBox',{
                    'fix':this.props.isFixed
                })}>
                    <div className="title">
                        {
                            this.state.weekday.map((item,index)=>{
                                return <div className="titleItem" key={index}>{item}</div>
                            })
                        }
                    </div>
                </div>

                <div className={classNames({
                    'bodyTop':this.props.isFixed
                })}>
                    {
                        this.state.timesArr.length>0 &&　this.state.timesArr.map((item,index)=>{
                            return  <CalendarMonth times={item} selectTime={(item)=>{this.selectTime(item)}} key={index}/>
                        })
                    }
                </div>


            </div>
        )
    }
}
