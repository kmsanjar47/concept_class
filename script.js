const titels = document.querySelector("h1");
titels.classList.add("red");
titels.classList.add("new");
console.log(titels.classList.contains("red"));
// titels.classList.add('uppercas')
// titels.classList.remove('uppercase')
titels.classList.toggle("uppercase");
console.log(titels.classList.contains("red"));
console.log(titels.classList);
