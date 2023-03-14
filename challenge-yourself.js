
const isPasses = score => (score >= 5) ? true : false;
// const isPassed = score => (score > 8) ? console.log(`Excellent`)
    


const rubric_grading = (score) => {
   if(isPasses(score)){

        if(score  === 11){
            console.log(`Perfect`);
        } else if(score > 8){
            console.log(`Excellent`);
        } else {
            console.log(`Passing score`);
        }   
        
   }else {
        console.log(`Not Passing Score`);
   }
}

rubric_grading(9);