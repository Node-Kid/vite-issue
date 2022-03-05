import { Root } from "./ts/root";
const canvas = document.getElementById("gameView") as HTMLCanvasElement;
const GameRoot = new Root();
GameRoot.Renderer.setCanvas(canvas);
