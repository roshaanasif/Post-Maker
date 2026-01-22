let selectedColour= document.getElementsByClassName("color-btn");
let CustomColor=document.getElementById("customColor");
let btnDisable=document.getElementById("btn-disable");
let btnDisable1=document.getElementById("btn-disable1");
let btnDisable2=document.getElementById("btn-disable2");
let href=document.getElementById("login-href");
let displayPost=document.getElementById("displayPost");
let textarea=document.getElementById("postContent");
let postBtn=document.getElementById("postButton");
let welcomingUser=document.getElementById("welcoming");
let currentUser=JSON.parse(localStorage.getItem("currentUser"));

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
welcomingUser.innerHTML=`<h1 class="text-xl font-semibold  text-gray-800 mb-5">
     welcome ${currentUser.userName}
    </h1>`

let info={
        postId:Date.now(),
        postedby:currentUser.userName,
}    

// bg colour
let setBackgroundColor=(colour=>{
   textarea.style.backgroundColor =colour;
   info.bgcolour=colour;
       console.log(info);
})

let setCustomColor=(()=>{
    textarea.style.backgroundColor =CustomColor.value;
    info.bgcolour=CustomColor.value;
        console.log(info);
})
// bg colour

let bold=false;
let underline=false;
let italic=false;
// let bold=false;
let formatText=(text=>{
    console.log(text);
    if(text=="bold"){
    btnDisable.disabled =true;
    btnDisable.style.background="#c1c1c1";
    textarea.style.fontWeight = "bold";
    info.bold=true;
    // return "bold";
    }
    if(text=="italic"){
        btnDisable1.disabled =true;
        btnDisable1.style.background="#c1c1c1";
        textarea.style.fontStyle= "italic";
        info.italic=true;
    }
    if(text=="underline"){
        btnDisable2.disabled =true;
        btnDisable2.style.background="#c1c1c1";
        textarea.style.textDecoration= "underline";
        info.underline=true;
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
        info.bold=false;
        info.underline=false;
        info.italic=false;
        info.fontSize=16;
        info.bgcolour=false;
    }
        console.log(info);
})


let changeFontSize=(()=>{
    let size=document.getElementById("fontsize").value;
    console.log(size);
    
    if(size=="12"){
        textarea.style.fontSize=12+"px";
        info.fontSize=12;
    }
     if(size=="16"){
        textarea.style.fontSize=16+"px";
        info.fontSize=16;
    }
     if(size=="20"){
        textarea.style.fontSize=20+"px";
        info.fontSize=20;
    }
     if(size=="24"){
        textarea.style.fontSize=24+"px";
        info.fontSize=24;
    }
    console.log(info);
    
})

let posts=[];
let Allposts=JSON.parse(localStorage.getItem("AllPosts"))||[];


let Post=(()=>{
let userPosts=[];
 console.log("yes");
 
    let textarea=document.getElementById("postContent").innerHTML;
    if(textarea.trim()==""){
        showToast("write something to post!!","error")
        return
    }

    info.content=textarea;
    info.postTime = new Date().toLocaleString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
            })


    Allposts.unshift(info);
    userPosts.push(info);

    localStorage.setItem("AllPosts",JSON.stringify(Allposts));
    localStorage.setItem("userPosts",JSON.stringify(userPosts));

    // console.log(info);
    

    location.href="./posts/post.html";
    

});

// postBtn.addEventListener("click",Post)