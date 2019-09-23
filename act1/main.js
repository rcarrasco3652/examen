

document.getElementById('iniciar').addEventListener('click', () => {
let final = document.getElementById('numeroFinal').value

for(let a = 1; a < final; a++){
    let b = sumaDivisores(a);

    if(sumaDivisores(a) == b && sumaDivisores(b) == a && a != b){
        console.log(a,b)
    }
}

});

function sumaDivisores(a){
    let b = 0;
    for(let j = 1; j < a; j++){
        if(a%j==0){
            b += j;
        }
    }
    return b;
}
