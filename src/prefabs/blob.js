// Rocket prefab
class blob extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        //this.sfxBlob = scene.sound.add('sfx_Blob'); 

        // add object to existing scene
        scene.add.existing(this); //add to existing, displayList, updateList
        this.isJumping=false;
        //this.isFlipped = false;    //track rocket's firing status
        this.moveSpeed = 2;       //pixels per frame
    }

    update() {
        //left / right movement

        if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed;
        } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
        }



        // up / down button 


        // if (Phaser.Input.Keyboard.KeyCodes.UP||Phaser.Input.Keyboard.KeyCodes.DOWN) {
        //     this.isJumping = true;
        // }

        if ( keyUP.isDown && this.y >= borderUISize * 3 + borderPadding) {
            //this.sfxBlob.play();  // play sfx
            this.y -= this.moveSpeed * 4;
            //this.isFlipped == true;
            
            
        }
         else if (keyDOWN.isDown && this.y <= game.config.height - borderUISize - 2* borderPadding)
        {
            //this.sfxBlob.play();  // play sfx
            this.y += this.moveSpeed * 4;
            //this.isFlipped == false;
            
            
        }

        // if (this.y <= borderUISize * 3 + borderPadding ) {
        //     this.reset();
        // }

        //if flipped flip the blob
        // if (this.isFlipped) {
        //     //flip the blob upside down
        //     this.setScale(1,-1);
        // }


    }


}