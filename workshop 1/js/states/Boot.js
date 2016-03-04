function Boot(){}

Boot.prototype = {
    preload: function () {
        console.log("boot preload");
    },
    create: function () {
        console.log("boot create");

        this.game.scale.pageAlignHorizontally = true;

        this.game.input.maxPointers = 1;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 1200;

        this.game.state.start('Preload');
    },
    update: function () {
        console.log('boot update');
    }
};