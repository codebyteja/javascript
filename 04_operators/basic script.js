/*====JS OPERATORS===
1)ASSIGNMENT OPERATORS: (=)
2)ARITHMETIC OPERATORS : (+ - / * %)
3)SHORT HAND MATH OPERATORS : (+=, -= , /= ,*=)
4)CONDITIONAL OPERATORS : (< ,> , <= , >= , !==)
5)UNARY OPERATORS : (++ , --)
6)LOGICAL OPERATORS :(&& , || , ^)
7)TERNARY OPERATORS:(?:)
8)EQUALITY OPERATORS : (== , ===)*/


//1)ASSIGNMENT OPERATORS: (=)
let test=10
console.log(test)

//2)ARITHMETIC OPERATORS : (+ - / * %)
let num1=10
let num2=20
console.log(`sum is  ${num1 + num2}`)
console.log(`sub is ${num1 - num2}`)
console.log(`div is ${num1 / num2}`)
console.log(`multi is ${num1 * num2}`)
console.log(`remi is ${num1 % num2}`)

//3)SHORT HAND MATH OPERATORS : (+=, -= , /= ,*=)
let a=20//for example we r writng a ,b but in real time never use a,b
let b=30
let add=10
add=add +(a+b)//the  same state ment can we writen as  10+20+30=>60
add += (a+b) //60 + 20 +30=110
add -= (a+b)//110-20+30=60
add /=(a+b)//60/20+30=>1.2
add *=(a+b)//1.2*20+30=>60
console.log(add)

//4)CONDITIONAL OPERATORS : (< ,> , <= , >= , !==)
let maths=75
if(maths <= 35){
    console.log("you failed the exam")
}else{
    console.log("you cleared the exam")
}
//prompt("give me ur maths marks")
let physics=35
if(physics < 35){
    console.log("you failed the exam")

}else{
    console.log("you cleared the exam ")
}
//prompt("give me ur physics marks")


//5)UNARY OPERATORS : (++ , --)
let x=10//
x=x+1//x=x+1
x +=1//x-=1
x ++//x--
console.log(x)

//6)LOGICAL OPERATORS :(&& , || , ^)
/*if both the operands are true this will work
 AND OERATOR=>t && t -> t
 OR OPERATOR (EITHER ONE SHOULD BE TRUE)=>F || F->F
 XOR OPERATOR=> T^F,F^T->T
*/
//AND OPERATOR EXAMPLE
let inrelation =true
let parentsAgreed =false
if(inrelation && parentsAgreed){
    console.log("happy married life")
}else{
    console.log("wait for parents greed")
}
//7)TERNARY OPERATORS:(?:)
//short cut for if else
/*
syntax:(condition)? contion should be true or false*/



//8)EQUALITY OPERATORS : (== , ===)
a=' 20'
b=20
if(a == b){
    console.log("both are equal")
}else{
    console.log("not equal")
}

