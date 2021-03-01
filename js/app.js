'use strict';
let Name=prompt(' What is your name ? ');
alert ('Welcome'+ ' '+ Name + ' '+ 'to my site');
console.log(Name);

function gender(){
  let Guess1=prompt('Do you think I am a woman (Yes/No)? ').toLowerCase();
  if (Guess1==='yes' || Guess1==='y' || Guess1==='Yes' || Guess1==='YES' || Guess1=== 'Y'){
    alert ('Yes you are Right! I am a woman ');
    console.log(Guess1);
  }else if (Guess1==='no' || Guess1==='n' || Guess1==='No' || Guess1==='NO' || Guess1=== 'N'){
    alert ('No you are wrong I am a woman');
    console.log(Guess1);
  }else {alert('ooops, Wrong data!');
    gender();}}
gender();
function study(){
  let Guess2=prompt(' Do you think I Studied software development at university, (Yes/No) ?').toLowerCase();
  if (Guess2==='yes' || Guess2==='y' || Guess2==='Yes' || Guess2==='YES' || Guess2==='Y'){
    alert ('No you are wrong! ');
    console.log(Guess2);
  }else if(Guess2==='no' || Guess2==='n' || Guess2==='No' || Guess2==='NO' || Guess2=== 'N'){
    alert ('You are Right, I didnt study it at university');
    console.log(Guess2);
  }else {alert('ooops, Wrong data!');
    study(); }
}
study();

function country(){
  let Guess3=prompt('Do you think I am from Jordan ,(Yes/No)? ').toLowerCase();
  if (Guess3==='yes' || Guess3==='y' || Guess3==='Yes' || Guess3==='YES' || Guess3==='Y'){
    alert ('Yes you are Right I am a Jordanian ');
    console.log(Guess3);
  }else if(Guess3==='no' || Guess3==='n' || Guess3==='No' || Guess3==='NO' || Guess3=== 'N'){
    alert ('No You are Wrong I am from Jordan');
    console.log(Guess3);
  }else {alert('ooops, Wrong data!');
    country();}}
country();

function relation(){
  let Guess4=prompt(' Do you think I am single,(Yes/No) ? ').toLowerCase();
  if (Guess4==='yes' || Guess4==='y' || Guess4==='Yes' || Guess4==='YES' || Guess4==='Y'){
    alert ('No you are wrong! I am not single ');
    console.log(Guess4);
  }else if(Guess4==='no' || Guess4==='n' || Guess4==='No' || Guess4==='NO' || Guess4=== 'N'){
    alert ('You are Right, I am married');
    console.log(Guess4);
  }else {alert('ooops, Wrong data!');
    relation();}}
relation();

function moreInfo(){
  let Guess5=prompt(' Do you want to know more about me ,(Yes/No) ? ').toLowerCase();
  if (Guess5==='yes' || Guess5==='y' || Guess5==='Yes' || Guess5==='YES' || Guess5==='Y'){
    alert ('Nice! lets see my page for that ');
    console.log(Guess5);
  }else if(Guess5==='no' || Guess5==='n' || Guess5==='No' || Guess5==='NO' || Guess5=== 'N'){
    alert ('As you like! but here is my page if want to see it later');
    console.log(Guess5);
  }else {alert('ooops, Wrong data!');
    moreInfo();}}
moreInfo();
alert ('Nice to meet you' + ' ' + Name + ' '+ 'I hope to meet you face to face soon, Goodbuy ');
