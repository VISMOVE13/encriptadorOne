const ingresoTexto = document.getElementById("ingresoTexto");

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");

const botonCopiar = document.getElementById("botonCopiar");

const mensajefinal = document.getElementById("mensajeFinal");

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
    console.log({texto})

    // Definición de la función encriptar
    function encriptar(newText) { 
        for (let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], 
                    remplazar[i][1]);
            };
        };
        return newText;
    }
   const textoEncriptado = encriptar(texto);
   console.log({ textoEncriptado })
   mensajefinal.innerHTML = textoEncriptado;
   botonCopiar.classList.replace("oculto", "visible")
    //console.log(encriptar(texto));
});

botonDesencriptar.addEventListener('click', () => {

	const textoParaDesencriptar = ingresoTexto.value.toLowerCase();

	if (textoParaDesencriptar != "") {
		function desencriptar(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][1])) {
					newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
				};
			};
			return newtext;
		};
		const textoDesencriptado = desencriptar(textoParaDesencriptar);
        mensajefinal.innerHTML = textoDesencriptado;
	} else {
		alert("Ingrese el texto a desencriptar");
	};
});

botonCopiar.addEventListener('click', () => {
    const textoACopiar = mensajefinal.innerText;
    navigator.clipboard.writeText(textoACopiar);
    alert(`Texto copiado al porta papeles: ${textoACopiar}`);
});



