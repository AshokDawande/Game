window.onload = function(){
    const canvas = document.getElementById("cvs");
    const ctx = canvas.getContext("2d");
    const right = document.getElementById("r");
    const left = document.getElementById("l");
    const up = document.getElementById("u");
    const down = document.getElementById("d");
    
    
    const speed = 20;
    
    function component(x, y, size){
        this.size = size;
        this.x = x;
        this.y = y;
        ctx.fillStyle = "red" ;
        ctx.fillRect(this.x , this.y , this.size , this.size);
        
//Updating the canvas after clearing it   
     
        this.update = function(){
            ctx.fillStyle = "red" ;
            ctx.fillRect(this.x , this.y - 65 , this.size , this.size);
        }
    }
    
    const game = {
        
        clear : function(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
        },
        
        house : function(x,y){
            this.x = x;
            this.y = y;
            ctx.fillStyle = "yellow";
            ctx.fillRect(x, y, 50, 50);
            ctx.fillStyle = "red";
            ctx.fillRect(65,this.y,15,25);
            
            this.update = function(){
                ctx.fillStyle = "yellow";
                ctx.fillRect(this.x, this.y - 95, 50, 50);
                ctx.fillStyle = "red";
                ctx.fillRect(65,this.y,15,25);
            }
        },
    }
    
    //Move function
    function move(){
        gh.update();
        gp.update();
    }
    
    //Create game pieces
    
    gp = new component(15,canvas.height,20);
    gh = new game.house(195,canvas.height);
    move();
//Button functions  
    
    
    right.onclick = function(){
        gp.x += speed;
        if(gp.x > canvas.width){
            gp.x -= speed;
        }
        else if(gp.x == gh.x + 20 && gp.y == gh.y){
            gp.x = 15;
        }
        game.clear();
        move();
    }
    left.onclick = function(){
        gp.x -= speed;
        if(gp.x < 15){
            gp.x = 15;
        }
        else if(gp.x == gh.x + 20 && gp.y == gh.y){
            gp.x = 15;
        }
        game.clear();
        move();
    }
    up.onclick = function(){
        gp.y -= speed;
        game.clear();
        move();
    }
    down.onclick = function(){
        gp.y += speed;
        if(gp.y > canvas.height){
            gp.y -= speed;
        }
        game.clear();
        move();
    }
    
    
}
