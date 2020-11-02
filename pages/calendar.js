import React from 'react';
import Calendar from 'ydl-calendar';
import 'ydl-calendar/dist/Calendar.css'

const timesData=[ { date:'2020/10/25', type:'1' }, { date:'2020/10/26', type:'1' }]


export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            times:[],
        }
    }

    componentDidMount() {
        //模拟请求
        setTimeout(()=>{
            this.setState({
                times:timesData
            })
        },10)
    }

    onChange(selectTime){
        console.log(selectTime,'选中的时间');
    }

    render(){
        return <Calendar times={this.state.times} onChange={(selectTime)=>this.onChange(selectTime)}/>
    }
}
