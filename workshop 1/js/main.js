var game = new Phaser.Game(
    288,
    505,
    Phaser.AUTO
);

game.state.add('Boot', Boot);
game.state.add('Preload', Preload);
game.state.add('Menu', Menu);
game.state.add('Play', Play);

game.state.start('Boot');
