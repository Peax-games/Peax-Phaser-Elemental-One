export default function bootState(){
    var TILE_WIDTH: 70;
    var TILE_HEIGHT: 70;
    return{
        preload: function(){
        var loadingLabel = this.game.add.text(80, 150, 'loading...',
            { font: '30px Courier', fill: '#fff' });

        this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        //game.stage.backgroundColor = '#eee';


        this.game.load.image('menubackground', 'img/elemental-one/menubackground.png');
        this.game.load.image('occluder', 'img/elemental-one/occluder.png');
    
        this.game.load.tilemap('level1', 'img/elemental-one/tilemaps/level1.json', null, window.Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level2', 'img/elemental-one/tilemaps/level2.json', null, window.Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level3', 'img/elemental-one/tilemaps/level3.json', null, window.Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level4', 'img/elemental-one/tilemaps/level4.json', null, window.Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('tiles', 'img/elemental-one/tilesets/tiles_spritesheet.png', TILE_WIDTH, TILE_HEIGHT);
    
        this.game.load.atlas('p1', 'img/elemental-one/sprites/p1_spritesheet.png', 'img/elemental-one/sprites/p1_spritesheet.json');
    
        this.game.load.atlasXML('items', 'img/elemental-one/sprites/items_spritesheet.png', 'img/elemental-one/sprites/items_spritesheet.xml');
        this.game.load.spritesheet('blocks', 'img/elemental-one/tilesets/tiles_spritesheet.png', TILE_WIDTH, TILE_HEIGHT);
        this.game.load.atlasXML('particles', 'img/elemental-one/sprites/particles.png', 'img/elemental-one/sprites/particles.xml');
    
        // game.load.audio('theme', ['assets/sounds/happy.mp3', 'assets/sounds/happy.ogg'], true);
    
        // game.load.audio('jumpsound', 'assets/sounds/jump.wav', true);
        // game.load.audio('pickupsound', 'assets/sounds/pickup.wav', true);
        // game.load.audio('airsound', 'assets/sounds/air.wav', true);
        // game.load.audio('watersound', 'assets/sounds/water.wav', true);
        // game.load.audio('earthsound', 'assets/sounds/earth.wav', true);
        // game.load.audio('firesound', 'assets/sounds/fire.wav', true);

        },
        create: function(){
            this.game.state.start('play')
        }
    }
}