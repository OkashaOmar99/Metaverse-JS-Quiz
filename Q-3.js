let line = "this is Definitely a sentence";
UC = line.toUpperCase();

LC = line.toLowerCase();

function toTitleCase(string){
    let snetence= string.toLowerCase().split();
    for (let i = 0; i < snetence.length; i++){ ;
        snetence[i] = snetence[i][0].toUpperCase() + snetence[i].slice(1);   
    }
    return snetence;
}



console.log(UC);
console.log(LC);
console.log(toTitleCase("this is not good"))