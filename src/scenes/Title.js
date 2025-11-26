
// You can write more code here

/* START OF COMPILED CODE */

import GameTextPrefab from "../prefabs/GameTextPrefab.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Title extends Phaser.Scene {

	constructor() {
		super("Title");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// title
		const title = this.add.image(0, -16, "title");
		title.scaleX = 4;
		title.scaleY = 4;
		title.setOrigin(0, 0);

		// titleText
		const titleText = new GameTextPrefab(this, 320, 240);
		this.add.existing(titleText);
		titleText.text = "SOKO\nDUNGEON";
		titleText.setStyle({  });

		// clickToStartText
		const clickToStartText = new GameTextPrefab(this, 320, 384);
		this.add.existing(clickToStartText);
		clickToStartText.text = "CLICK TO START";
		clickToStartText.setStyle({ "fontSize": "24px" });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.input.once(Phaser.Input.Events.POINTER_DOWN, () => {
			this.scene.start('Level');
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
