//selectors
const time=document.getElementById('time');
const greeting=document.getElementById('greeting');
const name=document.getElementById('name');
const date=document.getElementById('date');



//event handler
name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);


//functions

function showtime(){
    let today=new Date();
    let hour=today.getHours();
    let min=today.getMinutes();
    let sec=today.getSeconds();
    let todaydate=today.toDateString();

    //12hrs format
    const amPm=hour>12?'PM':'AM';
    hour=hour%12;

    //output time
    time.innerHTML=`${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span>:</span>${amPm}`;

    date.innerHTML=`${todaydate}`;
    setTimeout(showtime,1000);

    function addZero(n){
        return ((parseInt(n,10)<10?'0':'')+n);

    }
    

}

//set greeting

function setGreeting(){
    let today=new Date();
    let hour=today.getHours();
    console.log(hour);
    if(hour<12){
        document.body.style.backgroundImage='url("./images/federico-respini-sYffw0LNr7s-unsplash.jpg")';
        document.body.style.backgroundSize="100%";
        greeting.innerHTML="Good Morning";
        
    }
    else if(hour<18){
        document.body.style.backgroundImage='url("./images/mutia-rahmah--gpUlHcEdiE-unsplash.jpg")';
        greeting.innerHTML="Good AfterNoon";
        document.body.style.backgroundSize="100%";

    }
    else{
        document.body.style.backgroundImage='url("./images/ryan-hutton-Jztmx9yqjBw-unsplash.jpg")';
        greeting.innerHTML="Good Night";
        document.body.style.backgroundSize="100%";
        time.style.color="white";
        greeting.style.color="white";
        date.style.color="white";
        name.style.color="white";
    }
    

}

function getName(){
    if(localStorage.getItem("mykeyname")===null){
        name.innerHTML="[Enter Your Name]";

    }
    else{
        name.innerHTML=localStorage.getItem("mykeyname");

    }
}

function setName(e){
    if(e.type==="keypress"){
        if(e.keyCode==13){
            localStorage.setItem("mykeyname",e.target.innerHTML);
            name.blur();
        }
    }
    else
    {
        localStorage.setItem("mykeyname",e.target.innerHTML);
    }
}
//function call

showtime();
setGreeting();
getName();
setName();