
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Boot extends Phaser.Scene {

	constructor() {
		super("Boot");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("boot-asset-pack", "assets/boot-asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.scene.start("Preload");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
