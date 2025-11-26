
// You can write more code here

/* START OF COMPILED CODE */

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
		const titleText = this.add.text(320, 240, "", {});
		titleText.setOrigin(0.5, 0.5);
		titleText.text = "SOKO\nDUNGEON";
		titleText.setStyle({ "align": "center", "color": "#d4d29b", "fontFamily": "PressStart2P-Regular", "fontSize": "40px", "stroke": "#d4d29b" });

		// clickToStartText
		const clickToStartText = this.add.text(320, 384, "", {});
		clickToStartText.setOrigin(0.5, 0.5);
		clickToStartText.text = "CLICK TO START";
		clickToStartText.setStyle({ "align": "center", "color": "#d4d29b", "fontFamily": "PressStart2P-Regular", "fontSize": "24px", "stroke": "#d4d29b" });

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
