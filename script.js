let hours = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");

let starttimerbtn = document.getElementById("starttimer");
let listdiv = document.getElementById("timerlist");
let brandnew = document.getElementById("brandnew");



// Creating an variable for delete row
let i =0;

// FUNCTION OF Adding the timer to the list
function starthebuzzer(){
   
    let sec = parseInt(second.value);
    let min = parseInt(minute.value);
    let hr = parseInt(hours.value);

    // CONDITION TO CHECK REGARDING THE INPUT ENTER RIGHT OR NOT
    if(sec>=0 && sec<=60 && min>=0 && min<=60 && hr>=0 && hr<=24){
     
    // First let us delete the text present in section
    let text = document.getElementById("timerlistp");
    if(text){
        listdiv.remove(text);
    }
   
    // let us create custom data attribute
    i++;

    // Let us create timer slot
    let slot = document.createElement("div");
    slot.setAttribute("class","displaytimercss");
    slot.setAttribute("style", "margin-bottom:30px");
    slot.setAttribute("id",i);

    let ptext = document.createElement("p");
    ptext.textContent="Time left :";

    let h1tag = document.createElement("h1");
    let inp1 = document.createElement("input");
    let inp2 = document.createElement("input");
    let inp3 = document.createElement("input");
    inp1.value = hr;
    inp2.value = min;
    inp3.value = sec;
    inp1.setAttribute("class", "edittime");
    inp2.setAttribute("class", "edittime");
    inp3.setAttribute("class", "edittime");
    h1tag.append(inp1,inp2,inp3);

    let slotbtn = document.createElement("button");
    slotbtn.textContent = "Delete";
    slotbtn.setAttribute("class","btncss" );
    // GETTING  ATTRIBUTE TO DELETE ROW FROM DIV
    let custom = slot.getAttribute("id");
    slotbtn.onclick = function(){deleteslot(custom)}
    console.log(custom);
    slot.append(ptext,h1tag,slotbtn);
    brandnew.appendChild(slot);
    
    hours.value="";
    minute.value="";
    second.value="";
    
    
    // Let us give functionality to timer
   
 
    let timercount = setInterval(()=>{
        
       if(inp3.value == 1 && inp2.value != 0){
       inp2.value = --min;
       sec = 60;
       inp3.value = sec;
        }

        else if(inp3.value ==1 && inp2.value==0 && inp1.value!=0){
        inp1.value = --hr;
        min = 60;
        inp2.value = min;
        sec = 60;
       inp3.value = sec;
        }

   
        else if(inp1.value==0 && inp2.value == 0 && inp3.value == 0 ){
        
        clearInterval(timercount);
 
        // CREATING THE TIMER OVER TEXT

        h1tag.remove();
        // let newtext = document.createElement("h1");
        ptext.innerHTML="Timer Is Up !";
        ptext.setAttribute("class", "timeralert");
        // slot.appendChild(newtext);
        slot.setAttribute("class", "alarmover");
        slotbtn.textContent = "Stop";
        slotbtn.setAttribute("class","btnchanged")
        // ADDED THE AUDIO
        let audio = document.createElement("audio");
        audio.setAttribute("autoplay", "true");
        audio.setAttribute("src", "audioone.mp3");
        slot.appendChild(audio);
        return;
        }
        inp3.value = --sec;
        },1000)

    }
    else{
        alert("Please input Data properly in a format of 24Hr: 60Min: 60Sec");
    }
}


//FUNCTION OF DELETE SLOT FROM LIST

function deleteslot(slotid){
   let deleterow = document.getElementById(slotid);
   deleterow.remove();
}


// EVENT LSITENER OF SET TIMER BUTTON TO ADD IN ACTIVE LIST
starttimerbtn.addEventListener("click",starthebuzzer);