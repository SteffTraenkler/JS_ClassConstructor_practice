//Lev1_1
console.log('%cLev1_1', 'color:darkgreen; font-weight:900');

class Ball {
    constructor(ballType = 'regular') {
        this.ballType = ballType;
    }
}

let ball1 = new Ball();
let ball2 = new Ball('super');

console.log(ball1.ballType);
console.log(ball2.ballType);

console.log(' ');
console.log('%cLev1_2', 'color:darkgreen; font-weight:900');
let li;

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        console.log(`${this.name} is ${this.age} years old.`);
        return this
    }
    write() {
        li = document.createElement('li');
        li.textContent = `${this.name}, ${this.age} years old.`
        document.body.appendChild(li);
    }
}

let person1 = new Person('Emanuela', 18);
person1.info();

//Lev1_3
console.log(' ');
console.log('%cLev1_3', 'color:darkgreen; font-weight:900');


let name = document.getElementById('name');
let age = document.getElementById('age');
let examCheck = document.getElementById('examCheck');
let submit = document.getElementById('button');

submit.addEventListener('click', () => {
    if (name.value != undefined || age.value != undefined) {
        console.log('test');
        console.log(name.value + age.value);
        let person = new Person(`${name.value}`, `${age.value}`);
        person.write();
        if (examCheck.checked === false) {
            li.style.color = 'red';
        }
    } else {
        return;
    }
});