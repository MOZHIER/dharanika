// var sum=()=>{
//     console.log(10+20)
// }
// sum()
// var sub=()=>{
// console.log(20-10)
// }
// sub()

 function eadd()
 {
    n=1
    sum=0
    while(n<=10)
    {
        if(n%2==0)
        {
            console.log(n)
            sum=sum+n
        }
        n++
    }
    console.log(`the sum is ${sum}`)
 }
 eadd()