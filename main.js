canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

// rover_height = 90;
// rover_width = 100;
carwidth = 70
carheight = 120
carwwidth = 90
carwheight = 100
img_list = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
randomnumber = Math.floor(Math.random()*4)
console.log(randomnumber)
background_img = "https://i.postimg.cc/bv5d35nK/racing.jpg";
// rover_img = "car1.png";
car1 = "1.png"
car2 = "car2.png"

cary = 0;
carx = 0;


carwx = 20;
carwy = 10;



function add(){
    background_img_tag = new Image();
    background_img_tag.onload = uploadbackground;
    background_img_tag.src = background_img;
    
    car1_img_tag = new Image();
    car1_img_tag.onload = car1upload;
    car1_img_tag.src = car1;


    carwimage_tag = new Image();
    carwimage_tag.onload = car2;
    carwimage_tag.src = car2;
}

function uploadbackground(){
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);

}
// function uploadrover(){
    // // // // // ctx.drawImage(rover_img_tag,rover_x, rover_y, rover_width, rover_height);
// }
function car1upload(){
    ctx.drawImage(car1_img_tag,carx, cary, carwidth, carheight);
}
function car2upload(){
    ctx.drawImage(carwimage_tag,carwx, carwy, carwwidth, carwheight);
}


window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypresses = e.keyCode;
    console.log(keypresses);

    if(keypresses == '65'){
        leftcar1();
        console.log("left");
        

    }
    else if(keypresses == '87'){
        upcar1();
        console.log("up");
        
    }
    else if(keypresses == '68'){
        rightcar1();
        console.log("right");
        
        
    }
    else if(keypresses == '83'){
        downcar1();
        console.log("down");
        
        
    }

    



    else if(keypresses == '37'){
        leftcar2();
        console.log("left");
        

    }
    else if(keypresses == '38'){
        upcar2();
        console.log("up");
        
    }
    else if(keypresses == '39'){
        console.log("right");
        rightcar2();
        
    }
    else if(keypresses == '40'){
        console.log("down");
        downcar2();
        
    }
}



function upcar1(){
    if (cary >= 0){
        cary -= 20;
        console.log("X Cordinates Are: "+carx+"And TheseAre The Y Cordinates"+cary);
        uploadbackground();
        car1upload();
        car2upload()

    }
    
}
function downcar1(){
    if (cary <= 700){
        cary += 20;
        console.log("X Cordinates Are: "+carx+"And TheseAre The Y Cordinates"+cary);
        uploadbackground();
        car1upload();
        car2upload()
    }
    
}
function leftcar1(){
    if (carx >= 0){
        carx -= 20;
        console.log("X Cordinates Are: "+carx+"And TheseAre The Y Cordinates"+cary);
        uploadbackground();
        car1upload();
        car2upload()

    }
    
}

function rightcar1(){
    if (carx <= 800){
        carx += 20;
        console.log("X Cordinates Are: "+carx+"And TheseAre The Y Cordinates"+cary);
        uploadbackground();
        car1upload();
        car2upload()

    }
    
}






function upcar2(){
    if (carwy >= 0){
        carwy -= 20;
        console.log("X Cordinates Are: "+carx+"And TheseAre The Y Cordinates"+cary);
        uploadbackground();
        car2upload();
        car1upload();

    }
    
}
function downcar2(){
    if (carwy <= 700){
        carwy += 20;
        console.log("X Cordinates Are: "+carwx+"And TheseAre The Y Cordinates"+carwy);
        uploadbackground();
        car2upload();
        car1upload();

    }
    
}
function leftcar2(){
    if (carwx >= 0){
        carwx -= 20;
        console.log("X Cordinates Are: "+carwx+"And TheseAre The Y Cordinates"+carwy);
        uploadbackground();
        car2upload();
        car1upload();

    }
    
}

function rightcar2(){
    if (carwx <= 800){
        carwx += 20;
        console.log("X Cordinates Are: "+carwx+"And TheseAre The Y Cordinates"+carwy);
        uploadbackground();
        car2upload();
        car1upload();

    }
    
}