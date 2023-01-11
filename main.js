



  const form = document.forms.quiz;
  
  // get the values of each form here

  const questionare1 = form.question1;
  const questionare2 = form.question2;
  const questionare3 = form.question3;
  const questionare4 = form.question4;
  const questionare5 = form.question5;

  const parrot = document.getElementById('parrot').checked;
    const eagle = document.getElementById('eagle').checked;
    const penguin = document.getElementById('penguin').checked;
    const crow = document.getElementById('crow').checked;

  form.addEventListener('submit', function(event){
    event.preventDefault();
    checkQuestion1();
    checkQuestion2();
    checkQuestion3();  
    checkQuestion4();
    checkQuestion5();

    
    CountAnswers();

  })


  // RESETTING THE FORM TO EMPTY * /

 const resetbutton = document.getElementById('resetbtn');


  resetbutton.addEventListener('click', (event)=>{

    event.preventDefault();

    document.getElementById('myForm').reset();

    // resetting the Form  //
    document.getElementsByClassName('checkboxes').enabled =true;
    
// clearing all error texts //
    document.getElementById('result-question1').innerText='';
    document.getElementById('result-question2').innerText='';
    document.getElementById('result-question3').innerText='';
    document.getElementById('result-question4').innerText='';
    document.getElementById('result-question5').innerText='';

    // Enabling the checkboxes buttons  //
    document.getElementById('parrot').disabled =false;
    document.getElementById('eagle').disabled =false;
    document.getElementById('penguin').disabled =false;
    document.getElementById('crow').disabled =false;


    document.getElementById('shark').disabled =false;
    document.getElementById('lion').disabled =false;
    document.getElementById('dolphin').disabled =false;
    document.getElementById('tiger').disabled =false;


    document.getElementById('results').style.display='none';
    document.getElementById('comments').style.display='none';
    document.getElementById('textscore').style.display='none';
    document.getElementById('ScoreResults').style.display='none';
    
  })



   function checkQuestion1(){
   // Enter validation for question 1 here
   if(document.getElementById('radiocheck').checked == true)
   {
     document.getElementById('result-question1').innerText ='Your answer is Correct!'; 
     document.getElementById('result-question1').style.color='green'; 
   }else{
     document.getElementById('result-question1').innerText ='Your answer is incorrect!'; 
     document.getElementById('result-question1').style.color='red'; 
   }
   if(!questionare1.value){
   
     document.getElementById('result-question1').innerText ='You must enter an answer!'; 
     document.getElementById('result-question1').style.color='red'; 
   }
   
   }



  function checkQuestion2(){
    // Enter validation for question 2 here
 // if checkboxes are empty //

 


 if(document.getElementById('radio2').checked == true)
{
  document.getElementById('result-question2').innerText ='Your answer is Correct!'; 
  document.getElementById('result-question2').style.color='green'; 
}else{
  document.getElementById('result-question2').innerText ='Your answer is incorrect!'; 
  document.getElementById('result-question2').style.color='red'; 
}
if(!questionare2.value){

  document.getElementById('result-question2').innerText ='You must enter an answer!'; 
  document.getElementById('result-question2').style.color='red'; 
}

}









  

//-----------------------------------checkboxes validation----------------------------------------/

  function checkQuestion3(){
    // Enter validation for question 3 here

  
    // Accessing the the element in each checkbox using each id's //
    const parrot = document.getElementById('parrot').checked;
    const eagle = document.getElementById('eagle').checked;
    const penguin = document.getElementById('penguin').checked;
    const crow = document.getElementById('crow').checked;

    // created an empty array  //
    let Question3_storage=[];
 
     //  Iteration //
    for (let i = 0 ; i < 4; i++) {

    if(document.forms['quiz']['question3' + (i + 1)]){         // validating if one of the elements in the form has "penguin" display error// 

      Question3_storage.push(document.forms['quiz']['question3' + (i + 1)].value)  
     return Question3_storage;
   }

   // this condition if either of these checkboxes aren't clicked  fall to an error below chose 3 answers// 
   else if(parrot == false  || eagle == false  || crow == false || penguin == true){  
       document.getElementById('result-question3').innerText ='Choose the correct answers'; 
       document.getElementById('result-question3').style.color='red';

      document.getElementById('parrot').disabled =true;
      document.getElementById('eagle').disabled =true;
      document.getElementById('penguin').disabled =true;
      document.getElementById('crow').disabled =true;
  }else{
       // fall to a correct statement if all of the elemets were choosen correctly //
        document.getElementById('result-question3').innerText ='Answers are Correct!'; 
        document.getElementById('result-question3').style.color='green';
         
        document.getElementById('parrot').disabled =true;
        document.getElementById('eagle').disabled =true;
        document.getElementById('penguin').disabled =true;
        document.getElementById('crow').disabled =true;
  }   
    
}

} 







