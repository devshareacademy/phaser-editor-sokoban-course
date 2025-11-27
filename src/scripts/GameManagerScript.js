
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
import { createMapFromTilemapLayers } from "../lib/SokobanUtils.js";
import { SokobanGame } from "../lib/SokobanGame.js";
import PlayerPrefab from "../prefabs/PlayerPrefab.js";
import BoxPrefab from "../prefabs/BoxPrefab.js";
import { LEVEL_TO_PHASER_SCENE_MAP } from "../config.js";
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
	/** @type {SokobanGame} */
	#sokobanGame;
	/** @type {PlayerPrefab} */
	#playerPrefab;
	/** @type {BoxPrefab[]} */
	#boxPrefabs;

	awake() {
		const map = createMapFromTilemapLayers({
			wall: this.wallTileLayer,
			floor: this.floorTileLayer,
			player: this.playerTileLayer,
			block: this.blockTileLayer,
			goal: this.goalTileLayer,
			blocking: this.blockingTileLayer,
		});
		
		this.#sokobanGame = new SokobanGame(map);
		console.table(this.#sokobanGame.getGameState().map);

		this.#createPlayer();
		this.#createBoxes();
		this.#hideLayers();
		this.#setupInputHandling();
	}

	#hideLayers() {
		this.playerTileLayer.setVisible(false);
		this.blockTileLayer.setVisible(false);
	}

	#createPlayer() {
		const playerTilePosition = this.#sokobanGame.getGameState().playerPosition;
		const playerPosition = this.#tileToWorldPosition(playerTilePosition.x, playerTilePosition.y);
		this.#playerPrefab = new PlayerPrefab(this.scene, playerPosition.x, playerPosition.y);
		this.scene.add.existing(this.#playerPrefab);
	}

	#createBoxes() {
		this.#boxPrefabs = [];
		const boxTilePositions = this.#sokobanGame.getGameState().boxPositions;
		for (const tilePosition of boxTilePositions) {
			const boxPosition = this.#tileToWorldPosition(tilePosition.x, tilePosition.y);
			const boxPrefab = new BoxPrefab(this.scene, boxPosition.x, boxPosition.y);
			this.scene.add.existing(boxPrefab);
			this.#boxPrefabs.push(boxPrefab);
		}
	}

	#tileToWorldPosition(tileX, tileY) {
		const tileWorldX = tileX * this.wallTileLayer.tilemap.tileWidth + this.wallTileLayer.tilemap.tileWidth / 2;
		const tileWorldY = tileY * this.wallTileLayer.tilemap.tileHeight + this.wallTileLayer.tilemap.tileHeight / 2;

		const worldX = this.wallTileLayer.x + tileWorldX * this.wallTileLayer.scaleX;
		const worldY = this.wallTileLayer.y + tileWorldY * this.wallTileLayer.scaleY;

		return { x: worldX, y: worldY };
	}

	#setupInputHandling() {
		this.scene.input.keyboard.on(Phaser.Input.Keyboard.Events.ANY_KEY_DOWN, (event) => {
			this.#handleKeyInput(event.code);
		});
	}

	#handleKeyInput(keyCode) {
		let direction = null;

		switch (keyCode) {
			case 'ArrowUp':
			case 'KeyW':
				direction = 'up';
				break;
			case 'ArrowDown':
			case 'KeyS':
				direction = 'down';
				break;
			case 'ArrowLeft':
			case 'KeyA':
				direction = 'left';
				break;
			case 'ArrowRight':
			case 'KeyD':
				direction = 'right';
				break;
		}

		if (direction !== null) {
			this.#movePlayer(direction);
		}
	}

	#movePlayer(direction) {
		const moveSuccessful = this.#sokobanGame.movePlayer(direction);
		if (!moveSuccessful) {
			return;
		}
		this.#updateVisualPositions();
		if (this.#sokobanGame.isWinCondition()) {
			this.#triggerLevelTransition();
		}
	}

	#updateVisualPositions() {
		const gameState = this.#sokobanGame.getGameState();

		const playerPosition = this.#tileToWorldPosition(gameState.playerPosition.x, gameState.playerPosition.y);
		this.#playerPrefab.setPosition(playerPosition.x, playerPosition.y);

		for (let i = 0; i < this.#boxPrefabs.length; i++) {
			const boxPosition = gameState.boxPositions[i];
			const boxWorldPosition = this.#tileToWorldPosition(boxPosition.x, boxPosition.y);
			this.#boxPrefabs[i].setPosition(boxWorldPosition.x, boxWorldPosition.y);
		}
	}

	#triggerLevelTransition() {
		const nextLevel = this.scene.registry.get('level') + 1;

		const nextScene = LEVEL_TO_PHASER_SCENE_MAP[nextLevel];
		if (nextScene === undefined) {
			this.scene.registry.set('level', 1);
			this.scene.scene.start(LEVEL_TO_PHASER_SCENE_MAP.default);
		} else {
			this.scene.registry.set('level', nextLevel);
			this.scene.scene.start(nextScene);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
