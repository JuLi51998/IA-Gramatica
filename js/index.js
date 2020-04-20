function comprobar() {
    var numA;
    var numB;
    var numC;
    var res;

    var palabra = document.getElementById('palabra').value;//"aabbccaccc"

    var exrA = /a*/;
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
        } else console.log('Error!')
    } else {
        alert("Error!");
    }
    
}

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
    c = 'c'.repeat(2*n +m);

    if( c%2 == 0) {

    }


    res.innerHTML = a+b+c;
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