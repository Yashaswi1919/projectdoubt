var cat,mouse,catImg,cat_running;
function preload() {
    //load the images here
    cat_running=loadAnimation("cat1.png,cat2.png,cat3.png,cat4.png") ;

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,200,50,50)
    cat.addAnimation("moving",cat_running);

    mouse = createSprite(600,200,50,50)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
   
    cat.display();
    drawSprites();
    }
  
   


function keyPressed(){
   

  //For moving and changing animation write code here


}
