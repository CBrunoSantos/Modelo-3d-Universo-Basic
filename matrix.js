class Matrix {

    constructor(rows, cols, values){
        // linha
        this.rows = rows;
        // coluna
        this.cols = cols;

        if(values == undefined){
            this.values = [];

            for(let i = 0; i < this.rows * this.cols; i++){
                this.values.push(0);
            }

        }else{
            if(values.length == this.rows * this.cols ){
                this.values = values;
            }else{
                throw "O array de valores é incompativel com o tamanho da matrix"
            }

        }

    
    }

    // buscar o valor que esta na linha e coluna requeridas
    get(i,j){
        return this.values[this.getIndex(i,j)];
    }
    // colocar um novo valor na linha e na coluna requeridas
    set(i, j, value){
        this.values[this.getIndex(i, j)]=value;
    }
    // identificar se a linha e a coluna indicada existe 
    getIndex(i, j){
        if(i < 1 || i > this.rows){ throw "O indice da linha esta fora dos valores" }
        if(j < 1 || j > this.cols){ throw "O indice da coluna esta fora dos valores" }

        return (j-1) + (i-1) * this.cols;
    }

}