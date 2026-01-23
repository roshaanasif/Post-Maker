let selectedColour= document.getElementsByClassName("color-btn");
let CustomColor=document.getElementById("customColor");
let btnDisable=document.getElementById("btn-disable");
let btnDisable1=document.getElementById("btn-disable1");
let btnDisable2=document.getElementById("btn-disable2");
let href=document.getElementById("login-href");
let displayPost=document.getElementById("displayPost");
let textarea=document.getElementById("editpostContent");
// let postBtn=document.getElementById("postButton");
// let welcomingUser=document.getElementById("welcoming");
// let currentUser=JSON.parse(localStorage.getItem("currentUser"));
let edit=JSON.parse(localStorage.getItem("editpost"));


function showToast(message, type = "success") {
  let bgColor =
    type === "success"
      ? "#22c55e"
      : type === "error"
      ? "#ef4444"
      : "#3b82f6";

  Toastify({
    text: message,
    duration: 2000,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    backgroundColor: bgColor
  }).showToast();
}


textarea.innerHTML=edit.content;

if (edit.bold) {
    textarea.style.fontWeight="bold";
}
if (edit.italic) {
    textarea.style.fontStyle="italic";
}
if (edit.underline) {
    textarea.style.fontStyle="underline";
}
if (edit.bgcolour) {
    textarea.style.backgroundColor=edit.bgcolour;
}
if (edit.fontSize) {
    textarea.style.fontSize=edit.fontSize+"px";
    // edit.fontSize=12;
}



// edit.forEach(item => {
//     textarea.innerHTML=item.content;
// });



// bg colour
let setBackgroundColor=(colour=>{
   textarea.style.backgroundColor =colour;
   edit.bgcolour=colour;
       console.log(edit);
})

let setCustomColor=(()=>{
    textarea.style.backgroundColor =CustomColor.value;
    edit.bgcolour=CustomColor.value;
        console.log(edit);
})
// bg colour

let bold=false;
let underline=false;
let italic=false;
// let bold=false;
let formatEditText=(text=>{
    console.log(text);
    if(text=="bold"){
    btnDisable.disabled =true;
    btnDisable.style.background="#c1c1c1";
    textarea.style.fontWeight = "bold";
    edit.bold=true;
    // return "bold";
    }
    if(text=="italic"){
        btnDisable1.disabled =true;
        btnDisable1.style.background="#c1c1c1";
        textarea.style.fontStyle= "italic";
        edit.italic=true;
    }
    if(text=="underline"){
        btnDisable2.disabled =true;
        btnDisable2.style.background="#c1c1c1";
        textarea.style.textDecoration= "underline";
        edit.underline=true;
    }
    if(text=="reset"){
        textarea.style.fontWeight="normal";
        textarea.style.fontStyle= "normal";
        textarea.style.textDecoration= "none";
        textarea.style.background="none";
        textarea.style.fontSize="16px";
        btnDisable.disabled =false;
        btnDisable1.disabled =false;
        btnDisable2.disabled =false;
        btnDisable.style.background="white";
        btnDisable1.style.background="white";
        btnDisable2.style.background="white";
        edit.bold=false;
        edit.underline=false;
        edit.italic=false;
        edit.fontSize=16;
        edit.bgcolour=false;
    }
        console.log(edit);
})


let changeFontSize=(()=>{
    let size=document.getElementById("fontsize").value;
    console.log(size);
    
    if(size=="12"){
        textarea.style.fontSize=12+"px";
        edit.fontSize=12;
    }
     if(size=="16"){
        textarea.style.fontSize=16+"px";
        edit.fontSize=16;
    }
     if(size=="20"){
        textarea.style.fontSize=20+"px";
        edit.fontSize=20;
    }
     if(size=="24"){
        textarea.style.fontSize=24+"px";
        edit.fontSize=24;
    }
    console.log(edit);
    
})

// let posts=[];
let Allposts=JSON.parse(localStorage.getItem("AllPosts"))||[];


let userPosts=JSON.parse(localStorage.getItem("userPosts"))||[];


let EditPost=(()=>{
 console.log("yes");
 
    let textarea=document.getElementById("editpostContent").innerHTML;
    console.log(textarea);
    
    if(textarea.trim()==""){
        showToast("write something to post!!","error")
        return
    }

     edit.content=textarea;
     edit.postTime = new Date().toLocaleString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
                })

                console.log(edit);
                
    // localStorage.setItem("editpost",JSON.stringify(edit));



   let itteration=0;

    Allposts.forEach(item => {
        itteration++;
        if (item.postId==edit.postId) {
            Allposts.splice(itteration-1,1,edit);
            console.log(Allposts);
            
            localStorage.setItem("AllPosts",JSON.stringify(Allposts));
            itteration=0
        }
    });

    userPosts.forEach(item => {
        itteration++;
        if (item.postId==edit.postId) {
            userPosts.splice(itteration-1,1,edit);
            localStorage.setItem("userPosts",JSON.stringify(userPosts));
        }
    });
    
    localStorage.removeItem("editpost");

location.href="../myposts/index.html"
    



});

// postBtn.addEventListener("click",Post)