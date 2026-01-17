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


let Login=((e)=>{
   e.preventDefault(); 

let password=document.getElementById("password").value.trim();
let email=document.getElementById("email").value.trim();

console.log(email,password);

if(email !="" && password !="" ){
     let currentUser=gettingUsers.find(item=>item.userEmail==email);

    console.log(currentUser);

   
    
     if (currentUser){
         if (currentUser.userPassword!==password) {
        showToast("wrong Passowrd","error");
        document.getElementById("password").value="";
        return

    }
        localStorage.setItem("currentUser",JSON.stringify(currentUser));
        showToast("login successfully");
         setTimeout(()=>{
            location.href="../post.html";
        },2000)
     }else{
        showToast("You don't have an account","error");

        setTimeout(()=>{
            location.href="../signup/index.html";
        },2000)
     }   
}else{
  showToast("Please fill in all fields","error");


}
})
// console.log(document.getElementById("loginForm"));
document.getElementById("loginForm").addEventListener("submit",Login);
