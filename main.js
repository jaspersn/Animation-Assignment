const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./jake.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	params.WIDTH = ctx.canvas.width;
	params.HEIGHT = ctx.canvas.height;
	
	gameEngine.init(ctx);
	gameEngine.addEntity(new Jake(gameEngine));
	gameEngine.start();
});
