# Projeto Lotecaria
Um simulador de loteria que o usuarios escolhe seis numeros
e o programa sorteia outros seis numeros e após isso 
verifica a quantidade de acertos!!!

## Tecnologias Utilizadas
- **HTML:** _Estrutura do SITE_
- **CSS:** Estilos do SITE
- **JS:** Funções do SITE
- ~~BootStrap~~: Não foi utilizado


### Melhorias Possiveis
1. [x] Subir no github pages
2. [ ] Trocar o Alert pro mensagens mais amigaveis 
3. [ ] Realizar teste para descobrir bugs🕷

### disponivel em:
[GitHubPage](https://carloscacho.github.io/Lotecaria-vesp/)

### Prints da Tela do WebApp

| Tela inicial | Primeira Rodada |
|--------------|-----------------|
| imagem 1     | imagem 2        |


### codigo principal
```js:
function verificaAcertos() {
  let cont = 0;
  numDig.forEach(function (valor, index) {
    if (numSort.includes(valor)) {
      cont = cont + 1;
    }
  });
  document.getElementById("total").innerText = cont;
}
```



### Comandos Git

comando para cadastra seu user em um computador
```
git config --global user.name "user"
git config --global user.email "email"
```
