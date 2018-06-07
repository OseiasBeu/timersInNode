let i = setInterval(function (){
    console.log('I ' + new Date());
}, 5000);
setTimeout(function(){
    clearInterval(i);
},5000);