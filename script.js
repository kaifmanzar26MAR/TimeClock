//DOM- document object model


const changeTime=()=>{
    const newData= Date.now();
    // console.log(newData)
    const dateString= new Date(newData)
    // console.log(dateString)
    const hour= dateString.getHours();
    console.log(hour);
    const min= dateString.getMinutes();
    console.log(min);
    const sec= dateString.getSeconds();
    console.log(sec);

    const hourTag=document.getElementById('hour');
    const minTag=document.getElementById('min');
    const secTag=document.getElementById('sec');

    hourTag.innerText=hour;
    minTag.innerText=min;
    secTag.innerText=sec;
}

setInterval(changeTime, 1000);