//console.log("first commit")
// const logNumbers=()=>{
//     for(let i=1;i<=20;i++){
//         console.log(i)
//     }
// }
// logNumbers()
const getMyNumbers = () =>{
    let num;
        for(let i=1; i<101; i++){
            num=i;
        
        if(num%3===0 && num%5===0){
            console.log(`FizzBuzz`);
        }
        else if(num%3===0){
            console.log(`Fizz`);
        }
        else if(num%5===0){
            console.log(`Buzz`);
        }
        else {
            console.log(num);
        }
    }
}
getMyNumbers();
