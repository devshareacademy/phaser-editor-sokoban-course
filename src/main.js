import Boot from "./scenes/Boot.js";
import Preload from "./scenes/Preload.js";
import Level from "./scenes/Level.js";
import Title from "./scenes/Title.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 640,
		height: 480,
		type: Phaser.AUTO,
		backgroundColor: "#584422",
		pixelArt: true,
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		banner: false
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("Title", Title);
	game.scene.add("Boot", Boot, true);
});
