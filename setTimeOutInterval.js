let interval = function (callback, time){
    setTimeout(function(){
        callback();
        // interval(calback,time);
    }, time);
};

interval (function (){
    console.log('R ' + new Date());
}, 1000);