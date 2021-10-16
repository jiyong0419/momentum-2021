const age = parseInt(prompt("Your age?"));


if (isNaN(age)) {
    console.log("Please write number");
}else if(age<18){
    console.log("You can't buy this");
}else if(age<50){
    console.log("You can buy this");
}else {
    console.log("Maybe you must stop to drink this");
}