//Creating the search bar
const fDiv  = $(`<div class="firstdiv"></div>`)
const body = $(`body`);
body.append(fDiv);
const form = $(`<form class="example" action="action_page.php">  <input type="text" placeholder="Search" name="search" onkeyup="myfunction()">
<button type="submit"><i class="fa fa-search"></i></button></form>`)
fDiv.append(form)

// const myfunction = function(){
//   const searchList = $(`<div class="namelist"></div>`)
//   form.append(searchList)

//   if(input.val().startsWith(videos[0].title[0]|| videos[0].title[1])) {
//     const nameDiv0 = $(`<div class="namediv"><p class="result">${vedios[0].title}</p></div>`)
//     searchList.append(nameDiv)
//   }
//   else if(input.val().startsWith(videos[1].title[0]|| videos[1].title[1])) {
//     const nameDiv1 = $(`<div class="namediv"><p class="result">${vedios[1].title}</p></div>`)
//     searchList.append(nameDiv)
//   }
//   else if(input.val().startsWith(videos[2].title[0]|| videos[2].title[1])) {
//     const nameDiv2 = $(`<div class="namediv"><p class="result">${vedios[2].title}</p></div>`)
//     searchList.append(nameDiv)
//   }
//   else if(input.val().startsWith(videos[3].title[0]|| videos[3].title[1])) {
//     const nameDiv3 = $(`<div class="namediv"><p class="result">${vedios[3].title}</p></div>`)
//     searchList.append(nameDiv)
//   }
//   else if(input.val().startsWith(videos[4].title[0]|| videos[4].title[1])) {
//     const nameDiv4 = $(`<div class="namediv"><p class="result">${vedios[4].title}</p></div>`)
//     searchList.append(nameDiv)
//   }
//   else if(input.val().startsWith(videos[5].title[0]|| videos[5].title[1])) {
//     const nameDiv5 = $(`<div class="namediv"><p class="result">${vedios[5].title}</p></div>`)
//     searchList.append(nameDiv)
//   }
//   else if(input.val().startsWith(videos[6].title[0]|| videos[6].title[1])) {
//     const nameDiv6 = $(`<div class="namediv"><p class="result">${vedios[6].title}</p></div>`)
//     searchList.append(nameDiv)
//   }
//   else if(input.val().startsWith(videos[7].title[0]|| videos[7].title[1])) {
//     const nameDiv7 = $(`<div class="namediv"><p class="result">${vedios[7].title}</p></div>`)
//     searchList.append(nameDiv)
//   }
//   else if(input.val().startsWith(videos[8].title[0]|| videos[8].title[1])) {
//     const nameDiv8 = $(`<div class="namediv"><p class="result">${vedios[8].title}</p></div>`)
//     searchList.append(nameDiv)
//   }
//   else if(input.val() === ""){
//     for(let i=0 ; i <10; i++) {
//       searchList.append(`nameDiv${index}`)
//     }
    

//   }
// }




//Creating the menu icon
const menuCon = $(`<div class="bigMenu"></div>`)
fDiv.append(menuCon)
const menuIcon = $(`<div class="menu"></div>`)
const menuIcon2 = $(`<div class="menu"></div>`)
const menuIcon3 = $(`<div class="menu"></div>`)
menuCon.append(menuIcon)
menuCon.append(menuIcon2)
menuCon.append(menuIcon3)
//Creating other icons in the search bar 
const iconDiv = $(`<div class="icons"></div>`)
fDiv.append(iconDiv)
const signIn = $(`<button class="signin"><i class="fa fa-sign-in"></i></button>`)
iconDiv.append(signIn)

