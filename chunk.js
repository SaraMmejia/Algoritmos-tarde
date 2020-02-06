// Crea una función `chunk` que reciba un arreglo y una número como argumentos. Divide el arreglo original en varios sub
// arreglos del tamaño especificado.

// ```javascript
// chunk([1, 2, 3, 4], 2); // [ [1, 2], [3, 4] ]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // [ [ 1, 2, 3], [4, 5, 6], [7, 8] ]
// chunk([1, 2, 3, 4, 5], 10); // [ [ 1, 2, 3, 4, 5] ]
// ```


function chunk(arr,num){
    let c = []; 
    let d = Math.ceil(arr.length/num)
    for (i=0; i<d; i++){
        c.push (arr.splice(0,num))
    }
    console.log(c)
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // [ [ 1, 2, 3], [4, 5, 6], [7, 8] ]
chunk([1, 2, 3, 4], 2); // [ [1, 2], [3, 4] ]node
chunk([1, 2, 3, 4, 5], 10); // [ [ 1, 2, 3, 4, 5] ]