import React, {Component} from 'react';
import { Debugout } from 'debugout.js';



const obj={
    a:1,
    b:{
        b1:2
    }
}

const arr=[obj,obj]

// const bugout=new Debugout();

export default class Page extends Component {
    state = {}

    log (){
        console.log(1);
        console.log(2);
        console.log(obj);
        console.log(arr);

        console.log(JSON.stringify(obj));
        console.log(JSON.stringify(arr));
    }

    bugoutFn (){

        // bugout.log(1);
    }

    componentDidMount() {
        this.bugoutFn()
    }

    render() {
        return (
            <div>
                1111
            </div>
        );
    }
}
