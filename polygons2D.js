class line {
    constructor(x1,y1,x2,y2){
        this.points = [];
        this.points.push(new Vector (2, [x1,y1]));
        this.points.push(new Vector (2, [x2,y2]));
        this.color = '#ffffff'
        
        this.t = new Transformations();
    }
    transpose(dx, dy){
        for(let i = 0; i < this.points.length; i++ ){
            this.points[i] = this.t.translacao2D(this.points[i], dx,dy);
            
        }
    } 
    rotation(da){
        for(let i = 0; i < this.points.length; i++ ){
            this.points[i] = this.t.rotation2D(this.points[i],da);
        }
    }

    setColor (newColor){
        this.color = newColor;
    }

    draw(){
        
        
        fill(this.color); 
        beginShape();
        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        //vertex(this.points[3].get(1), this.points[3].get(2));
        endShape(CLOSE);
    }



}

class rectangle{
    constructor(x, y, w, h){
        this.points = [];
        this.points.push(new Vector(2, [x,y]));
        this.points.push(new Vector(2, [x+w,y]));
        this.points.push(new Vector(2, [x+w,y+h]));
        this.points.push(new Vector(2, [x,y+h]));
        this.color = '#ffffff'
        
        this.t = new Transformations(); 
    }
    setColor (newColor){
        this.color = newColor;
    }
    transpose(dx, dy){
        for(let i = 0; i < this.points.length; i++ ){
            this.points[i] = this.t.translacao2D(this.points[i], dx,dy);
            
        }
    } 
    rotation(da){
        for(let i = 0; i < this.points.length; i++ ){
            this.points[i] = this.t.rotation2D(this.points[i],da);
        }
    }
    draw(){
        strokeWeight(0);
        stroke(this.color);
        fill(this.color);
        beginShape();
        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[3].get(1), this.points[3].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));
        vertex(this.points[3].get(1), this.points[3].get(2));
        endShape(CLOSE);
    }
}


class circulo{
    constructor(x,y,r,t){
        this.points = [];
        var ang = ((360/t)/180)*Math.PI;

        this.tf = new Transformations();
        
        this.points.push(new Vector (2, [0,0]));
        this.points.push(new Vector(2, [r,0]));
        
        for(var i=2;i<t+2;i++){
            this.points.push(this.tf.rotation2D(this.points[i-1],ang));
        }

        this.transpose(x,y);

        this.color = '#ffffff'

    }
    setColor (newColor){
        this.color = newColor;
    }
    transpose(dx, dy){
        for(let i = 0; i < this.points.length; i++ ){
            this.points[i] = this.tf.translacao2D(this.points[i], dx,dy);
            
        }
    } 

    rotation(da){
        for(let i = 0; i < this.points.length; i++ ){
            this.points[i] = this.tf.rotation2D(this.points[i],da);
        }
    }

    
    draw(){
        beginShape(TRIANGLES);
    /*  vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));
 */
        /*vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));
        vertex(this.points[3].get(1), this.points[3].get(2)); */
        for(var i = 0;i < this.points.length-2;i++){
            
            vertex(this.points[0].get(1), this.points[0].get(2));
            vertex(this.points[i+1].get(1), this.points[i+1].get(2));
            vertex(this.points[i+2].get(1), this.points[i+2].get(2));
            
            
        }
        endShape(CLOSE);
    }
}


class triangulo{

    constructor(x1,y1,x2,y2,x3,y3){
        this.points = [];
        this.points.push(new Vector (2, [x1,y1]));
        this.points.push(new Vector (2, [x2,y2]));
        this.points.push(new Vector (2, [x3,y3]));
        this.color = '#ffffff'
        
        this.t = new Transformations();
    }

    setColor (newColor){
        this.color = newColor;
    }
    transpose(dx, dy){
        for(let i = 0; i < this.points.length; i++ ){
            this.points[i] = this.t.translacao2D(this.points[i], dx,dy);
            
        }
    } 
    rotation(da){
        for(let i = 0; i < this.points.length; i++ ){
            this.points[i] = this.t.rotation2D(this.points[i],da);
        }
    }

    draw(){
        
        
        //fill(this.color); 
        beginShape(TRIANGLES);
        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));
        //vertex(this.points[1].get(1), this.points[1].get(2));
        endShape(CLOSE);
    }

}

