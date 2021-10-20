function preload(){
}

function setup(){
    canvas = createCanvas(300, 300);
}

function draw(){
}

function take_snapshot(){
    file_name = document.getElementById("file_name").value;
    save(file_name + '.jpg')
}