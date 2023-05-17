/*
a comment header with your name, game title, approximate hours spent on project, and your creative tilt justification
...do something technically interesting? Are you particularly proud of a programming technique you implemented? 
Did you look beyond the class examples and learn how to do something new? (5)
...have a great visual style? Does it use music or art that you're particularly proud of? 
Are you trying something new or clever with the endless runner form? (5)

Ziyuan Wang
Endless Runner
35h
I recycled a large portion of my Rocket Patrol mod code and modified it according to my need, borrowing a lot of gimmicks from the Paddle Parkour example.
I also found this tutorial https://phasergames.com/creating-endless-runner-game-phaser-part-1/ 
It had multiple parts and somehow I couldn't get mine to work like his. I missed the part where I got wrong so I had to remake the whole structure. 
As for the visual style, most of the art I used is from my last project. I stayed simple and tried to make the game work. Other than that I really like the bgm I used last time so...
*/ 

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
    physics:{
      default:'arcade',
      arcade:{debug:true}
    },
    scene: [ Menu, Play, GameOver ]
  }

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyLEFT, keyRIGHT,keyUP,keyDOWN;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// define globals
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;