const videos = [
    {
      id: "7yLxxyzGiko",
      title: "Kittens walk with a tiny chicken",
      thumbnail: "https://img.youtube.com/vi/7yLxxyzGiko/maxresdefault.jpg",
    },
    {
      id: "rS6cvjFXg9s",
      title: "Cute kitten named Garfield washes its paws and prepares to sleep.",
      thumbnail: "https://img.youtube.com/vi/rS6cvjFXg9s/maxresdefault.jpg",
    },
    {
      id: "BFNekjEgvuk",
      title: "Kitten sleeps sweetly with the Chicken 🐥",
      thumbnail: "https://img.youtube.com/vi/BFNekjEgvuk/maxresdefault.jpg",
    },
    {
      id: "te1fHMaw4UY",
      title: "White kitten and white tiny bunnies 🐰 | It's so Сute! 🥰",
      thumbnail: "https://img.youtube.com/vi/te1fHMaw4UY/maxresdefault.jpg",
    },
    {
      id: "MFyUZqSknvw",
      title: "Kittens meets and walk with a cute white bunny",
      thumbnail: "https://img.youtube.com/vi/MFyUZqSknvw/maxresdefault.jpg",
    },
    {
      id: "hlajmIPiphk",
      title: "Mom Cat playing and talking to her Cute Meowing baby Kittens",
      thumbnail: "https://img.youtube.com/vi/hlajmIPiphk/maxresdefault.jpg",
    },
    {
      id: "Cz47GimSxIc",
      title: "Funny Kitten wags its tail like a Puppy",
      thumbnail: "https://img.youtube.com/vi/Cz47GimSxIc/maxresdefault.jpg",
    },
    {
      id: "RmpuhbdnAfQ",
      title: "Kitty Coco and her Sleepy younger brother 🥰",
      thumbnail: "https://img.youtube.com/vi/RmpuhbdnAfQ/maxresdefault.jpg",
    },
  ];
//making the vedio list by creating a container and creating a new div with the image and the title inside
const secDiv = $(`<div class="seconddiv"></div>`)
body.append(secDiv)
//Creating the vedio description space 
const titleDiv = $(`<div class = "container"></div>`)
body.append(titleDiv)
const title = $(`<p class="title">${videos[0].title}</p>`)
titleDiv.append(title)

const deleted = {}
videos.forEach(function(element, index) {
    const innerDiv = $(`<div class="in${index}"></div>`)
    //Creating event listener on the the div that contains the image and the title
    
    innerDiv.click(function(){
        const iFrame = $("iframe")
        iFrame.attr("src",`https://www.youtube.com/embed/${element.id}`)
        $(".title").text(element.title)
        // if(deleted["removed"]) {
            
        //   secDiv.append(innerDiv)
        //   deleted["removed"].remove()
        // }
        // deleted.removed = innerDiv
        // innerDiv.remove()
        // console.log(deleted)
        
        
    })
    
    
    const img = $(`<img src="${element.thumbnail}" class = "pic${index}">`)
    const text = $(`<p class="text${index}">${element.title}</p>`)
    innerDiv.append(img)
    innerDiv.append(text)
    secDiv.append(innerDiv)
})

//Drawing a line under the title and the like/dislike buttons
const lineDiv = $(`<div class = "lineDiv"></div>`)
body.append(lineDiv)
const line1 = $(`<hr class="line1">`)
lineDiv.append(line1)
const like = $(`<button class = "like"><i class="fa fa-thumbs-up"></i>0</button>`)
lineDiv.append(like)
const disLike = $(`<button class = "dislike"><i class="fa fa-thumbs-down"></i>0</button>`)
lineDiv.append(disLike)
const share = $(`<button class = "share"><i class="fa fa-share"></i>Share</button>`)
lineDiv.append(share)
const save= $(`<button class = "save"><i class="fa fa-download"></i>Save</button>`)
lineDiv.append(save)
//Creating the comment's section
const comment = $(`<div class = "comment"></div>`)
body.append(comment)

const channel = $(`<div class="channel"></div>`)
comment.append(channel)

const profilePic = $(`<img src="كيوت-قطط-4.jpg" class="channelimg">`)
channel.append(profilePic)

const channelName  = $(`<p class="channelname">Teddy Kittens</p>`)
channel.append(channelName)

const sub = $(`<p class="numbersub">1M subscribers</p>`)
channel.append(sub)

const subscribe = $(`<button class="sub">Subscribe</button>`)
channel.append(subscribe)
const textCom = $(`<h1 class = "headercom">Comments</h1>`)
channel.append(textCom)

const users = $(`<div class= "divuser"></div>`)
comment.append(users)

let num = ["Cute kitties.","Oh, i need one!","Funny how the cat walk with the little chicken.","Great vedio.","I wonder how the cat sees the chicken and still staring!","kittie kittie :)"]
num.forEach(function(element,index){
  const user = $(`<div class="user${index}"></div>`)
  users.append(user)
  const userComment = $(`<p class = "comm${index}">${element}</p>`)
  user.append(userComment)

})




    
    
    
    
     



