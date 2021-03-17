const fileSelector = document.getElementById("file-selector");
fileSelector.addEventListener('change', function(event){
 
    let file = event.target.files[0];
    if(file){
        let reader = new FileReader(file);
 
        reader.onload = function(){
 
            let lines = reader.result.split('\n');
            let first = true;
            let matrix;
 
            for( let i = 0; i < lines.length; i++){
                if(!lines[i].startsWith('%') && lines[i] != ''){
                    let aux = lines[i].split(' ');
                    if(first){
                        matrix = new Matrix(parseInt(aux[0]), parseInt(aux[1]))
                        first = false;
                    } else {
                        matrix.set(parseInt(aux[0]), parseInt(aux[1]), parseInt(aux[2]))
                    }
    
                }
            }
 
            let la = new LinearAlgebra();
            let start = Date.now();
            let c = la.solve(matrix);
            let stop = Date.now();
            console.log(c)
 
            let elapsedTime = stop - start
            console.log(elapsedTime)
 
        }
 
        reader.readAsText(file);
 
    }
 
});