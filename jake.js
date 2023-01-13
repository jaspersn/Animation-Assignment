class Jake {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./jake.png"), 0, 0, 900, 506, 12, 0.1, 0, false, true);
        this.color = "red";
        this.x = params.WIDTH/2-450;
        this.y = params.HEIGHT/2-253;
    }

    draw(ctx) {
        
        const grd = ctx.createRadialGradient(params.WIDTH/2, params.HEIGHT/2, params.WIDTH/100, params.WIDTH/2, params.HEIGHT/2, params.WIDTH/2);
        console.log(this.color)
        grd.addColorStop(0, this.color);
        grd.addColorStop(1, "white");
        ctx.fillStyle = grd;
        ctx.fillRect(10, 10, params.WIDTH, params.HEIGHT); 
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
    }

    update() {
        switch(Math.floor(this.game.timer.gameTime)%3) {
            case(0):
                this.color = "red";
                this.x--;
                break;
            case(1):
                this.color = "blue";
                this.x++;
                this.y--;
                break;
            case(2):
                this.color = "green";
                this.y++;
                break;
                
        }
    }
}