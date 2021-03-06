function Preload(){}

Preload.prototype = {
    preload: function () {
        console.log('preload preload');

        this.load.image('background', 'assets/images/background.png');
        this.load.image('ground', 'assets/images/ground.png');
        this.load.image('title', 'assets/images/title.png');
        this.load.image('startButton', 'assets/images/start-button.png');
        this.load.spritesheet('bird', 'assets/images/bird.png', 34, 24, 3);
        this.load.spritesheet('pipe', 'assets/images/pipes.png', 54, 320, 2);

        this.load.onFileComplete.add(function (percent) {
            console.log('loaded ' + percent + "%");
        });

        this.load.onLoadComplete.add(function () {
            console.log('loading complete');
            this.game.state.start('Menu');
        }, this);
    },
    create: function () {
        console.log('preload create');
    },
    update: function () {
        console.log('preload update');
    }
};