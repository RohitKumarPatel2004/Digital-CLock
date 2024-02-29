setInterval(() => {
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let session="AM";

    if(hour>12){
        hour=hour-12
        session="PM";
    }

    let h = hour <= 9 ? "0" + hour : hour
    let m = min <= 9 ? "0" + min : min
    let s = sec <= 9 ? "0" + sec : sec

   

    let time = document.querySelector(".clock");
    time.innerText = `${h} : ${m} : ${s} ${session}`
},1000)
