
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
import { createMapFromTilemapLayers } from "../lib/SokobanUtils.js";
/* END-USER-IMPORTS */

export default class GameManagerScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	wallTileLayer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	blockTileLayer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	floorTileLayer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	playerTileLayer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	goalTileLayer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	blockingTileLayer;

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		const map = createMapFromTilemapLayers({
			wall: this.wallTileLayer,
			floor: this.floorTileLayer,
			player: this.playerTileLayer,
			block: this.blockTileLayer,
			goal: this.goalTileLayer,
			blocking: this.blockingTileLayer,
		});
		console.log(map);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
