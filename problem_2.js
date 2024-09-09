function checkName(name) {
    if(typeof name !== 'string'){
        return 'invalid';
    }
    let lastLetter = name[name.length-1].toLowerCase();
    let lastArray = ['a', 'y', 'i' , 'e', 'o' , 'u', 'w'];
    let result = false;
    for(let value of lastArray){
        if(value === lastLetter){
            result = true;
        }
       
    }
    if(result=== true){
        return 'Good Name'
    }
    else{
        return 'Bad Name'
    }
}

console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName('Jhankar'));
console.log(checkName(199));
console.log(checkName(["Rashed"] ));
