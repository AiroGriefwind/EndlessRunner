// Rocket prefab
class blob extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.sfxBlob = scene.sound.add('sfx_Blob'); // add rocket sfx

        // add object to existing scene
        scene.add.existing(this); //add to existing, displayList, updateList
        this.isFlipped = false;    //track rocket's firing status
        this.moveSpeed = 2;       //pixels per frame
    }

    update() {
        //left / right movement

        if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed;
        } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
        }



        // jump button


        if (Phaser.Input.Keyboard.JustDown(keySPACE) ) {
            this.isFlipped = true;

            this.sfxBlob.play();  // play sfx
        }

        //if flipped flip the blob
        if (this.isFlipped) {
            //flip the blob upside down
            
        }

       
    }

    
}