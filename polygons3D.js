class plane{

    constructor(x,y,z,w,h,l){
        this.points = [];
        this.points.push(new Vector(3, [x , y , z]));
        this.points.push(new Vector(3, [x + w , y , z]));
        this.points.push(new Vector(3, [x + w, y + h, z + l]));
        this.points.push(new Vector(3, [x , y + h , z + l]));

        this.t = new Transformations();
    }

    setColor (newColor){
        this.color = newColor;
    }
    transpose(dx, dy,dz){
        for(let i = 0; i < this.points.length; i++ ){
            this.points[i] = this.t.translacao3D(this.points[i], dx,dy,dz);
            
        }
    } 
    rotation(x,y,z){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3Dx(this.points[i],x);
        }
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3Dy(this.points[i],y);
        }
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3Dz(this.points[i],z);
        }
    }
    draw(){
        beginShape(TRIANGLES);
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3) );
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3) );
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3) );
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3) );
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3) );
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3) );

        endShape(CLOSE);
    }
}


class parallelogram{

    constructor(x, y , z, w, h, l){
        this.points = [];
        this.points.push(new Vector(3, [x , y , z]));
        this.points.push(new Vector(3, [x + w , y, z]));
        this.points.push(new Vector(3, [x + w, y + h, z]));
        this.points.push(new Vector(3, [x , y + h , z]));

        this.points.push(new Vector(3, [x , y, z - l ]));
        this.points.push(new Vector(3, [x + w , y , z - l ]));
        this.points.push(new Vector(3, [x + w , y + h, z - l ]));
        this.points.push(new Vector(3, [x , y + h , z - l ]));

        this.t = new Transformations();
    }

    setColor (newColor){
        this.color = newColor;
    }
    transpose(dx, dy,dz){
        for(let i = 0; i < this.points.length; i++ ){
            this.points[i] = this.t.translacao3D(this.points[i], dx,dy,dz);
            
        }
    } 
    rotation(x,y,z){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3Dx(this.points[i],x);
        }
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3Dy(this.points[i],y);
        }
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3Dz(this.points[i],z);
        }
    }

    draw(){
    
        beginShape(TRIANGLES);
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3) );
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3) );
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3) );

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3) );
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3) );
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3) );

        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3) );
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3) );
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3) );

        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3) );
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3) );
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3) );

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3) );
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3) );
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3) );

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3) );
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3) );
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3) );

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3) );
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3) );
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3) );

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3) );
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3) );
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3) );

        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3) );
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3) );
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3) );

        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3) );
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3) );
        vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3) );

        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3) );
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3) );
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3) );

        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3) );
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3) );
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3) );


        endShape(CLOSE);
    }

}


class pyramid{

    constructor(x,y,z,w,h,l,hp){
        this.points = [];
        //plano
        this.points.push(new Vector(3, [x , y , z]));
        this.points.push(new Vector(3, [x + w , y , z]));
        this.points.push(new Vector(3, [x + w, y , z + l]));
        this.points.push(new Vector(3, [x , y  , z + l]));
        //plano
        this.points.push(new Vector(3, [(x + w )/2 , h + hp , (z + l )/2]));

        this.t = new Transformations();

    }

    setColor (newColor){
        this.color = newColor;
    }
    transpose(dx, dy,dz){
        for(let i = 0; i < this.points.length; i++ ){
            this.points[i] = this.t.translacao3D(this.points[i], dx,dy,dz);
            
        }
    } 
    rotation(x,y,z){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3Dx(this.points[i],x);
        }
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3Dy(this.points[i],y);
        }
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3Dz(this.points[i],z);
        }
    }
    
    draw(){
        beginShape(TRIANGLES);
        //plano
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3) );
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3) );
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3) );
        
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3) );
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3) );
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3) );

        //face1
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3) );
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3) );
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3) );

        //face2
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3) );
        vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3) );
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3) );

        //face3
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3) );
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3) );
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3) );
                
        //face4
        vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3) );
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3) );
        vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3) );

        endShape(CLOSE);
    }   
}

class sphere{
    constructor(x,y,z,r,st,se){
        this.points = [];
        this.st = st;
        this.se = se;
        this.t = new Transformations();
        
        this.points.push(new Vector(3, [0 , 0 , 0]));
        
        for(var i=0;i<=st;i++){
            var ang = Math.PI*(i/st);
                for(var j=0;j<=se;j++){
                    var ang2 = (2*Math.PI)*(j/se);
                    this.points.push(this.t.rotation3Dx(this.t.rotation3D(new Vector(3, [r , 0 , 0]),ang),ang2));
                    
                }
        }
        this.transpose(x,y,z);
        this.color = '#ffffff'
    }
    setColor (newColor){
        this.color = newColor;
    }
    transpose(dx, dy,dz){
        for(let i = 0; i < this.points.length; i++ ){
            this.points[i] = this.t.translacao3D(this.points[i], dx,dy,dz);
            
        }
    } 
    rotation(x,y,z){
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3Dx(this.points[i],x);
        }
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3Dy(this.points[i],y);
        }
        for(let i = 0; i < this.points.length; i++){
            this.points[i] = this.t.rotation3Dz(this.points[i],z);
        }
    }
    draw(){
        strokeWeight(0);
        stroke(this.color);
        fill(this.color); 
        beginShape(TRIANGLES);
        var k1;
        var k2;
        for(var i = 0; i < this.st; i++){
            k1 = i * (this.se +1);
            k2 = k1 + this.se + 1;
            for(var j = 0; j < this.se; j++){
                k1++;
                k2++;
                if(i != 0){
                    vertex(this.points[k1].get(1), this.points[k1].get(2), this.points[k1].get(3));
                    vertex(this.points[k2].get(1), this.points[k2].get(2), this.points[k2].get(3));
                    vertex(this.points[k1+1].get(1), this.points[k1+1].get(2), this.points[k1+1].get(3));
                }
                if(i != (this.st - 1)){
                    vertex(this.points[k1+1].get(1), this.points[k1+1].get(2), this.points[k1+1].get(3));
                    vertex(this.points[k2].get(1), this.points[k2].get(2), this.points[k2].get(3));
                    vertex(this.points[k2+1].get(1), this.points[k2+1].get(2), this.points[k2+1].get(3));
                }
            }

        }
        
        endShape(CLOSE);
    }
}