# Desafio Decodificador-One

Descrição
Boas vindas ao primeiro desafio!

Durante estas duas semanas, vamos trabalhar em uma aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
"gato" => "gaitober"
gaitober" => "gato"

A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
O resultado deve ser exibido na tela.
Extras:
- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.

Temos um período de tempo de quatro semanas para desenvolver o projeto e vamos trabalhar com o sistema ágil de desenvolvimento, utilizando o Trello da seguinte forma:

A coluna Pronto pra iniciar apresenta os cartões com os elementos ainda não desenvolvidos.
Já na coluna Desenvolvendo ficarão os elementos que você estiver desenvolvendo no momento. Ao iniciar uma tarefa, você poderá mover o cartão que contém a tarefa para esta coluna.
No Pausado estarão os elementos que você começou a desenvolver, mas precisou parar por algum motivo.
Por fim, a coluna Concluído terá os elementos já concluídos.
O Trello é uma ferramenta de uso individual para você controlar o andamento das suas atividades, mas ela não será avaliada.

Bom projeto!

Projeto foi realizado utilizando html, css e javaScript.

O projeto conta com um 
* logo alura
* caixa de texto de area 
* dois botões para criptografar e descriptografar
* uma imagem de um investigador com lupa
* um texto no rodape
* dois botões extra com links para o meu linkedin pessoal e para o repositorio online no gitHub
* um botão para copiar que aparece apenas quando tiver texto digitado na tela   

Elementos da pagina posicionados com flex-box.

Codigo de java scrpit em dois formatos de logica, utilizando (for) criando um outro texto ao mesmo tempo que iterava e verificava os elementos do texto digitado e fazendo comparações para adicionar ao novo texto ou o elemento do texto digitado ou em caso de ser um dos elementos chave da criptografia eu adicionei ao texto o elemento de substituição no caso do [e] seria o [enter].

E o segundo modelo de logica utilizado, foi com a function replace que realiza a substituição de forma mais simpes e automatica identificando no texto os elementos chave e substituindo pelos elementos de substituição e entregando esse resultado em uma nova string.

Para os requisitos foi utlizado a estratégia de mudar o texto digitado para letras miniscula por meio de function, e usar uma outra function para retirar os acentos do texto digitado assim não precisando se preocupar com o conteudo digitado, ele sera tratado e enviado um texto que atende aos requisitos.

Foi adicionado um pequeno efeito no botão copiar, aparecendo apenas quando tem texto digitado na tela e quando clicado aparecendo na tela por alguns momentos "uma mensagem" , para isso foi utlizado o css e javaScrpt. 
