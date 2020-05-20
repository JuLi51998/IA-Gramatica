"user strict"
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

var alfabeto = [];
var estados = [0,1,2];
var estadoInicial = [0];
var estadoFinal = [1,2];
document.getElementById("block").style.visibility = "visible";

function ingresoAlfabeto() {
    let alf1, alf2;

    alf1 = document.getElementById('var1').value;
    alf2 = document.getElementById('var2').value;
    if(alf1 != "" && alf2 != "") {
        alfabeto.push(alf1, alf2);
        console.log(alfabeto);
        document.getElementById("block").style.visibility = "hidden";
        document.getElementById("form-start").style.backgroundColor = "#42F992"
        document.getElementById("main2").style.backgroundColor = "#62E3FA"
    } else {
        alert("Llene los campos!");
    }

}

function validacionPalabra() {
    var palabra = document.getElementById('palabra').value;
    var actual = estadoInicial[0];
    var contador = 0;
    var contadorVar1, contadorVar2;
    var fin = false;

    palabra = palabra.split(",");
    console.log(palabra)

    while(fin == false) {
        
        if(actual == 2) {
            if(palabra[contador] == alfabeto[0]) {
                actual = 1;
                contadorVar1++;
            } if(palabra[contador] == alfabeto[1]) {
                actual = 2;
                contadorVar2++;
            } else {
                actual = 0;
                fin = true;
            }
            contador++;
        }

        if(actual == 1) {
            if(palabra[contador] == alfabeto[0]) {
                actual = 1;
                contadorVar1++;
            } else if(palabra[contador] == alfabeto[1]) {
                actual = 2;
                contadorVar2++;
            } else {
                actual = 0;
                fin = true
            }
            contador++;
        }

        if(actual == 0) {
            if(palabra[contador] == alfabeto[0]) {
                actual = 1;
                contadorVar1++;
            } else {
                actual = 0;
                fin = true;
            }
            contador++;
        }
        if (contador > palabra.length - 1) {
            fin = true;
        }

    }

    if(actual == estadoFinal[0] && contadorVar2 >= 1) {
        console.log("La cadena es correcta!");
        alert("Lacadena es correcta")
        //console.log("las a: ", as , "las b: ", bs, "las c: ", cs);
    } else if (actual == estadoFinal[1]) {
        console.log("La cadena es correcta!");
        alert("Lacadena es correcta")

    } else {
        console.log("La cadena no es valida!");
        alert("Lacadena es incorrecta")
    }
    alfabeto = [];
    document.getElementById("block").style.visibility = "visible";
    document.getElementById("form-start").style.backgroundColor = "#62E3FA"
    document.getElementById("main2").style.backgroundColor = "#FA6262"
}



function automataFinito() {
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

function juego() {
    var alf1, alf2;

    var estados = [0,1,2];
    var alfabeto = [];

    var estadoInicial = [];
    var estadoFinal = [];

    alf1 = document.getElementById('var1').value;
    alf2 = document.getElementById('var2').value;

    alfabeto.push(alf1, alf2);

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
}