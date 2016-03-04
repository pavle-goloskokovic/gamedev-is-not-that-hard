function Play(){}

Play.prototype = {

    bird: null,
    ground: null,
    pipes: null,

    create: function () {
        console.log('play create');

        var background = this.game.add.image(0, 0, 'background');

        this.ground = this.game.add.tileSprite(0, 400, 335, 112, 'ground');
        this.ground.autoScroll(-200, 0);

        this.game.physics.arcade.enableBody(this.ground);

        this.ground.body.allowGravity = false;
        this.ground.body.immovable = true;


        this.bird = this.game.add.sprite(
            this.game.width / 2,
            this.game.height / 2,
            'bird'
        );
        this.bird.anchor.setTo(0.5);

        this.bird.animations.add('flap');
        this.bird.animations.play('flap', 12, true);

        this.game.physics.arcade.enableBody(this.bird);

        this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
        var flapKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        flapKey.onDown.add(this.flap, this);

        this.input.onDown.add(this.flap, this);

        this.pipes = this.game.add.group();

        var pipeLoop = this.game.time.events.loop(
            Phaser.Timer.SECOND * 1.25,
            this.generatePipes,
            this
        );

    },
    update: function () {
        //console.log('play update');
        this.game.physics.arcade.collide(this.bird, this.ground, this.deathHandler, null, this);

        this.pipes.forEach(function(pipeGroup) {
            this.game.physics.arcade.collide(this.bird, pipeGroup, this.deathHandler, null, this);
        }, this);

        if(this.bird.angle < 90) {
            this.bird.angle += 2.5;
        }
    },

    flap: function () {
        this.bird.body.velocity.y = -400;
        this.game.add.tween(this.bird).to({angle: -40},100).start();
    },

    generatePipes: function () {

        var topPipe = this.game.add.sprite(0, 0, 'pipe', 0);
        topPipe.anchor.setTo(0, 0.5);

        this.game.physics.arcade.enableBody(topPipe);
        topPipe.body.allowGravity = false;
        topPipe.body.immovable = true;

        var bottomPipe = this.game.add.sprite(0, 440, 'pipe', 1);
        bottomPipe.anchor.setTo(0, 0.5);

        this.game.physics.arcade.enableBody(bottomPipe);
        bottomPipe.body.allowGravity = false;
        bottomPipe.body.immovable = true;

        var pipeGroup = this.game.add.group();
        pipeGroup.add(topPipe);
        pipeGroup.add(bottomPipe);
        pipeGroup.x = this.game.width;
        pipeGroup.y = this.game.rnd.integerInRange(-100, 100);

        pipeGroup.setAll('body.velocity.x', -200);

        this.pipes.add(pipeGroup);

    },

    deathHandler: function () {
        this.game.state.start('Play');
    }
};