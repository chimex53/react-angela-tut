/* var number=[2,3,4,8,10,2100,22.5,300]
const newNumber=number.map(function(x){
  return x*2
});
console.log(newNumber); */

/* 
var number=[2,3,4,8,10,2100,22.5,800]
var newNumber=[];
number.forEach(function(x){
    newNumber.push(x*2)
})
console.log(newNumber); */

/* var number=[2,3,4,8,10,2100,22.5,800,100]
const newNumber=number.filter(function(num){
    return num <= 100
})
console.log(newNumber); */

/* var number=[2,3,4,8,10,2100,22.5,800,100]

const newNumber=number.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
})
 */

/* var number=[2,3,4,8,10,2100,22.5,800,100]
const newNumber=number.find(function(num){
        return num > 200
})
console.log(newNumber); */

/* var number=[2,3,4,8,10,2100,22.5,800,100]
const newNumber=number.findIndex(function(num){
        return num > 200
})
console.log(newNumber); */

/* import joke from './joke.js'

const newNumber=joke.map(function(joking){
    return joking.sex.substring(0, 100)
})
console.log(newNumber);

 */

/* const phones=['apple','nokia','redmi'];
const laptop=['lenovo','dell','macbook pro',...phones]
console.log(laptop);


 */

const fullname={
    fname: 'ugwu',
    lname: 'chimezie'
}

const user={
    ...fullname,
    id: 1,
    username: "chimex4344"
}
console.log(user);
