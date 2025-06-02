let color = null;
let mousedown = false;

let body = document.getElementsByTagName("body")[0];
let color_blocks = document.querySelectorAll("#colors-bar > *");
let squares = document.querySelectorAll("#squares > *");
let button = document.getElementsByTagName("button")[0];
let choice=document.getElementById('choice')

button.addEventListener("click", function(){
    for (square of squares){
        square.style.backgroundColor = "white";
    }
});

body.addEventListener("mousedown", function(){
    mousedown = true;
})

body.addEventListener("mouseup", function(){
    mousedown = false;
})


for (color_block of color_blocks){
    color_block.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
        choice.style.backgroundColor=color;
    });
}

for (square of squares){
    square.addEventListener("mousedown", function(event){
        if (color != null) event.target.style.backgroundColor = color;
    });
    square.addEventListener("mouseover", function(event){
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}