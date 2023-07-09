const delay = ms => new Promise(res => setTimeout(res, ms));

const setTime = async () => {
    

    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    while(true){
        var date = new Date();
        hours.innerHTML = (date.getHours()<10?'0':'') + date.getHours();
        minutes.innerHTML = (date.getMinutes()<10?'0':'') +date.getMinutes();
        seconds.innerHTML = (date.getSeconds()<10?'0':'') + date.getSeconds();
        await delay(1000);
    }
  };

 setTime();