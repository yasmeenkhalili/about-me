'use strict';
let Name=prompt(" What is your name ? ");
alert ("Welcome"+ " "+ Name + " "+ "to my site");
console.log(Name);
let Guess1=prompt(" Do you think I am a woman,y/n ? ").toLowerCase();
if (Guess1=='yes' || Guess1=='y' || Guess1=='Yes' || Guess1=='YES'){
    alert (" Yes you are Right! I am a woman ");
    console.log(Guess1);
}else{
    alert ("No you are wrong I am a woman");
    console.log(Guess1);
}
let Guess2=prompt(" Do you think I Studied software development at university, y/n ?").toLowerCase();
if (Guess2=='yes' || Guess2=='y' || Guess2=='Yes' || Guess2=='YES'){
    alert (" No you are wrong! ");
    console.log(Guess2);
}else{
    alert ("You are Right, I didn't study it at university");
    console.log(Guess2);
}
let Guess3=prompt(" Do you think I am from Jordan ,y/n ? ").toLowerCase();
if (Guess3=='yes' || Guess3=='y' || Guess3=='Yes' || Guess3=='YES'){
    alert (" Yes you are Right I am a Jordanian ");
    console.log(Guess3);
}else{
    alert ("No You are Wrong I am from Jordan");
    console.log(Guess3);
}
let Guess4=prompt(" Do you think I am single,y/n ? ").toLowerCase();
if (Guess4=='yes' || Guess4=='y' || Guess4=='Yes' || Guess4=='YES'){
    alert (" No you are wrong! I am not single ");
    console.log(Guess4);
}else{
    alert ("You are Right, I am married");
    console.log(Guess4);
}
let Guess5=prompt(" Do you want to know more about me ,y/n ? ").toLowerCase();
if (Guess5=='yes' || Guess5=='y' || Guess5=='Yes' || Guess5=='YES'){
    alert (" Nice! let's see my page for that ");
    console.log(Guess5);
}else{
    alert ("As you like! but here is my page if want to see it later");
    console.log(Guess5);
}
alert ("Nice to meet you" + " " + Name + " "+ "I hope to meet you face to face soon, Goodbuy ")
