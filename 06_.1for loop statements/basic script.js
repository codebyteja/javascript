/*for loop
the syntax is
for(initialization,condition ,incre/decre)
for exam 0 - 10 
for(let i=0;i<=10;i++){
console.log(i)
}*/

//print values for 0-10 and diff by 1
for(let i=0;i<=10;i++){
  console.log(i)}
  //this log prints value line by line 
  /*to get in single line use 
  let result=''
for(let i=0;i<=10;i++){
  result = result + i
}
  console.log(result) (TO GET GAP IN BETWEEN THE NUMBERS 
  WE SHOULD THAT IN PLACE OF i just make it ` ${i} ')
  */
 let result=''
 for(let i=0;i<=10;i++){
  if(i<=9){
    result = result+`${i} ,`
  }
  else{
    result = result+`${i}`
  }
  
 }
 console.log(result)
//pirnt the values from 20 -0 and with diff is by 2
result=''
for(let i=20;i>=0;i -=2){
 if(i>0){
  result += `${i},`
 }
 else{
  result += `${i}`
 }

}
console.log(result)

/*nested for loop
*
**
***
****
*****
*/
let number=5
result=''
for(let i=1;i<=number;i++ ){
  for(let j=1;j<=i;j++){
    result+='*'
  }
  result+=`\n`
}
console.log(result)
/*
1)1
12
123
1234
12345

2)1
22
333
4444
55555

3)12345
1234
123
12
1

4)55555
4444
333
22
11
1
 */

//1)

result=''
for(let i=1;i<=5;i++){
  for(let j=1;j<=i;j++){
    result += `${j}`
  }
  result +=`\n`
}
console.log(result)
//2)
result=''
for(let i=1;i<=5;i++){
  for(let j=1;j<=i;j++){
    result += `${i}`
  }
  result +=`\n`
}
console.log(result)



