class Transformations extends LinearAlgebra{

    translacao2D(vector,dx,dy){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(1,3,dx)
        m.set(2,3,dy)
        return this.metodocdhomogenea(this.matrixVector(this.dot(m,vector)));
    }

    translacao3D(vector,dx,dy,dz){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(1,4,dx)
        m.set(2,4,dy)
        m.set(3,4,dz)
        return this.metodocdhomogenea(this.matrixVector(this.dot(m,vector)));
    }


    rotation2D(vector,angle){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        m.set(1,1,Math.cos(angle))
        m.set(1,2,(Math.sin(angle)*-1))
        m.set(2,1,Math.sin(angle))
        m.set(2,2,Math.cos(angle))
        
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }



    rotation3D(vector,angle){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(1,1,Math.cos(angle))
        m.set(1,2,(Math.sin(angle)*-1))
        m.set(2,1,Math.sin(angle))
        m.set(2,2,Math.cos(angle))
        
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }

    rotation3Dx(vector,angle){
        vector = this.metodohomogenea(vector);
        let t = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        t.set(2,2,Math.cos(angle));
        t.set(3,2,Math.sin(angle));
        t.set(2,3,Math.sin(angle)* -1);
        t.set(3,3,Math.cos(angle));
        return this.metodocdhomogenea(this.matrixVector(this.dot(t,vector)));
    }

    rotation3Dy(vector,angle){
        vector = this.metodohomogenea(vector);
        let t = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        t.set(1,1,Math.cos(angle));
        t.set(3,1,Math.sin(angle)* -1);
        t.set(1,3,Math.sin(angle));
        t.set(3,3,Math.cos(angle));
        return this.metodocdhomogenea(this.matrixVector(this.dot(t,vector)));
    }

    rotation3Dz(vector,angle){
        vector = this.metodohomogenea(vector);
        let t = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        t.set(1,1,Math.cos(angle));
        t.set(2,1,Math.sin(angle));
        t.set(1,2,Math.sin(angle)* -1);
        t.set(2,2,Math.cos(angle));
        return this.metodocdhomogenea(this.matrixVector(this.dot(t,vector)));
    }


    escalonamento2Dx(vector,value){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(1,1,value)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }


    escalonamento2Dy(vector,value){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(2,2,value)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }


    escalonamento3Dx(vector,value){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(3,3,value)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }


    escalonamento3Dy(vector,value){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(1,1,value)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }



    escalonamento3Dz(vector,value){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(2,2,value)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }


    reflection2Dx(vector){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(2,2,-1)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }


    reflection2Dy(vector){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(1,1,-1)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }



    reflection3Dx(vector){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(3,3,-1)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }


    reflection3Dy(vector){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(1,1,-1)
        
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }


    reflection3Dz(vector){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(2,2,-1)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }


    projection2Dx(vector){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(2,2,0)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }


    projection2Dy(vector){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(1,1,0)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }


    projection3Dx(vector){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(3,3,0)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }

    
    projection3Dy(vector){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(1,1,0)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }


    projection3Dz(vector){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(2,2,0)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }



    cisalhamento2Dx(vector,value){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(1,2,value)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }



    cisalhamento2Dy(vector,value){
        vector = this.metodohomogenea(vector)
        let m = this.matrixgenerica(new Matrix(vector.size(),vector.size()));
        
        m.set(2,1,value)
        var c = this.dot(m,vector)
        let v = this.metodoG(c);
        v = this.metodocdhomogenea(v);
        return v;
    }

    metodohomogenea(vector){
        let v = new Vector(vector.size()+1);
            for(var i = 1;i<= vector.size();i++){
                v.set(i,vector.get(i));
            }
        v.set(vector.size()+1,1);
        return v;
    }


    metodocdhomogenea(vector){
        let v = new Vector(vector.size()-1);
            for(var i = 1;i<= v.size();i++){
                v.set(i,vector.get(i));
            }
        return v;
    }

    matrixVector(c){
        let v = new Vector(c.rows*c.cols,c.values.slice());
            for(let i = 1; i <= c.rows; i++){
                for(let j= 1; j <= c.cols;j++){
                    v.set(i,c.get(i,j));
                }
        }
        return v;
    }
    
    metodoG(c){
        let b = new Vector(c.rows*c.cols);
        for(let i = 1; i <= c.rows; i++){
            for(let j= 1; j <= c.cols;j++){
                b.set(i,c.get(i,j));
            }
        }
        return b
    }

}