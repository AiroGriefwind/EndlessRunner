class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('blob', './assets/blob.png');
        this.load.image('ground', './assets/ground.png');
        this.load.image('barrier', './assets/barrier.png');
        this.load.image('background', './assets/background.png');
        this.load.image('particle', './assets/particle.png');
        //
        this.load.audio('bgm', './assets/eco-technology-145636.mp3');
        // // load spritesheet
        this.load.spritesheet('explosion', './assets/explosion.png',
            { frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9 });
    }

    create() {
        //
        const bgm = this.sound.get('bgm');
        if (!bgm) {
            const newBgm = this.sound.add('bgm', { loop: true });
            newBgm.play();
            newBgm.volume = 0.5;
        }


        // place tile sprite
        this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);

        //green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width,
            borderUISize * 2, 0x00FF00).setOrigin(0, 0);

        //white borders
        this.add.rectangle(0, 0, game.config.width,
            borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width,
            borderUISize, 0XFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height,
            0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height,
            0xFFFFFF).setOrigin(0, 0);

        //  add blob (p1)
        //  this.blob = new blob(this, game.config.width / 2,
        //      game.config.height - borderUISize - borderPadding, 'blob').setOrigin(0.5, 0);

        this.blob = new blob(this, game.config.width / 2,
            game.config.height - borderUISize - 2 * borderPadding, 'blob').setOrigin(0.5, 0);


        // add ground


        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);


        // // add barrier (x3)
        this.barrier01 = new barrier(this, game.config.width + borderUISize * 6, borderUISize * 4, 'barrier', 0, 30).setOrigin(0, 0);
        this.barrier02 = new barrier(this, game.config.width + borderUISize * 3, borderUISize * 5 + borderPadding * 2, 'barrier', 0, 20).setOrigin(0, 0);
        this.barrier03 = new barrier(this, game.config.width, borderUISize * 6 + borderPadding * 4, 'barrier', 0, 10).setOrigin(0, 0);
        this.barrier04 = new barrier(this, game.config.width + borderUISize * 9, borderUISize * 4, 'barrier', 0, 40).setOrigin(0, 0);
        this.barrier05 = new barrier(this, game.config.width + borderUISize * 12, borderUISize * 4, 'barrier', 0, 50).setOrigin(0, 0);
        this.barrier06 = new barrier(this, game.config.width + borderUISize * 15, borderUISize * 4, 'barrier', 0, 60).setOrigin(0, 0);

        // animation config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0 }),
            frameRate: 30
        });

        // initialize score
        this.p1Score = 0;
        if (!window.localStorage.getItem('HS')) {
            window.localStorage.setItem('HS', 0)
        }
        this.HighScore = window.localStorage.getItem('HS');
        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding * 2, this.p1Score + '\n' + "HS: " + this.HighScore, scoreConfig);


        // GAME OVER flag
        this.gameOver = false;

        // 60-second play clock
        scoreConfig.fixedWidth = 0;


    }



    update() {
        // update timer text
        //this.timerText.setText('Time: ' + Math.ceil(this.clock.getRemainingSeconds()));

        if (!this.blob.isDestroyed) {
            this.background.tilePositionX -= 4;
            if (!this.gameOver) {
                this.blob.update();         // update rocket sprite
                this.barrier01.update();           // update spaceships (x4)
                this.barrier02.update();
                this.barrier03.update();
                this.barrier04.update();
                this.barrier05.update();
                this.barrier06.update();
                //this.barrier2.update();
            }




            


            // check collisions
            if (this.checkCollision(this.blob, this.barrier01)) {
                this.gameOver = true;
                this.BlobExplode(this.blob);
            }
            if (this.checkCollision(this.blob, this.barrier02)) {
                this.gameOver = true;
                this.BlobExplode(this.blob);
            }
            if (this.checkCollision(this.blob, this.barrier03)) {
                this.gameOver = true;
                this.BlobExplode(this.blob);
            }
            if (this.checkCollision(this.blob, this.barrier04)) {
                this.gameOver = true;
                this.BlobExplode(this.blob);
            }
            if (this.checkCollision(this.blob, this.barrier05)) {
                this.gameOver = true;
                this.BlobExplode(this.blob);
            }
            if (this.checkCollision(this.blob, this.barrier06)) {
                this.gameOver = true;
                this.BlobExplode(this.blob);
            }
        }




    }

    checkCollision(blob, barrier) {
        // simple AABB checking
        if (blob.x < barrier.x + barrier.width &&
            blob.x + blob.width > barrier.x &&
            blob.y < barrier.y + barrier.height &&
            blob.height + blob.y > barrier.y) {
            return true;
        } else {
            return false;
        }
    }

    BlobExplode(blob) {
        // if (ship === this.ship2) {
        //     this.ship2.isDead = true;
        //   }


        //
        this.blob.isDestroyed = true;
        blob.alpha = 0;

        //
        let emitter = this.add.particles(blob.x, blob.y, 'particle', {
            //frame: 'particle',
            lifespan: 1000,
            //angle: { min: -30, max: 30 },
            speed: 150,
            scale: { start: 0.5, end: 0 },
            blendMode: 'ADD'
        });

        // create explosion sprite at ship's position
        let boom = this.add.sprite(blob.x, blob.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');             // play explode animation
        boom.on('animationcomplete', () => {    // callback after anim completes
            //ship.reset();                         // reset ship position
            //ship.alpha = 1;                       // make ship visible again
            boom.destroy();                       // remove explosion sprite
            emitter.destroy();
        });
        // score add and repaint
        // this.p1Score += ship.points;
        // if (this.HighScore < this.p1Score) { this.HighScore = this.p1Score; }
        // this.scoreLeft.text = this.p1Score + '\n' + "HS: " + this.HighScore;

        //play explosion audio
        let explosionIndex = Phaser.Math.Between(1, 4);
        switch (explosionIndex) {
            case 1:
                this.sound.play('sfx_explosion');
                break;
            case 2:
                this.sound.play('sfx_explosion2');
                break;
            case 3:
                this.sound.play('sfx_explosion3');
                break;
            case 4:
                this.sound.play('sfx_explosion4');
                break;
        }

        //blob.destroy();

        this.time.delayedCall(4000, () => { this.scene.start('gameOverScene'); });
    }
}