const fDiv  = $(`<div class="firstdiv"></div>`)
const body = $(`body`);
body.append(fDiv);
const search = $(`<input class="search" type = text placeholder = Search> `)
fDiv.append(search)
const firstUl = $(`<ul class="dashes"></ul>`)

const iList = [1,2,3]
iList.forEach(function (element, index) {
    const li = $(`<li class="list${index}">${element}<li>`)
    firstUl.append(li) 
});
fDiv.append(firstUl)
const srButton = $(`<button class = "searchbutton">s</button>`)
search.append(srButton)
const secDiv = $(`<div class="seconddiv"></div>`)
body.append(secDiv)
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


videos.forEach(function(element, index) {
    const innerDiv = $(`<div class = "photodiv${index}"></div>`)
    const img = $(`<img src="${element.thumbnail}" class = "pic${index}">`)
    const text = $(`<p class="text${index}">${element.title}</p>`)
    secDiv.append(innerDiv)
    innerDiv.append(img)
    innerDiv.append(text)



    
    
    
    
     
})  


