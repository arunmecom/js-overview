// setTimeout
// clearTimeout()
// setInterval(handler)
// clearInterval()

// console.log('I am working');

// setTimeout(() => {
//    console.log('I am getting print after 3 sec') 
// }, 3000);

// var i = 0;

//  function mytimer(){
//      if(i>10){
//          return;
//      }
//     setTimeout(() => {
//         i +=1 
//         mytimer()
//         console.log(i)
//     }, 1000);
// }
// mytimer()

// for(i=0; i<10; i++){
//     timer();
// }
// setInterval(function(){
//     console.log('I am printing after 1 sec')
// }, 1000)

// for(var i = 0; i<10; i++){
//     setTimeout(function(){
//         console.log(i)
//     },1000)
// }

var i = 0;
var mynewtimer = 
    setInterval(() => {
        i+= 1;
        if( i==10){
            clearInterval(mynewtimer)
        }
        
        console.log(i);
    },1000)

mynewtimer
