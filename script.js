let images = [
  "https://images.unsplash.com/photo-1513343987712-5da15ea2a9bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
  "https://images.unsplash.com/photo-1566155676296-132ad1edce95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1526959300019-11dd99a21233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1546435107-91bf5fab68cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1552820064-a38f60c83b41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
  "https://images.unsplash.com/photo-1506374322094-6021fc3926f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1406&q=80",
  "https://images.unsplash.com/photo-1548842765-a15dba4fbbbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
];

let index = 0; 

let img = document.querySelector('img');
let next = document.getElementById('right');
let prev = document.getElementById('left');

let incrementIndex = function(){
    index = index + 1;
    if (index > images.length - 1) {index = 0}
    return index;
}

let decrementIndex = function(){
    index = index - 1;
    if (index < 0) {index = images.length - 1}
    return index;
}
next.onclick = function(){
  img.setAttribute('src', images[incrementIndex(index)]);  
}

prev.onclick = function(){
  img.setAttribute('src', images[decrementIndex(index)]);  
}

let nextColor = function(){
  let color = function() {
      return Math.round(Math.random()*50); 
  }
     return 'rgb(' + color() + "," + color() + "," + color() + ")";
}

let changeBG = document.querySelector('#changeBackground');

changeBG.onclick = function(){
  document.body.style.backgroundColor = nextColor();
}