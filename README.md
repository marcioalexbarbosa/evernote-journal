# evernote-journal

Um diário usando o Evernote

## Introdução

Eu criei um caderno no evernote chamado "Journal" para utilizar como um diário. Dentro deste caderno, todos os dias eu crio uma nota com o nome da data atual no formato AAAAMMDD.
Dentro desta nota eu relato como foi o meu dia.

## Nota Aleatória

Eu criei um script em node.js para pegar uma nota aleatória deste meu diário e exibir o seu conteúdo. Assim eu consigo me lembrar e refletir sobre fatos passados.

## Instruções de uso

### Pré-requisitos: 

* Um caderno no evernote com uma nota para cada dia, como um diário.
* Um [developer token](https://dev.evernote.com/get-token/) para usar a API do Evernote.
* substituir no index.js o auth token pelo seu próprio token
* substituir no notebook guid o [guid](https://discussion.evernote.com/topic/37081-archived-how-to-find-notebook_guid/) do seu próprio notebook onde você mantém o seu diário
<br>Nota: você pode obter o guid do notebook resolvendo a Promise [listNotebooks](http://dev.evernote.com/doc/reference/NoteStore.html#Fn_NoteStore_listNotebooks)
* npm install
* npm start

### example output

```
Hoje, sábado, 31 de outubro de 2015, foi um dia bom.17:03h
E eu aproveitei o sábado para descansar, esta semana foi muito corrida e eu passei mal na segunda-feira. 
E amanhã tem que ir para Cerquilho.
```
