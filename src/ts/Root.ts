import { ImageCache } from "./renderer/ImageCache";
import { Renderer } from "./renderer/renderer";
class Root {
	ImageCache: ImageCache;
	Renderer: Renderer;
	constructor() {
		this.ImageCache = new ImageCache();
		this.Renderer = new Renderer();
	}
}
export {Root}