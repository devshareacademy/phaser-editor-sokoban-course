/**
 * @typedef Coordinate
 * @type {object}
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef SokobanGameState
 * @type {object}
 * @property {Coordinate} playerPosition
 * @property {number[][]} map
 * @property {Coordinate[]} boxPositions
 * @property {Coordinate[]} goalPositions
 * @property {boolean} isWon
 * @property {number} width
 * @property {number} height
 */

// Define movement vectors for each direction
const DIRECTIONS = Object.freeze({
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
});

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
    // Store both original and working copies of the map
    this.#currentMap = mapData.map(row => [...row]);
    this.#originalMap = mapData.map(row => [...row]);

    // Map dimensions
    this.#width = mapData[0].length;
    this.#height = mapData.length;

    // Find and set player starting position
    this.#playerPosition = this.#findPlayerStartPosition();
    // Replace player tile with floor in the map (player is tracked separately)
    this.#currentMap[this.#playerPosition.y][this.#playerPosition.x] = TILE_TYPES.FLOOR;

    // Find and track all goals and boxes for win condition checking
    this.#goalPositions = this.#findGoalPositions();
    this.#boxPositions = this.#findBoxPositions();

    // Initialize game statistics
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
   *
   * @param {string} direction - up, down, left, right
   * @returns {boolean} True if move was successful, false if blocked
   */
  movePlayer(direction) {
    const dir = DIRECTIONS[direction];
    if (dir === undefined) {
      // Invalid direction
      return false;
    }

    const newX = this.#playerPosition.x + dir.x;
    const newY = this.#playerPosition.y + dir.y;

    // Check if target position is valid for player movement
    if (!this.#canMoveToPosition(newX, newY)) {
      // Check if there's a box that can be pushed
      const targetTile = this.#currentMap[newY] && this.#currentMap[newY][newX];
      if (targetTile === TILE_TYPES.BOX || targetTile === TILE_TYPES.BOX_ON_GOAL) {
        // Try to push the box in the same direction
        return this.#pushBox(newX, newY, newX + dir.x, newY + dir.y);
      }
      // Blocked by wall or invalid position
      return false;
    }

    // Move player to the new position
    this.#playerPosition.x = newX;
    this.#playerPosition.y = newY;
    return true;
  }

  #isValidPosition(x, y) {
    return x >= 0 && x < this.#width && y >= 0 && y < this.#height;
  }

  #canMoveToPosition(x, y) {
    if (!this.#isValidPosition(x, y)) {
      return false;
    }

    const tile = this.#currentMap[y][x];
    return tile === TILE_TYPES.FLOOR || tile === TILE_TYPES.GOAL;
  }

  #pushBox(boxX, boxY, pushToX, pushToY) {
    if (!this.#canMoveToPosition(pushToX, pushToY)) {
      return false;
    }

    const currentBoxTile = this.#currentMap[boxY][boxX];
    if (currentBoxTile === TILE_TYPES.BOX_ON_GOAL) {
      this.#currentMap[boxY][boxX] = TILE_TYPES.GOAL;
    } else {
      this.#currentMap[boxY][boxX] = TILE_TYPES.FLOOR;
    }

    const targetTile = this.#currentMap[pushToY][pushToX];
    if (targetTile === TILE_TYPES.GOAL) {
      this.#currentMap[pushToY][pushToX] = TILE_TYPES.BOX_ON_GOAL;
    } else {
      this.#currentMap[pushToY][pushToX] = TILE_TYPES.BOX;
    }

    this.#playerPosition.x = boxX;
    this.#playerPosition.y = boxY;

    const boxIndex = this.#boxPositions.findIndex(box => box.x === boxX && box.y === boxY);
    if (boxIndex !== -1) {
      this.#boxPositions[boxIndex] = { x: pushToX, y: pushToY };
    }

    return true;
  }

  /**
   * @returns {void}
   */
  reset() {
    // Restore original map state
    this.#currentMap = this.#originalMap.map(row => [...row]);

    // Reset player to starting position
    this.#playerPosition = this.#findPlayerStartPosition();
    this.#currentMap[this.#playerPosition.y][this.#playerPosition.x] = TILE_TYPES.FLOOR;

    // Reset box positions
    this.#boxPositions = this.#findBoxPositions();
  }

  /**
   * @returns {boolean}
   */
  isWinCondition() {
    for (const box of this.#boxPositions) {
      const tile = this.#currentMap[box.y][box.x];
      if (tile !== TILE_TYPES.BOX_ON_GOAL) {
        return false;
      }
    }
    return true;
  }

  /**
	 * Returns a complete snapshot of the current game state
	 * @returns {SokobanGameState} Game state object with all current information
	 */
  getGameState() {
    return {
      playerPosition: {...this.#playerPosition},
      map: this.#currentMap.map(row => [...row]),
      boxPositions: this.#boxPositions.map(box => ({...box})),
      goalPositions: this.#goalPositions.map(goal => ({...goal})),
      isWon: this.isWinCondition(),
      width: this.#width,
      height: this.#height,
    };
  }
}