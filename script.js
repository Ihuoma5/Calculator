// function getHistory(){
//  return document.getElementById("history-value").innerText;
// }
// /*alert(getHistory());*/
// function printHistory(num){
//     document.getElementById("history-value").innerText=num;
// }
// printHistory("99")


function* generatorName(){
    yield 'Ihuoma';
    yield 'Kosi';
    yield 'Ciko'
}


const namesOfPeople = generatorName()
console.log(namesOfPeople.next().value)
console.log(namesOfPeople.next().value)
console.log(namesOfPeople.next().value)


function iterateNames(names){
    let nextIndex = 0;

    return{
        next: function(){
            if(nextIndex < names.length){
                return { value: names[nextIndex++], done: false}
            }else{
                return {done: true}
            }
        }
    }
}

const namesArr = ['Ihuoma', 'Kosi', 'Ciko', "David"]

const nextPerson = iterateNames(namesArr)

console.log(nextPerson.next().value)
console.log(nextPerson.next().value)
console.log(nextPerson.next().value)
console.log(nextPerson.next().value)
console.log(nextPerson.next())


