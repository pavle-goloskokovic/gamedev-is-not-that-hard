function Menu(){}

Menu.prototype = {
    preload: function () {
        console.log('menu preload');
    },
    create: function () {
        console.log('menu create');

        var background = this.game.add.image(0, 0, 'background');

        var ground = this.game.add.tileSprite(0, 400, 335, 112, 'ground');
        ground.autoScroll(-200, 0);

        var titleGroup = this.game.add.group();

        var title = this.game.add.image(0, 0, 'title');
        titleGroup.add(title);


        var bird = this.game.add.sprite(200,5,'bird');
        titleGroup.add(bird);

        bird.animations.add('flap');
        bird.animations.play('flap', 12, true);

        titleGroup.x = 30;
        titleGroup.y = 100;

        this.game.add.tween(titleGroup).to(
            {
                y: 115/*,
             alpha: 0*/
            },
            350,
            Phaser.Easing.Cubic.InOut,
            true,
            0,
            -1,
            true
        );

        var startButton = this.game.add.button(
            this.game.width/2,
            300,
            'startButton',
            function () {
                this.game.state.start('Play');
            },
            this);
        startButton.anchor.setTo(0.5);

    },
    update: function () {
        //console.log('menu update');
    }
};