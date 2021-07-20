StopWatch = {
    hours: 0,
    seconds: 0,
    minutes: 0,
    internalId: null,
    counter: 0,
    estop: false,
    erestart:false,
      
    counterHasChange: function (hours, minutes, seconds) {},
    start: function () {
        if(StopWatch.counter>0){
        StopWatch.estop=false
   
        }else{
        if(StopWatch.erestart == true)
        {
            StopWatch.estop =false
            StopWatch.erestart = false
        }else{
        StopWatch.internalId = setInterval(function () {
            if(StopWatch.estop != true){
            StopWatch.counter ++
            StopWatch.seconds = StopWatch.counter % 60
            StopWatch.minutes = Math.floor(StopWatch.counter / 60)
            StopWatch.hours = Math.floor(StopWatch.counter / 3600)
            StopWatch.counterHasChange(StopWatch.hours, StopWatch.minutes, StopWatch.seconds)}
        }, 1000)}}

        
    },
    restart: function(){
        StopWatch.counter= 0
        StopWatch.seconds = 0
        StopWatch.minutes = 0
        StopWatch.hours = 0
        StopWatch.estop = true
        StopWatch.erestart = true
        StopWatch.counterHasChange(StopWatch.hours, StopWatch.minutes, StopWatch.seconds)
        
     },
    stop:function(){
        StopWatch.estop = true
        

    }

}