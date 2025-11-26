/**
 * @typedef SokobanTileMapLayers
 * @type {object}
 * @property {Phaser.Tilemaps.TilemapLayer} wall
 * @property {Phaser.Tilemaps.TilemapLayer} floor
 * @property {Phaser.Tilemaps.TilemapLayer} player
 * @property {Phaser.Tilemaps.TilemapLayer} block
 * @property {Phaser.Tilemaps.TilemapLayer} goal
 * @property {Phaser.Tilemaps.TilemapLayer} blocking
 */

import { TILE_TYPES } from "./SokobanGame.js";

/**
 * @param {SokobanTileMapLayers} tilemapLayers
 * @returns {number[][]}
 */
export function createMapFromTilemapLayers(tilemapLayers) {
  const layers = {
    wall: tilemapLayers.wall,
    floor: tilemapLayers.floor,
    player: tilemapLayers.player,
    block: tilemapLayers.block,
    goal: tilemapLayers.goal,
    blocking: tilemapLayers.blocking,
  };
  const missingLayers = Object.entries(layers).filter(([name, layer]) => !layer);
  if (missingLayers.length > 0) {
    console.warn('Missing required tilemap layers');
    return;
  }

  const mapData = Array(layers.player.layer.height).fill().map(() => Array(layers.player.layer.width).fill(TILE_TYPES.EMPTY));
  return mapData;
}
