let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
    physics:{
      default:'arcade',
      arcade:{debug:true}
    }
  }

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyLEFT, keyRIGHT,keyUP,keyDOWN;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;