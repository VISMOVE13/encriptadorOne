const ingresoTexto = document.getElementById("ingresoTexto");

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");

const botonCopiar = document.getElementById("botonCopiar");

//e - enter
//i - imes
//a - ai
//o - ober
//u - ufat

let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

botonEncriptar.addEventListener('click', () => {
    const texto = ingresoTexto.value.toLowerCase();
    function encriptar(newText) { 
        for (let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][0])){
                newTex = newText.replaceAll(remplazar[i][0], 
                    remplazar[i][1]);
            };
        };
        return newText;
    }
   

    console.log(encriptar(texto));
});




