class Board{
    constructor(width, height, lienzo){
        this.width = width;
        this.height = height;
        this.lienzo = lienzo;
    }

    draw(){
        let i = 0;
        for(let x = this.width/17; x <= this.width; x+= (this.width/17)*2){
          let j = this.height/15;
          for(let y = 0; y < this.height; y+= (this.height/15)*2){
            this.lienzo.beginPath();
            this.lienzo.fillStyle = '#A2D149';
            this.lienzo.fillRect(x, y, this.width/17, this.height/15);
            this.lienzo.fillRect(i, j, this.width/17, this.height/15)
            j+= (this.height/15)*2;  
          }
          i+= (this.width/17)*2
        }
    }
}


export {Board};