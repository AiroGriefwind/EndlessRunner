class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOverScene');
    }

    // preload()
    // {
    //     // load font
    //     this.load.bitmapFont('gem', 'font/gem.png', 'font/gem.xml');
    // }

    create() {

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 500
        }

        this.add.text(game.config.width / 2, game.config.height / 2, 'GAME OVER', scoreConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + 64, 'Press (up) to Restart or ← for Menu', scoreConfig).setOrigin(0.5);

        // // check for high score in local storage
        // // uncomment console.log statements if you need to debug local storage
        // if(localStorage.getItem('hiscore') != null) {
        //     let storedScore = parseInt(localStorage.getItem('hiscore'));
        //     //console.log(`storedScore: ${storedScore}`);
        //     // see if current score is higher than stored score
        //     if(level > storedScore) {
        //         //console.log(`New high score: ${level}`);
        //         localStorage.setItem('hiscore', level.toString());
        //         highScore = level;
        //         newHighScore = true;
        //     } else {
        //         //console.log('No new high score :/');
        //         highScore = parseInt(localStorage.getItem('hiscore'));
        //         newHighScore = false;
        //     }
        // } else {
        //     //console.log('No high score stored. Creating new.');
        //     highScore = level;
        //     localStorage.setItem('hiscore', highScore.toString());
        //     newHighScore = true;
        // }

        // add GAME OVER text
        // if(newHighScore) {
        //     this.add.bitmapText(centerX, centerY - textSpacer, 'gem', 'New Hi-Score!', 32).setOrigin(0.5);
        // }
        //this.add.bitmapText(centerX, centerY, 'gem', `Disintegration averted for ${level}s`, 48).setOrigin(0.5);
        //this.add.bitmapText(centerX, centerY + textSpacer, 'gem', `This browser's best: ${highScore}s`, 24).setOrigin(0.5);
        //this.add.bitmapText(centerX, centerY + textSpacer*2, 'gem', `Press UP ARROW to Restart`, 36).setOrigin(0.5);

        // set up cursor keys
        //cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // wait for UP input to restart game
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
            //         let textureManager = this.textures;
            //         console.log(textureManager)
            //         // take snapshot of the entire game viewport (same as title screen)
            //         this.game.renderer.snapshot((snapshotImage) => {
            //             console.log('took snapshot in GameOver')
            //             if (textureManager.exists('titlesnapshot')) {
            //                 textureManager.remove('titlesnapshot');
            //             }
            //             textureManager.addImage('titlesnapshot', snapshotImage);
            //         });

            //         // start next scene
            //         this.scene.start('playScene');
            this.scene.start('playScene');
        }
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            //         let textureManager = this.textures;
            //         console.log(textureManager)
            //         // take snapshot of the entire game viewport (same as title screen)
            //         this.game.renderer.snapshot((snapshotImage) => {
            //             console.log('took snapshot in GameOver')
            //             if (textureManager.exists('titlesnapshot')) {
            //                 textureManager.remove('titlesnapshot');
            //             }
            //             textureManager.addImage('titlesnapshot', snapshotImage);
            //         });

            //         // start next scene
            //         this.scene.start('playScene');
            this.scene.start('menuScene');
        }
        


    }
}