var text = document.querySelector('#text');
var botao = document.querySelector('.copia');
const copyButton = document.querySelector("#copyButton");

text.addEventListener('input', function() {
  if (text.value !== '') {
    copyButton.style.display = 'block';
  } else {
    copyButton.style.display = 'none';
  }
});


copyButton.addEventListener("click", () => {
  const contentToCopy = document.querySelector("#text");
  // Copie o conteúdo para a área de transferência
  contentToCopy.select();
  contentToCopy.setSelectionRange(0, 99999);
  document.execCommand("copy")
  // Mostra uma mensagem de confirmação por alguns segundos
  const confirmationMessage = document.createElement("p");
  confirmationMessage.textContent = "Conteúdo copiado!";
  confirmationMessage.classList.add("copy-message");
  document.body.appendChild(confirmationMessage);
  setTimeout(() => {
    document.body.removeChild(confirmationMessage);
  }, 2000);

});


function criptografar(){
    const texto = text.value.toLowerCase();
    const textoSemAcentos = removerAcentos(texto);
    const tamanho = textoSemAcentos.length;
    var textoCriptografado = '';

    for (let i = 0; i < tamanho; i++) {
        if (textoSemAcentos[i] == 'e') {
            textoCriptografado += 'enter';
        } else if (textoSemAcentos[i] == 'i') {
            textoCriptografado += 'imes';
        } else if (textoSemAcentos[i]== 'a'){
            textoCriptografado += 'ai';
        } else if (textoSemAcentos[i] == 'o') {
            textoCriptografado += 'ober';
        } else if (textoSemAcentos[i] == 'u') {
            textoCriptografado += 'ufat';
        }else{
            textoCriptografado += textoSemAcentos[i];
      }    
    }
    console.log(textoCriptografado);
    text.value = textoCriptografado;
}

function removerAcentos(textoSemAcentos) {
    return textoSemAcentos.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  
  function descriptografar() {
    const textoCriptografado = text.value.toLowerCase();
    const textoSemAcentos = removerAcentos(textoCriptografado);
    
    const textoDescriptografado = textoSemAcentos
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  
    console.log(textoDescriptografado);
    text.value = textoDescriptografado;
  }
