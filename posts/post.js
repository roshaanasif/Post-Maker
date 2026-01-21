// let para=document.getElementById("para");
let postsContainer=document.getElementById("postsContainer");
let allPosts=JSON.parse(localStorage.getItem("AllPosts"));
let currentUser=JSON.parse(localStorage.getItem("currentUser"));



allPosts.forEach(item => {

  let newContent=item.content;   
  let gettingInitials=item.postedby.split('');
 
  // if(item.bold){
  //   newContent.style.fontWeight="font-bold";
  // }
  // if(item.italic){
  //   newContent.style.fontStyle = "italic"; 
  // }
  // if(item.underline){
  //   newContent.style.textDecoration = "underline";
  // }
  
  // newContent.style.fontSize=item.fontSize+"px";
  // newContent.style.backgroundColor=item.bgcolour;

  let classes = "max-w-[500px] bg-white mt-5  px-4 py-2 border rounded";
  classes += item.bold ? "font-bold " : "";
  classes += item.italic ? "italic " : "";
  classes += item.underline ? "underline " : "";


    postsContainer.innerHTML+=`  <div class="bg-white w-full rounded-lg shadow mt-4 p-4 space-y-3">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
          ${gettingInitials[0].toUpperCase()}
        </div>
        <div>
          <h3 class="font-semibold">${currentUser.userName}</h3>
          <p class="text-xs text-gray-500">${item.postTime}</p>
        </div>
      </div>

     
     <p id="para"  class="${classes}" style="font-size:${item.fontSize}px; background-color:${item.bgcolour}">
       ${newContent}
     </p> 



      <div class="flex justify-between pt-2 border-t text-sm text-gray-600">
        <button class="hover:text-blue-600 font-medium">👍 Like</button>
        <button class="hover:text-blue-600 font-medium">💬 Comment</button>
        <button class="hover:text-blue-600 font-medium">↗ Share</button>
      </div>
    </div>`
});



