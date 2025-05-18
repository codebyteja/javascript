//ARRAYS
//array is indexed collection of elements (object
//(string/boolean/array/number)
//creation of an array
let number=[10,20,30]
console.log(number)
console.log(number[0])
console.log(number[3])
//itteration of array elements
let color=['blue','black','green','orange','grey']
console.log(color)
// 1)normal for loop
let result=''
for(i=0;i<=color.length-1;i++){
  console.log(color[i])
 
}
result=''
for(i=0;i<=color.length-1;i++){
if(i<color.length-1){
  result += `${color[i]} ,`
}else{
result   += `${color[i]}`
}//for removing (,)for last one we use if stmt.
}
console.log(result)
//2) for in loop(ES5 VERSION)
result=''
for(let teja in color){
result += `${color[teja]} `//console.log(teja)//for showing index
}
console.log(result)


//array of objeects to store more data
let employee=[
  {
    id:416,
    name:'abhi',
    age:34,
    officer:'manager',
    isactive:'true'
  },
  {
 id:417,
    name:'ranjith',
    age:35,
    officer:'SE',
    isactive:'true'
  },
  {
  id:419,
    name:'ramu',
    age:28,
    officer:'manager',
    isactive:'false'
  },
   {
  id:420,
    name:'bantu',
    age:29,
    officer:'jnr SE',
    isactive:'true'
  },
]
console.log(employee)

//access only name
console.log(employee[0])
//iterate employee
result=''
for( let employe of employee) {
  result += `${employee.name}`
}
console.log(result)