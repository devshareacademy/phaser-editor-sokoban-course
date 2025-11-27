import Boot from "./scenes/Boot.js";
import Preload from "./scenes/Preload.js";
import Title from "./scenes/Title.js";
import Level1 from "./scenes/Level1.js";
import Level2 from "./scenes/Level2.js";
import Level3 from "./scenes/Level3.js";

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
	game.scene.add("Title", Title);
	game.scene.add("Level1", Level1);
	game.scene.add("Level2", Level2);
	game.scene.add("Level3", Level3);
	game.scene.add("Boot", Boot, true);
});
