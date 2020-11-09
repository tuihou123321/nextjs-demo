export function format(times=[]){
    let arrNew=[[]]
    let i=0;
    times.forEach((item,index)=>{
        let strArr=item.date.split('/');
        if(arrNew[i].length===0){
            arrNew[i].push(item)
            return;
        }

        let arrNewLastOne=times[index-1].date.split('/');
        if(strArr[0]+'/'+strArr[1]===arrNewLastOne[0]+'/'+arrNewLastOne[1]){
            arrNew[i].push(item)
        }else{
            ++i;
            arrNew.push([]);
            arrNew[i].push(item)
        }
    })

    return arrNew;
}
