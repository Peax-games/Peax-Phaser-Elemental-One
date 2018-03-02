export default function bootState(game) {
    return {
        create: function () {
            // game.level = 'mainmenu';

            // theme = game.add.audio('theme');
            // theme.play('', 0, 0.3, true);

            // menubackground = game.add.sprite(0, 0, 'menubackground');
            // menubackground.alpha = 0;

            // logo = game.add.text(game.world.centerX, game.world.centerY - 150, 'ELEMENTAL ONE', {
            //     font: '45px "minecraftiaregular"',
            //     fill: 'slategray',
            //     align: 'center'
            // });
            // logo.anchor.setTo(0.5, 0.5);

            // var startText = game.add.text(game.world.centerX, game.world.centerY + 200, 'press enter', {
            //     font: '25px "minecraftiaregular"',
            //     fill: 'black',
            //     align: 'center'
            // });
            // startText.anchor.setTo(0.5, 0.5);
            // game.add.tween(startText).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, Infinity, true);

            // game.add.tween(menubackground).to({ alpha: 1 }, 2000, Phaser.Easing.Quadratic.Out, true);

            // // Setup dancing player
            // addPlayer(data.mainmenu.player.x, data.mainmenu.player.y);
            // player.body.gravity.y = 0;
            // player.animations.play('walk');
            // player.alpha = 0;
            // game.add.tween(player).to({ alpha: 1 }, 2000, Phaser.Easing.Quadratic.Out, true);
            // var ptween = game.add.tween(player).to({ x: player.x - 80 }, 1350, Phaser.Easing.Linear.None, true, 0, Infinity, true);
            // ptween.onComplete.add(function () {
            //     player.scale.x *= -1;
            // });

            // var key = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            // key.onDown.addOnce(function () {
            //     game.add.tween(player).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            //     game.add.tween(logo).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            //     var tween = game.add.tween(menubackground).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);

            //     tween.onComplete.addOnce(function () {
            //         game.state.start('level1');
            //     });
            // });
        }
    }
}
