let milisec = 00;
let second = 00;
let minute = 00;
let getmilisec = document.querySelector('.milisec');
let getsecond = document.querySelector('.second');
let getminute = document.querySelector('.minute');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let interval;



btnStart.addEventListener('click',()=>{
    interval = setInterval(starttimer,10);
})

btnStop.addEventListener('click',()=>{
    clearInterval(interval);
})

btnReset.addEventListener('click',()=>{
    clearInterval(interval);
    milisec = 00;
    second = 00;
    minute = 00;
    getmilisec.innerHTML= '0'+ milisec;
    getsecond.innerHTML= '0'+ second;
    getminute.innerHTML= '0'+ minute;
})



function starttimer(){
    milisec++;
    if(milisec <=9){
        getmilisec.innerHTML= '0'+ milisec;
    }
    if(milisec > 9){
        getmilisec.innerHTML= milisec;
    }
    if(milisec > 99){
        second++;
        getsecond.innerHTML= '0' + second;
        milisec=0;
        // getmilisec.innerHTML= '0' + 0;
        getmilisec.innerHTML= '0'+ milisec;
    }
    if(second > 9 ){
        getsecond.innerHTML=second;
    }
    if(second > 60){
        minute++;
        getminute.innerHTML= '0' + minute;
        second=0;
        getmilisec.innerHTML= '0'+ second;
    }
    if(minute > 9 ){
        getminute.innerHTML=minute;
    }
}