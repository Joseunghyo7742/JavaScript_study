//Q1. make a string out of an array
{
    const fruits=['apple','banana','orange'];
    const result= fruits.join();
    console.log(result);
}
//Q2. make an array out of a string
{
    const fruits='apple, pare, banana, orange';
    const result = fruits.split(',');
    console.log(result);
}
//Q3. make this array look like this[5,4,3,2,1]
{
    const array=[1,2,3,4,5];
    array.reverse();
    console.log(array);
}
//Q4. make new array without the first two elements
{
    const array=[1,2,3,4,5,6,7,8];
    const result= array.slice(2,5);
    //배열 자체를 수정
}
class Student{
    constructor(name, age, enrolled, score){
        this.name= name;
        this.age= age;
        this.enrolled= enrolled;
        this.score= score;
    }
}
const students=  [
    new Student('A', 29, true, 45),
    new Student ('B', 28, false, 80),
    new Student('C',30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E',18, true, 88),
];
//05. find a student with the score 90
{
    const result= students.find(function(student, index){
        return student.score==90;
    });
    //student.find((student)=?student.score==90);
    console.log(result);
}
//06. make an array of enrolled studnets
{
    const result= students.filter((student)=>student.enrolled);
    console.log(result);
}
//Q7. make an array containing only the students' scores 
//result should be:[45, 80, 90]
{
    const result=students.map(student=>student.score);
    console.log(result);
}
//08. check if there is a student with the score lower than 50
{
    const result= students.some(student=> student.score<50);
    console.log(result)
}
//Q9. compute students' average score
{
    let sum=0;
    students.forEach(student=>sum+=student.score);
    console.log(sum/students.length);
}
//Q10. make a string containing all the scores 
//result should be : '45, 80, 90'
{
    const result= students.map((student)=> student.score).join();
    console.log(result);
}