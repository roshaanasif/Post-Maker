
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





let gettingUsers=JSON.parse(localStorage.getItem("UsersInfo"))||[];
let users=[];
let signup=((e)=>{
    e.preventDefault(); 
let name=document.getElementById("Username").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
let confirmPassword=document.getElementById("confirm-password").value;

let checkingUserHaveAnAccount=gettingUsers.find(item=>item.userEmail==email);

console.log(checkingUserHaveAnAccount);
if (checkingUserHaveAnAccount) {
   showToast("you already have an account","error")

   setTimeout(()=>{
       location.href="../login/login.html"
   },1000)
return
   
}

if (password.length>5 ) {
    if(password==confirmPassword){
    let user={
        userName:name,
        userEmail:email,
        userPassword:password,
        userId:Date.now(),
    }

    users.push(user);
    localStorage.setItem("UsersInfo",JSON.stringify(users));
    showToast("signup successful");

    setTimeout(()=>{
        location.href="../login/login.html"

    },2000)

    document.getElementById("passsword").value="";
    document.getElementById("confirm-password").value="";
    document.getElementById("email").value="";
    document.getElementById("Username").value="";

    }else{
       showToast("password doesn't match","error")
        // document.getElementById("passsword").value="";
        // document.getElementById("confirm-password").value="";
    }
}else{
    document.getElementById("password").value="";
    document.getElementById("confirm-password").value="";
    showToast("password Should be greator than 5 digits","error")
}

}
)

document.getElementById("SignUpform").addEventListener("submit",signup)
//signup

