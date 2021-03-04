// 'use strict';
// let Name=prompt(' What is your name ? ');
// alert ('Welcome'+ ' '+ Name + ' '+ 'to my site');
// let score=0;

// function gender(){
//   let Guess1=prompt('Do you think I am a woman (Yes/No)? ').toLowerCase();
//   if (Guess1==='yes' || Guess1==='y' || Guess1==='Yes' || Guess1==='YES' || Guess1=== 'Y'){
//     alert ('Yes you are Right! I am a woman ');
//     score=score+1;
//   }else if (Guess1==='no' || Guess1==='n' || Guess1==='No' || Guess1==='NO' || Guess1=== 'N'){
//     alert ('No you are wrong I am a woman');
//   }else {alert('ooops, Wrong data!');
//     gender();}}
// gender();

// function study(){
//   let Guess2=prompt(' Do you think I Studied software development at university, (Yes/No) ?').toLowerCase();
//   if (Guess2==='yes' || Guess2==='y' || Guess2==='Yes' || Guess2==='YES' || Guess2==='Y'){
//     alert ('No you are wrong! ');
//   }else if(Guess2==='no' || Guess2==='n' || Guess2==='No' || Guess2==='NO' || Guess2=== 'N'){
//     alert ('You are Right, I didnt study it at university');
//     score=score+1;
//   }else {alert('ooops, Wrong data!');
//     study(); }
// }
// study();

// function country(){
//   let Guess3=prompt('Do you think I am from Jordan ,(Yes/No)? ').toLowerCase();
//   if (Guess3==='yes' || Guess3==='y' || Guess3==='Yes' || Guess3==='YES' || Guess3==='Y'){
//     alert ('Yes you are Right I am a Jordanian ');
//     score=score+1;
//   }else if(Guess3==='no' || Guess3==='n' || Guess3==='No' || Guess3==='NO' || Guess3=== 'N'){
//     alert ('No You are Wrong I am from Jordan');
//   }else {alert('ooops, Wrong data!');
//     country();}}
// country();

// function relation(){
//   let Guess4=prompt(' Do you think I am single,(Yes/No) ? ').toLowerCase();
//   if (Guess4==='yes' || Guess4==='y' || Guess4==='Yes' || Guess4==='YES' || Guess4==='Y'){
//     alert ('No you are wrong! I am not single ');
//   }else if(Guess4==='no' || Guess4==='n' || Guess4==='No' || Guess4==='NO' || Guess4=== 'N'){
//     alert ('You are Right, I am married');
//     score=score+1;
//   }else {alert('ooops, Wrong data!');
//     relation();}}
// relation();

// function moreInfo(){
//   let Guess5=prompt(' Do you want to know more about me ,(Yes/No) ? ').toLowerCase();
//   if (Guess5==='yes' || Guess5==='y' || Guess5==='Yes' || Guess5==='YES' || Guess5==='Y'){
//     alert ('Nice! lets see my page for that ');
//     score=score+1;
//   }else if(Guess5==='no' || Guess5==='n' || Guess5==='No' || Guess5==='NO' || Guess5=== 'N'){
//     alert ('As you like! but here is my page if want to see it later');
//   }else {alert('ooops, Wrong data!');
//     moreInfo();}}
// moreInfo();

// function guessNumber (){
//   let age=28;
//   let guessAge=prompt('Guess my age');
//   let i =0;
//   guessAge=parseInt(guessAge);
//   if (parseInt(guessAge)===age){
//     alert('Great you got it ');
//     score=score+1;
//   }
//   while(parseInt(guessAge)!==age && i<3){
//     alert('My age is between 20 & 35');
//     if (parseInt(guessAge)>age){
//       alert('No I am smaller than this');
//       guessAge=prompt('Guess my age');
//       if (parseInt(guessAge)===age){
//         alert('Great you got it');
//         score=score+1;
//         break;
//       }else{
//         i++;
//       }
//     }else if (parseInt(guessAge)<age){
//       alert('I am bigger than this');
//       guessAge=prompt('Guess my age');
//       if (parseInt(guessAge)===age){
//         alert('Great you got it');
//         score=score+1;
//         break;
//       }else{
//         i++;
//       }
//     }
//   }
//   alert('My age is 28');
// }guessNumber();

// function guessBrotherName(){
//   let brothersName=['SULAIMAN', 'MONTHER', 'OSAMA', 'MOSTAFA'];
//   let y=0;
//   let guessName=prompt('Guess one of the name of my brothers');
//   guessName=guessName.toUpperCase();
//   if (guessName===brothersName[0] || guessName===brothersName[1] || guessName===brothersName[2] || guessName===brothersName[3]){
//     alert('Great you are Right on of my brothers name is '+ guessName);
//     score=score+1;
//   }else{
//     while((guessName!==brothersName[0] || guessName!==brothersName[1] || guessName!==brothersName[2] || guessName!==brothersName[3]) && y<5){
//       alert('One of them his name meaning the lion ');
//       guessName=prompt('Guess one of the name of my brothers');
//       if (guessName===brothersName[0] || guessName===brothersName[1] || guessName===brothersName[2] || guessName===brothersName[3]){
//         alert('Great you are Right on of my brothers name is '+ guessName);
//         score=score+1;
//       }
//       y=y+1;
//     }
//     alert ('My brothers names are '+ brothersName);
//   }
// } guessBrotherName();
// alert('Your score is '+ score);
// alert ('Nice to meet you' + ' ' + Name + ' '+ 'I hope to meet you face to face soon, Goodbye ');
