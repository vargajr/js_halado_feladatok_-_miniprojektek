'use strict';
let user = {firstname: 'Sam', lastname: 'CottonEye', age: 55,};

let personDataLog = ({firstname='Jonh', lastname='Doe', age=33,}={}) => {
    console.log('My name is ', firstname, ', ', lastname, ". I'm ", age, ' years old.');
}
/* let personDataLog = function ({firstname='Jonh', lastname='Doe', age=33,}={}){
    console.log('My name is ', firstname, ', ', lastname, ". I'm ", age, ' years old.');
} */

personDataLog(user);