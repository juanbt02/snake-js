import {Board} from "../module/Board.js"
import {Snake} from "../module/Snake.js"

const CANVAS = document.getElementById('canvas');
const LIENZO = CANVAS.getContext('2d');

const BOARD = new Board(CANVAS.width, CANVAS.height, LIENZO);
BOARD.draw();
