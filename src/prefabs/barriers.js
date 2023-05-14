// Rocket prefab
class barrier extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
      super(scene, x, y, texture, frame, pointValue);
  
      
      scene.add.existing(this); //add to existing scene
      this.points = pointValue; //store pointValue
      this.moveSpeed = 3;       //pixels per frame
      this.direction = -1; // randomly set direction to -1 or 1

      
    }

    update(){
        //move barrier left or right based on direction
        this.x += this.moveSpeed*this.direction;

        // //wrap around from left edge to right edge
        // if (this.x <= 0 - this.width){
        //     this.reset();
        // }
        
        // wrap around from right edge to left edge or vice versa
        if (this.direction === -1 && this.x <= 0 - this.width) {
            this.reset();
        } 
    }
    
    //position reset
    reset() {
        

        // reset position based on direction
        if (this.direction === -1) {
            this.x = game.config.width + this.width;
        }
    }
  }