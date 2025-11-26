
// You can write more code here

/* START OF COMPILED CODE */

import PlayerPrefab from "../prefabs/PlayerPrefab.js";
import BoxPrefab from "../prefabs/BoxPrefab.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level1 extends Phaser.Scene {

	constructor() {
		super("Level1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// editabletilemap
		this.cache.tilemap.add("editabletilemap_a6154d9b-7c6a-4846-9869-084620d2c56a", {
			format: 1,
			data: {
				width: 12,
				height: 12,
				orientation: "orthogonal",
				tilewidth: 16,
				tileheight: 16,
				tilesets: [
					{
						columns: 14,
						margin: 0,
						spacing: 0,
						tilewidth: 16,
						tileheight: 16,
						tilecount: 224,
						firstgid: 1,
						image: "walls",
						name: "walls",
						imagewidth: 224,
						imageheight: 256,
					},
					{
						columns: 11,
						margin: 0,
						spacing: 0,
						tilewidth: 16,
						tileheight: 16,
						tilecount: 88,
						firstgid: 225,
						image: "animated_props",
						name: "animated_props",
						imagewidth: 176,
						imageheight: 128,
					},
					{
						columns: 7,
						margin: 0,
						spacing: 0,
						tilewidth: 16,
						tileheight: 16,
						tilecount: 63,
						firstgid: 313,
						image: "elf",
						name: "elf",
						imagewidth: 112,
						imageheight: 144,
					},
					{
						columns: 13,
						margin: 0,
						spacing: 0,
						tilewidth: 16,
						tileheight: 16,
						tilecount: 208,
						firstgid: 376,
						image: "grounds",
						name: "grounds",
						imagewidth: 208,
						imageheight: 256,
					},
					{
						columns: 19,
						margin: 0,
						spacing: 0,
						tilewidth: 16,
						tileheight: 16,
						tilecount: 152,
						firstgid: 584,
						image: "props",
						name: "props",
						imagewidth: 304,
						imageheight: 128,
					},
				],
				layers: [
					{
						type: "tilelayer",
						name: "floorTileLayer",
						width: 12,
						height: 12,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 436, 439, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 449, 465, 0, 0, 0, 0, 0, 0, 0, 436, 438, 438, 446, 447, 438, 438, 439, 0, 0, 0, 0, 449, 463, 463, 463, 463, 463, 463, 465, 0, 0, 0, 0, 475, 476, 476, 476, 476, 476, 476, 478, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
					{
						type: "tilelayer",
						name: "wallTileLayer",
						width: 12,
						height: 12,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 32, 0, 0, 0, 0, 0, 44, 4, 4, 16, 0, 0, 3, 4, 4, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 29, 30, 30, 30, 30, 30, 30, 30, 30, 46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
					{
						type: "tilelayer",
						name: "playerTileLayer",
						width: 12,
						height: 12,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 313, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
					{
						type: "tilelayer",
						name: "blockTileLayer",
						width: 12,
						height: 12,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 605, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
					{
						type: "tilelayer",
						name: "goalTileLayer",
						width: 12,
						height: 12,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
					{
						type: "tilelayer",
						name: "blockingTileLayer",
						width: 12,
						height: 12,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 606, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 606, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
				],
			},
		});
		const editabletilemap = this.add.tilemap("editabletilemap_a6154d9b-7c6a-4846-9869-084620d2c56a");
		editabletilemap.addTilesetImage("walls");
		editabletilemap.addTilesetImage("animated_props");
		editabletilemap.addTilesetImage("elf");
		editabletilemap.addTilesetImage("grounds");
		editabletilemap.addTilesetImage("props");

		// wallTileLayer
		const wallTileLayer = editabletilemap.createLayer("wallTileLayer", ["walls"], 128, 48);
		wallTileLayer.scaleX = 2;
		wallTileLayer.scaleY = 2;

		// floorTileLayer
		const floorTileLayer = editabletilemap.createLayer("floorTileLayer", ["grounds"], 128, 48);
		floorTileLayer.scaleX = 2;
		floorTileLayer.scaleY = 2;

		// playerTileLayer
		const playerTileLayer = editabletilemap.createLayer("playerTileLayer", ["elf"], 128, 48);
		playerTileLayer.scaleX = 2;
		playerTileLayer.scaleY = 2;
		playerTileLayer.visible = false;

		// blockTileLayer
		const blockTileLayer = editabletilemap.createLayer("blockTileLayer", ["props"], 128, 48);
		blockTileLayer.scaleX = 2;
		blockTileLayer.scaleY = 2;
		blockTileLayer.visible = false;

		// goalTileLayer
		const goalTileLayer = editabletilemap.createLayer("goalTileLayer", ["animated_props"], 128, 48);
		goalTileLayer.scaleX = 2;
		goalTileLayer.scaleY = 2;

		// blockingTileLayer
		const blockingTileLayer = editabletilemap.createLayer("blockingTileLayer", ["props"], 128, 48);
		blockingTileLayer.scaleX = 2;
		blockingTileLayer.scaleY = 2;

		// playerPrefab
		const playerPrefab = new PlayerPrefab(this, 272, 190);
		this.add.existing(playerPrefab);

		// boxPrefab
		const boxPrefab = new BoxPrefab(this, 208, 288);
		this.add.existing(boxPrefab);

		this.editabletilemap = editabletilemap;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.Tilemap} */
	editabletilemap;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
