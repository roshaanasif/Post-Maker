let postsContainer=document.getElementById("postsContainer");
let myPosts=JSON.parse(localStorage.getItem("userPosts"));
let allposts=JSON.parse(localStorage.getItem("AllPosts"));
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


let renderPosts=(()=>{
postsContainer.innerHTML="";

// if (myPosts==null ||myPosts.length==0){
//    postsContainer.innerHTML=`  <div class="bg-white w-full shadow-md  rounded-lg  mt-4 p-4 space-y-3">
//       <div class="flex justify-center items-center gap-3">
//           <h3 class="text-center font-semibold">No posts Available</h3>
//         </div>
//       </div>`
// return 
// }
let postnumbers=0
allposts.forEach(item => {

     
  let gettingInitials=item.postedby.split('');

  let classes = "max-w-[500px] bg-white mt-5  px-4 py-2 border rounded ";
  classes += item.bold ? "font-bold " : "";
  classes += item.italic ? "italic " : "";
  classes += item.underline ? "underline " : "";


  if (item.userId==currentUser.userId) {
    postnumbers++;
      postsContainer.innerHTML+=`  <div class="bg-white w-full rounded-lg shadow mt-4 p-4 space-y-3">
      <div class="flex items-center justify-between gap-3">
         <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
              ${gettingInitials[0].toUpperCase()}
            </div>
            <div>
              <h3 class="font-semibold">${item.postedby}</h3>
              <p class="text-xs text-gray-500">${item.postTime}</p>
            </div>
          </div> 


          <div class="w-[20%] justify-end flex gap-3">
            <div onclick="deletePost(${item.postId})">
              <i class="fa-solid text-red-500 hover:text-red-600 fa-trash"></i>
            </div>  

            <div onclick="EditPost(${item.postId})">
              <i class="fa-solid text-green-500 hover:text-green-600 fa-edit"></i>
            </div>  
          </div>    
      </div>

     
     <p id="para"  class="${classes}" style=" font-size:${item.fontSize}px; background-color:${item.bgcolour}">
       ${item.content}
     </p> 

      <div class="flex justify-between pt-2 border-t text-sm text-gray-600">
        <button class="hover:text-blue-600 font-medium"><i class="fa-regular fa-thumbs-up"></i> Like</button>
        <button class="hover:text-blue-600 font-medium"><i class="fa-solid fa-comment-dots"></i> Comment</button>
        <button class="hover:text-blue-600 font-medium"><i class="fa-solid fa-up-right-from-square"></i> Share</button>
      </div>
    </div>`

  }


if (postnumbers==0) {
   postsContainer.innerHTML=`  <div class="bg-white w-full shadow-md  rounded-lg  mt-4 p-4 space-y-3">
       <div class="flex justify-center items-center gap-3">
           <h3 class="text-center font-semibold">No posts Available</h3>
         </div>
       </div>`
}
  
});
});


renderPosts();



// deletePost
let deletePost=((id)=>{
  let itteration=0;
  allposts.forEach(item => {
    itteration++;
    if(item.postId==id){
      console.log(itteration);
      allposts.splice(itteration-1,1);
      itteration=0;
      localStorage.setItem("AllPosts",JSON.stringify(allposts));
    }
  });
  
  renderPosts();


//  allposts.forEach(item => {
//   itteration++
//     if(item.postId==id){
//      allposts.splice(itteration-1,1); 
//      localStorage.setItem("AllPosts",JSON.stringify(allposts));
//       // showToast("post deleted succesfully !!","success");
//     }
showToast("post deleted succesfully !!","success");

  });
  

 


//edit post
let EditPost=((id)=>{
  // let edit=[];
  myPosts.forEach(item => {
    if(item.postId==id){
      // edit.push(item);
      localStorage.setItem("editpost",JSON.stringify(item));
      
      location.href="../editpost/index.html"
     
    } 
  })
})