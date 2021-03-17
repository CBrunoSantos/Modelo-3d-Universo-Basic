class LinearAlgebra {
    // trocar a linha e a coluna das matrizes 
    // LEMBRAR DE VALIDAR AS MATRIZES USANDO COMO EXEMPLO O "TIMES"
    
    
    
    
    transpose(a){

        let c;

        if(a instanceof Vector){

            c = new Vector(a.size())
            c.rows = a.cols;
            c.cols = a.rows;
            
            for(let i = 1; i <= c.size; i++){
                c.set(i, a.get(i));
            }

        } else if(a instanceof Matrix){
            c = new Matrix (a.cols, a.rows);
            // primeiro for percorre a linha enquanto o segundo for percorre a coluna então a operação faz com que 
            // coloque na posição da matrix c o que esta na matrix a.
            for(let i = 1; i <= c.rows; i++){
                for(let j = 1; j <= c.cols; j++){
                    c.set(i, j, a.get(j, i));
                }
            }

        }else{
            throw "O parametro da função deve ser um objeto da classe vetor ou matriz."
        }
        
        return c;
    }



    plus(a,b){

        if(a.rows != b.rows || a.cols != b.cols) throw "As matrizes são incompativeis";

        let c = new Matrix(a.rows, a.cols);
        
        for(let i = 1; i <= c.rows; i++){
            for(let j = 1; j <= c.cols; j++){
                c.set(i, j, a.get(i, j) + b.get(i, j) );
            }
        }

        return c;
        
    }




    times(a,b){

        if(typeof b != "object" || !(b instanceof Matrix)){
            throw "O parametro b deve ser uma matriz";
        }
        
        let c = new Matrix(b.rows, b.cols);
        
        if( typeof a == "number" ){

            for(let i = 1; i <= c.rows; i++){
                for(let j = 1; j <= c.cols; j++){
                    c.set(i, j, a * b.get(i, j) );
                }
            }

        } else if( typeof a =="object" && a instanceof Matrix ){

            if(a.rows != b.rows || a.cols != b.cols) throw "As matrizes são incompativeis";

    
            for(let i = 1; i <= c.rows; i++){
                for(let j = 1; j <= c.cols; j++){
                c.set(i, j, a.get(i, j) * b.get(i, j) );
                }
            }

        } else{
            throw "O parametro a deve ser um escalar numérico ou uma matriz.";
        }

        return c;

    }

    div(a,b){
        
        // verificar se a e b são matrizes
        if(typeof a != "object" || !(a instanceof Matrix) || typeof b != "object" || !(b instanceof Matrix) ){
            throw "O parametro a e b deve ser uma matriz";
        }

        // verificar se as matrizes possuem o memso tamanho
        if(a.rows != b.rows || a.cols != b.cols){
            throw "As matrizes são incompativeis";
        } 

        //verificar se as matrizes possuem o mesmo tamanho
        for(let i = 0; i < b.values.length; i++){
            if(b.values[i]==0){
                throw "A matriz b possui pelo menos um elemento nulo";
            }
        }

        let c = new Matrix(a.rows, a.cols);
        
        for(let i = 1; i <= c.rows; i++){
            for(let j = 1; j <= c.cols; j++){
                c.set(i, j, a.get(i, j) / b.get(i, j) );
            }
        }

        return c;

    }

    dot(a,b){
        // verificar se a e b são matrizes
        if(typeof a != "object" || !(a instanceof Matrix) || typeof b != "object" || !(b instanceof Matrix) ){
            throw "O parametro a e b deve ser uma matriz";
        }
        // verificar se a quantidade de coluna de a é igual a linha de b
        if(a.cols != b.rows ){
            throw "As matrizes são incompativeis";
        } 
        

        let c = new Matrix(a.rows, b.cols);
        
        for(let i = 1; i <= a.rows; i++){
            for(let j = 1; j <= b.cols; j++){
                for(let k = 1; k <= a.cols; k++){
                c.set(i, j, c.get(i, j) + a.get(i, k) * b.get(k, j) );
                }
            }
        }

        return c;

    }


    solve(a){

        // verificar se a é uma matriz
        if(typeof a != "object" || !(a instanceof Matrix)){
            throw "O parametro a deve ser uma matriz";
        }



        //inferior
        let c = this.gauss(a).matrix;
        


        //superior
        for(let j = c.cols - 1; j>= 2; j--){
            for(let i = j - 1; i>= 1; i--){
                let k = (-1 * c.get(i,j)) / c.get(j,j);
                this.multiplyRowByScalarAndPlusRow(c,j,k,i);
            }
        }

        // principal
        for(let j = 1; j<= c.cols - 1; j++){
            this.multiplyRowByScalar(c,j,1/c.get(j,j));
        }

        // matrix
        let v = new Vector(c.rows);
        for(let i = 1; i <= v.size() ; i++){
            v.set( i,c.get(i,c.cols) );
        }

        return v;
    }

    inverse(a){
        
        if(a.cols != a.rows ){
            throw "A matriz não possui o a coluna igual a linha";
        }

        let generica = this.matrixgenerica(a);

        let c = new Matrix(a.rows,a.rows*2);

        for(let i = 1; i <= a.rows;i++){
            for(let j = 1;j <= a.cols;j++){
                c.set(i,j,a.get(i,j));
            }
        }
        for(let i = 1; i <= generica.rows;i++){
            for(let j = 1;j <= generica.cols;j++){
                c.set(i,a.cols+j,generica.get(i,j));
            }
        }

        let auxiliar= this.gauss(c);
        
        this.gaussuperior(auxiliar.matrix);
        this.gausspivor(auxiliar.matrix);
        let r = new Matrix(a.rows,a.cols);

        for(let i = 1; i <= r.rows;i++){
            for(let j = 1; j <= r.cols; j++){
                r.set(i,j,auxiliar.matrix.get(i,a.cols+j));
            }
        }


        return r;



    }

    gausspivor(c){
        for(let j = 1; j<= c.rows; j++){
            this.multiplyRowByScalar(c,j,1/c.get(j,j));
        }
    }

    gaussuperior(c){
        for(let j = c.rows; j>= 2; j--){
            for(let i = j - 1; i>= 1; i--){
                let k = (-1 * c.get(i,j)) / c.get(j,j);
                this.multiplyRowByScalarAndPlusRow(c,j,k,i);
            }
        }
    }


    det(a){
        let c = this.gauss(a);
        let det = c.cof;

        for(let i = 1; i<= c.matrix.rows; i++){
            det *= c.matrix.get(i,i);
        }

        return det;
    }

    gauss(a){

        if(typeof a != "object" || !(a instanceof Matrix)){
            throw "O parametro a deve ser uma matriz";
        }

        if(a.cols < a.rows ){
            throw "As matrizes são incompativeis";
        }
        let c = {
            matrix: new Matrix (a.rows, a.cols, a.values.slice()),
            cof:1
        }
        
        //inferior para determinante
        for(let j=1; j<=c.matrix.rows;j++){
            for(let i = j+1;i<= c.matrix.rows; i++){
                
                // trocando o elemento 
                if(c.matrix.get(j,j) == 0){
                    for(let k = j + 1 ; k<= c.matrix.rows; i++){
                        if(c.matrix.get(k,j)!=0){
                            this.changeRows(c.matrix,j,k);
                            c.cof *= -1; 
                            break;
                        }
                    }
                }
                let k = (-1 * c.matrix.get(i,j)) / c.matrix.get(j,j);
                this.multiplyRowByScalarAndPlusRow(c.matrix, j, k, i);
            }
        }
        return c
    }

    changeRows(a,ri,rj){
        for(let j = 1; j <= a.cols; j++){
            let aux = a.get(ri, j);
            a.set(ri, j, a.get(rj, j));
            a.set(rj, j, aux);
        }
    }

    multiplyRowByScalar(a,ri,k){
        for (let j = 1; j <= a.cols;j++){
            a.set(ri, j, k * a.get(ri,j));
        }
    }

    multiplyRowByScalarAndPlusRow(a, ri, k, rj){
        for(let j =1; j<= a.cols; j++){
            a.set(rj, j, k * a.get(ri, j)+ a.get(rj, j));
        }
    }

    matrixgenerica(a){
        let c = new Matrix(a.rows,a.cols)
        for(let i = 1;i<=a.rows;i++){
            c.set(i,i,1);
        }
        return c;
    }


}