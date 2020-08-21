var botao = document.querySelector('#botao');
botao.addEventListener('click', 
                       function( event ) {
                              event.preventDefault();
                              var formulario = document.querySelector('#formulario');
                              alert('Nome: '+formulario.nome.value);
                              var tabela = document.querySelector('#nomes');
                              var linha = document.createElement("tr");
                              var nome = document.createElement("td");
                              nome.textContent = formulario.nome.value;
                              linha.appendChild(nome);
                              var assunto = document.createElement("td");
                              assunto.textContent = formulario.ast.value;
                              linha.appendChild(assunto);

                              tabela.appendChild(linha);
                          });
