
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GameTextPrefab extends Phaser.GameObjects.Text {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0, "", {});

		this.setOrigin(0.5, 0.5);
		this.text = "PLACEHOLDER";
		this.setStyle({ "align": "center", "color": "#d4d29b", "fontFamily": "PressStart2P-Regular", "fontSize": "40px", "stroke": "#d4d29b" });

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