function checkQuestion5(){
  // Enter validation for question 2 here
// if checkboxes are empty //


if(document.getElementById('radioEverest').checked)
{
document.getElementById('result-question5').innerText ='Your answer is Correct!'; 
document.getElementById('result-question5').style.color='green'; 
}else{
document.getElementById('result-question5').innerText ='Your answer is inCorrect!'; 
document.getElementById('result-question5').style.color='red'; 
}
if(!questionare5.value){

  document.getElementById('result-question5').innerText ='You must enter an answer!'; 
  document.getElementById('result-question5').style.color='red'; 
  }

}







function checkQuestion4(){
  // Enter validation for question 3 here


  // Accessing the the element in each checkbox using each id's //
    const shark = document.getElementById('shark').checked;
    const lion = document.getElementById('lion').checked;
    const dolphin = document.getElementById('dolphin').checked;
    const whale = document.getElementById('tiger').checked;

  // created an empty array  //
  let Question4_storage=[];
 
  // accessing all elements using query selector to access the attribute //


   //  Iteration //
   
  for (let j = 0 ; j < 4; j++) {

  if(document.forms['quiz']['question4' + (j + 1)]){         // validating if one of the elements in the array has "penguin" display error// 

    Question4_storage.push(document.forms['quiz']['question4' + (j + 1)].value)  //  push the value to an empty array from iteration //
    
 }

 // this condition if either of these checkboxes aren't clicked  fall to an error below chose 3 answers// 
 else if(shark == false  || dolphin == false  || tiger == true || lion == true){  
     document.getElementById('result-question4').innerText ='Choose the correct answers'; 
     document.getElementById('result-question4').style.color='red';

      document.getElementById('shark').disabled =true;
      document.getElementById('lion').disabled =true;
      document.getElementById('dolphin').disabled =true;
      document.getElementById('tiger').disabled =true;
 

}else{
     // fall to a correct statement if all of the elemets were choosen correctly //
      document.getElementById('result-question4').innerText ='Answers are Correct!'; 
      document.getElementById('result-question4').style.color='green'; 

      document.getElementById('shark').disabled =true;
      document.getElementById('lion').disabled =true;
      document.getElementById('dolphin').disabled =true;
      document.getElementById('tiger').disabled =true;
}   

}
  
} 







  
function CountAnswers(){

  let scores =0;
  if(document.getElementById('radiocheck').checked){
    scores++;
  }
  
  if(document.getElementById('radio2').checked){
    scores++;
  }
  if((document.getElementById('parrot').checked) && (document.getElementById('eagle').checked) && (document.getElementById('crow').checked)){
    scores++;
  }
  if((document.getElementById('shark').checked)&& (document.getElementById('dolphin').checked)){
    scores++;
  }

  if(document.getElementById('radioEverest').checked) {
    scores++;
  }
  
  

  document.getElementById('results').style.display='block';
  document.getElementById('ScoreResults').style.display='block';
  document.getElementById('textscore').style.display='block';
  document.getElementById('results').innerText = scores;

  if(scores == 5){
    document.getElementById('comments').style.display ='block';
    document.getElementById('comments').innerText='Excellent!';

  }else if(scores == 4){
    
    document.getElementById('comments').style.display ='block';
    document.getElementById('comments').innerText='Good Job!';
  }
else if(scores >= 1){
  
  document.getElementById('comments').style.display ='block';
  document.getElementById('comments').innerText='You did not meet the passing scores! Try again!';
  }

  }
  


