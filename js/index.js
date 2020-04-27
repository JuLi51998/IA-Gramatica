/*function comprobar() {
    var numA;
    var numB;
    var numC;
    var res;

    var palabra = document.getElementById('palabra').value;//"aabbccaccc"

    var exrA = /a;
    var exrB = /b+(?=c)/;
    var exrPalabra =/^aa*(?=b)b+(?=c)[a-cA-C]*c$/;

    if(exrPalabra.test(palabra))  {
        var letrA = exrA.exec(palabra);
        var letrB = exrB.exec(palabra);
    
        numA = letrA[0].length;
        numB = letrB[0].length;
    
        numC = palabra.length - numA - numB;
        res = ((2*numA)+ numB);
        if(numC == res) {
            console.log('Correcto!');
        } else console.log('Error!');
    } else {
        alert("Error!");
    }
    
}*/

function generar() {
    var a,b,c,n,m;
    var reglas = {
        1: "WTU",
        2: "Wa",
        3: "bT",
        4: "cUc",
        5: "a",
        6: "b",
        7: "c",
        8: "cU" 
    }

    n = parseInt(document.getElementById('valN').value);
    m = parseInt(document.getElementById('valM').value);
    
    a = 'a'.repeat(n);
    b = 'b'.repeat(m);
    c = 'c'.repeat(2*n + im);

    res.innerHTML = a+b+c;
}

function automataFinito() {
    var palabra = document.getElementById('palabra').value;
    var inicial = 0;
    var final = 3;
    var actual = inicial;
    var contador = 0
    var fin = false;
    var as = 0,bs = 0,cs = 0, res;

    palabra = palabra.split("");

    while(fin == false) {
        if(actual == 0) {
            if(palabra[contador] == "a") {
                actual = 1;
                as++;
            } if(palabra[contador] == "b") {
                actual = 0;
                bs++;
            } if(palabra[contador] == "c") {
                actual = 0;
                cs++;
            }
            contador++;
        }
        if(actual == 1) {
            if(palabra[contador] == "a") {
                actual = 1;
                as++;
            } if(palabra[contador] == "b") {
                actual = 2;
                bs++;
            } if(palabra[contador] == "c") {
                actual = 0;
                cs++;
            }
            contador++;
        }
        if(actual == 2) {
            if(palabra[contador] == "a") {
                actual = 0;
                as++;
            } if(palabra[contador] == "b") {
                actual = 2;
                bs++;
            } if(palabra[contador] == "c") {
                actual = 3;
                cs++;
            }
            contador++;
        }
        if(actual == 3) {
            if(palabra[contador] == "a") {
                actual = 0;
                as++;
            } if(palabra[contador] == "b") {
                actual = 0;
                bs++;
            } if(palabra[contador] == "c") {
                actual = 3;
                cs++;
            }
            contador++;
        }
        if (contador > palabra.length - 1) {
            fin = true;
        }
    }

    res = ((2*as)+ bs);

    if(actual == final && cs == res) {
        console.log("La cadena es correcta!");
        console.log("las a: ", as , "las b: ", bs, "las c: ", cs);
    } else {
        console.log("La cadena no es valida!");
        console.log("las a: ", as , "las b: ", bs, "las c: ", cs);
    }

}

// (1) S-> WTU (2) W -> Wa (3) T -> bT (4) U -> cUc (5) W -> a (6) T -> b (7) U -> c (8) U -> cU

/*
abccc
(1)(5)(6)(4)(7)
*/  


/*
aaabbcccccccc
(1)(2)(5)(3)(6)(4)(4)(8)(8)(8)(7) 
cUc
ccUcc
cccUcc
ccccUcc
cccccUcc
cccccccc
*/

/*
abbbbbcccccc
(1)(5)(3)(3)(3)(3)(6)(4)(4)(8)(7)
bT
bbT
bbbT
bbbbT

cUc
ccUcc
cccUcc
cccccc


*/