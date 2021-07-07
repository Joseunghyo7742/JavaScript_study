'use strict';
//Object-oriented programming
//class: template
//object: instance of a class
//JavaScript classes
//- introduced in ES6
//- syntactical sugar over prototype-based inheritance

//1. Class declarations
class Person{
    //constructor
    constructor(name, age){
        //fields
        this.name=name;
        this.age=age;
    }
    //methods
    speak(){
        console.log(`${this.name}:hello!`);
    }
}
const seunghyo = new Person('seunghyo',23);
console.log(seunghyo.name);
console.log(seunghyo.age);
seunghyo.speak();

//2.Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName= firstName;
        this.lastName= lastName;
        this.age= age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        if(value<0){
            throw Error('age can not be negative');
        }
        this._age= value; //this.age =vaule; 하면 오류생김
    }
}
const user1 = new User('job', 'steve','13');
console.log(user1.age);

//3. Fields (public, private)
//Too soon!
class Experiment{
    publicField =2;
    #privateField =0; //클래스 외부에서는 읽기, 쓰기 불가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods 
//Too soon!
class Article{
    static publisher = 'Dream Codding';
    constructor(articleNum){
        this.articleNum=articleNum;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1= new Article(1);
const article2= new Article(2);
console.log(article1.publisher);
console.log(Article.publisher); //static은 클래스 자체에 할당되어있음
Article.printPublisher();

//5. Inheritance
//a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height= height;
        this.color= color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return width * this.height;
    }
}
class Rectangle extends Shape{};
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('🍙');
    }
    //overwriting
    getArea(){
        return (this.width* this.height)/2;
    }
};
const rectangle = new Rectangle(20,20,'blue');
const triangle= new Triangle(20,20,'red');
rectangle.draw();
triangle.draw();
console.log(triangle.getArea());


//6. Class checking: instanceOf
//왼쪽에 있는 객체가 오른쪽에 있는 클래스의 객체인지 아닌지 
//true or false
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);