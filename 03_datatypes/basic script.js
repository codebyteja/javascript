/*=======DATA TYPES====

THE TYPE of data which can be assig to a variable

====These are primitive DataTypes in js===
1)NUMBER->any type number
2)STRING->any text data
3)BOOLEAN->true,false
4)UNDEFINED
5)NULL
*/

//string
let employeeName='teja'
console.log(employeeName)
/* in another way is
let employeeName='teja'
console.log(`value:${employeeName} Type:${typeof employeeName}')
output is ==>value : teja Type : string
*/

//NUMBER
let employeeAge=40
console.log(`value: ${employeeAge} Type:${typeof employeeAge}`)

//BOOLEAN
let isManager=true
console.log(`value: ${isManager} Type:${typeof isManager}`)
  

//UNDEFINED
let name//variable decleration
console.log(name)//undefined because we didnot assig the vale to name
name="teja"//assignemt of a variable

//NULL(dummy value)
let test=null
console.log(`value: ${test} Type:${typeof test}`)

/* difference between null and undefined is 
if u not assig any value to a variable is called undefined
if u assig value to a variable is called null

*/
//RE ASSIGNMENT IS ALLOWED 
let abc
abc=10
abc="test"
abc=true
abc=null
console.log(`value: ${abc} Type:${abc}`)

