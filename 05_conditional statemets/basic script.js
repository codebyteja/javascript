/*conditional statement and also looping statements.
1)conditionalstsms are (if else ,switch)
2)loping stsms are(for loop,while loop , do-while)
*/
//if else this will excute code line by line if my answer is at 100 line eventhow it will check line 
//so we use switch statemnt 
let time=prompt('entertime')
 
  if( time>0 && time <= 12){
    console.log('good morning')
  }else if(time >12 && time <= 18){
    console.log('good evening')
  }else if(time >18 && time <=23){
    console.log('good night')
  }else{
    console.log('enter prper time')
  }
 
  //switch statement 
  let day=new Date().getDay()
 let today =''
 switch(day){
    case 0:
        today ='sunday'
        break
    case 1:
        today ='monday'
        break
    case 2:
        today ='tuesday'
        break
    case 3:
        today ='wednesday'
        break
     case 4:
        today ='thursdary'
        break
     case 5:
        today ='friday'
        break
    case 6:
        today ='saturday'
        break
     default:
        today ='enter proper text'
        break
 }
 console.log(today)
   
  