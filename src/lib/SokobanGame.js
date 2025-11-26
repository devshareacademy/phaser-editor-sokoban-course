/**
 * @typedef Coordinate
 * @type {object}
 * @property {number} x
 * @property {number} y
 */

export const TILE_TYPES = Object.freeze({
  EMPTY: 0,
  FLOOR: 1,
  BLOCKED: 2,
  BOX: 3,
  GOAL: 4,
  PLAYER: 5,
  BOX_ON_GOAL: 6,
});

export class SokobanGame {
  /** @type {number[][]} */
  #currentMap;
  /** @type {number[][]} */
  #originalMap;
  /** @type {number} */
  #width;
  /** @type {number} */
  #height;
  /** @type {Coordinate} */
  #playerPosition;
  /** @type {Coordinate[]} */
  #boxPositions;
  /** @type {Coordinate[]} */
  #goalPositions;

  /**
   * @param {number[][]} mapData
   */
  constructor(mapData) {
    this.#currentMap = mapData.map(row => [...row]);
    this.#originalMap = mapData.map(row => [...row]);

    this.#width = mapData[0].length;
    this.#height = mapData.length;

    this.#playerPosition = this.#findPlayerStartPosition();
    this.#currentMap[this.#playerPosition.y][this.#playerPosition.x] = TILE_TYPES.FLOOR;

    this.#goalPositions = this.#findGoalPositions();
    this.#boxPositions = this.#findBoxPositions();
  }

  #findPlayerStartPosition() {
    for (let y = 0; y < this.#height; y++) {
      for (let x = 0; x < this.#width; x++) {
        if (this.#currentMap[y][x] === TILE_TYPES.PLAYER) {
          return { x, y };
        }
      }
    }
  }

  #findGoalPositions() {
    const goals = [];
    for (let y = 0; y < this.#height; y++) {
      for (let x = 0; x < this.#width; x++) {
        if (this.#currentMap[y][x] === TILE_TYPES.GOAL) {
          goals.push({ x, y });
        }
      }
    }
    return goals;
  }

  #findBoxPositions() {
    const boxes = [];
    for (let y = 0; y < this.#height; y++) {
      for (let x = 0; x < this.#width; x++) {
        if (this.#currentMap[y][x] === TILE_TYPES.BOX || this.#currentMap[y][x] === TILE_TYPES.BOX_ON_GOAL) {
          boxes.push({ x, y });
        }
      }
    }
    return boxes;
  }

  /**
   * @param {string} direction - up, down, left, right
   * @returns {boolean} True if move was successful, false if blocked
   */
  movePlayer(direction) {
    // TODO
  }

  /**
   * @returns {void}
   */
  reset() {
    // TODO
  }

  /**
   * @returns {boolean}
   */
  isWinCondition() {
    // TODO
  }

  /**
	 * Returns a complete snapshot of the current game state
	 */
  getGameState() {
    return {};
  }
}