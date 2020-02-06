// Pyramid

// Crea una función `pyramid` que reciba un número como argumento. Imprime en consola una figura de una pirámide de `N` niveles usando el carácter `#`. En cada nivel los elementos deben estar centrados, se deben agregar espacios en blanco a la derecha e izquierda de ser necesario.

// ```javascript
// pyramid(1);
// // ‘#’
// Pyramid(2);
// // ‘ # ‘
// // ‘###’
// pyramid(3);
// // ‘  #  ‘
// // ‘ ### ’
// // ‘#####’

function pyramid(num){
    let b =" ";
    let j=1;
    d=num;
if (num===1){console.log("#")}
    else{
    for (let i=0;i<num;i++){
        b="#".repeat(i+j);
        j++
        c=" "
        d=d-1
        c=c.repeat(d);
        console.log(c+b+c)       
    }
 }
}

console.log(pyramid(4));