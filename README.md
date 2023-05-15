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

Considerações sobre o projeto:

Este projeto foi desenvolvido utilizando as linguagens de marcação HTML, de estilo CSS e de programação JavaScript. Ele apresenta vários elementos de interface, incluindo:

* uma logo Alura
* uma caixa de texto de área
* dois botões para criptografar e descriptografar
* uma imagem de um investigador com lupa
* um texto no rodapé
* dois botões extras com links para o seu perfil pessoal do LinkedIn e para o repositório online no GitHub
* Além disso, ele conta com um botão para copiar o texto criptografado ou descriptografado para a área de transferencia que aparece apenas quando há texto digitado na tela.

Os elementos da página foram posicionados utilizando a técnica de Flexbox, que permite uma disposição mais flexível e dinâmica dos elementos em relação ao layout da página.

Para implementar a funcionalidade de criptografia e descriptografia, foram utilizadas duas abordagens diferentes em JavaScript:

Na primeira abordagem, foi utilizado um loop for para iterar através dos elementos do texto digitado e comparar cada um deles com os elementos-chave da criptografia. Quando um elemento-chave é encontrado, o script adiciona o elemento de substituição ao novo texto criptografado ou descriptografado.

Na segunda abordagem, foi utilizada a função replace do JavaScript, que substitui automaticamente os elementos-chave da criptografia pelos elementos de substituição. Essa abordagem é mais simples e automática, mas pode ser menos flexível em relação a alguns requisitos específicos.

Para atender aos requisitos do projeto, foi utilizado um conjunto de funções para transformar o texto digitado em letras minúsculas e remover todos os acentos. Isso ajuda a simplificar o processamento do texto e garante que todos os caracteres sejam tratados de maneira uniforme.

Por fim, um pequeno efeito foi adicionado ao botão de copiar, que aparece e desaparece na tela de acordo com a presença de texto digitado. Quando clicado, ele exibe uma mensagem na tela por alguns momentos para indicar que o texto foi copiado com sucesso. Esse efeito foi implementado utilizando as linguagens de estilo CSS e programação JavaScript.
