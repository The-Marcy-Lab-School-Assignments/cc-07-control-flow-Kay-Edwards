//1

function sumOfFourAndSix(){
    let sum=0;
    for (let i=1; i<=1000;i++){
        
        if(i%4===0 && i%6===0){
            sum+=i;
        }
    }
    return sum;
} 
//console.log(sumOfFourAndSix());

//2
function oddAndEvenInFifteen(){
    for(let i=0;i< 16;i++){
        if(i%2===0){
            console.log(i + "is even");
        }else{
            console.log(i + "is odd");
        }
        }
}

//oddAndEvenInFifteen();

//3
function assignGrade(num){
  if (num>=91 && num <=100){
      console.log("you got an A, your grade was an a" + num)
  }else if(num<=81 &&num<=90){
      console.log("you got an B, your grade was an b" + num)
}

assignGrade(85)




