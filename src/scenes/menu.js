class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_explosion2', './assets/explosion1.mp3');
        this.load.audio('sfx_explosion3', './assets/explosion2.mp3');
        this.load.audio('sfx_explosion4', './assets/explosion4.mp3');
        // this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create() {
        let menuConfig = {
            fontFamily: 'Light',
            fontSize: '56px',
            backgroundColor: '#00FFF0',
            color: '#000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //show menu text
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize -
            borderPadding*5, 'ENDLESS RUNNER', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '28px';
        menuConfig.backgroundColor = '#000FF0';
        this.add.text(game.config.width / 2, game.config.height / 2, 'Use ←→ arrows to move & (SPACE) to jump',
            menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#F3B141';
        menuConfig.color = '#843605';

        this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize +
            borderPadding * 2, 'Press SPACE to Start', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            // easy mode
            // game.settings = {
            //     spaceshipSpeed: 3,
            //     gameTimer: 60000

            // }
            // display timer
            //this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        // if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        //     // hard mode
        //     game.settings = {
        //         spaceshipSpeed: 4,
        //         gameTimer: 45000
        //     }
        //     this.sound.play('sfx_select');
        //     this.scene.start('playScene');
        // }
    }
}