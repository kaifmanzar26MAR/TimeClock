//DOM- document object model


const changeTime=()=>{
    const newData= Date.now();
    // console.log(newData)
    const dateString= new Date(newData)
    // console.log(dateString)
    var hour= dateString.getHours();
    console.log(hour);
    const min= dateString.getMinutes();
    console.log(min);
    const sec= dateString.getSeconds();
    console.log(sec);
    var shift=""

    if(hour> 12 ){
        shift="PM"
        hour=hour-12;
        console.log(hour)
    }
    else if(hour===12){
        shift="PM"
    }
    else{
        shift="AM"
    }

    // getting tags refrence buy using the id of the tag
    const hourTag=document.getElementById('hour');
    const minTag=document.getElementById('min');
    const secTag=document.getElementById('sec');
    const shiftTime=document.getElementById('shift');

    //assigning the value of the time in the respective tags
    hourTag.innerText=hour;
    minTag.innerText=min;
    secTag.innerText=sec;
    shiftTime.innerText=shift;
    



}

setInterval(changeTime, 1000);