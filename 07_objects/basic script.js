//OBJECTS IS REAL WORD ENTITY
/*let camera='canon'
let cameraprice=40000
let cameracolor='blue'
console.log(camera)*/
//now we are doing by object
let cameraa={
  brand:'canon',
  colour:'black',
  manfractionin:2022,
  lens:20

}
console.log(cameraa.colour)
console.log(cameraa.lens)
//access the noon exesting property
console.log(cameraa.finalprice)
//access the property by dot & []notaion property
console.log(cameraa.colour)
console.log(cameraa['lens'])
//for dynamic properties (dot cannot be used)
//only [] notation
let prop='lens'
console.log(cameraa.prop)//undefined by dot
console.log(cameraa[prop])
//nested object(an object inside another object)
let student={
  name:'arjun',
  rollno:415,
  course:'ece',
  address:{
    area:'ramyagrounds',
    city:'hyd',
    state:'telangana'

  }
}
console.log(student)
console.log(student.address)
console.log(student.address.state)
console.log(student.rollno)
//CRUD OPERATION WITH AN OBJECT
//CREATE OPERATION
let mobile={}
mobile.brand='apple',
mobile.color='blue',
mobile.prosser=128
console.log(mobile)
//READ OPERATION
console.log(mobile.prosser)
//update operation
console.log(mobile.color)
mobile.color='green'
console.log(mobile)
//delete operation
delete mobile.color
console.log(mobile)