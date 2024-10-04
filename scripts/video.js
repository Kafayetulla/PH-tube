console.log('video script add')
// false,load and show categories on html 
function getTimeString(time){

    const hour=parseInt(time/60);
    let remainingSecond=(time%3600);
    const minute =parseInt(remainingSecond/60);
    remainingSecond=remainingSecond % 60;
    return` ${hour} hour ${minute} minute ${remainingSecond} second ago`;
}
// creat loadCategories
const loadCategories=()=>{
    // fetch the data 
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=>displaCategories(data.categories))
    .catch((error)=>console.log(error));
};
const loadVideos=()=>{
    // fetch the data 
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res)=>res.json())
    .then((data)=>displayVideos(data.videos))
    .catch((error)=>console.log(error));
};
// const cardDemo={
//     category_id: "1001",
//     video_id: "aaad",
//     thumbnail: "https://i.ibb.co/f9FBQwz/smells.jpg",
//     title: "Smells Like Teen Spirit",
//     authors: [
//         {
//             profile_picture: "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
//             profile_name: "Oliver Harris",
//             verified: true
//         }
//     ],
//     others: {
//         views: "5.4K",
//         posted_date: "1672656000"
//     },
//     description: "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit."
// };
const displayVideos=(videos)=>{
    const videoContainer=document.getElementById("videos")
    videos.forEach((video)=>{
console.log(video);
const card =document.createElement("div")
card.classList="card card-compact";
card.innerHTML=`
<figure class="h-[200px] relative" >
    <img
      src=${video.thumbnail} class="h-full w-full object-cover" >
      ${video.others.posted_date?.length==0
        ?""
        :`<span class="absolute right-2 bottom-2 bg-black text-white text-xs rounded p-1">${getTimeString(video.others.posted_date)}</span>
    `}
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img src=${video.authors[0].profile_picture} class="h-10 w-10 rounded-full">
    </div>
    <div>
    <h2 class="font-bold">${video.title}</h2>
    <div class="flex items-center gap-2">
    <p class="text-gray-400">${video.authors[0].profile_name}</p>
${
    video.authors[0].verified==true?`<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png">`:""
}
    </div>
    </div>
  </div>
`;
videoContainer.append(card);
    })
};
// create displaCategories
const displaCategories=(categories)=>{
    const categoryContainer = document.getElementById('categories')
    categories.forEach((item)=>{
        console.log(item);
        // crete button 
        const button =document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;
        button.onclick=alert("hello");
        // add button to categories conatainer
        categoryContainer.append(button); 
    });
};
loadCategories();
loadVideos();