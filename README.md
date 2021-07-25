# webdev-ecommerce

# Group
Felipe Alegria Rollo Dias - 9293501

Glauco Henrique Borges da Costa - 10295134

Luca Faria Curcio - 10295502

# Navigation Diagram
https://miro.com/app/board/o9J_lDGk59Y=/

# Prototype
- Home: https://marvelapp.com/prototype/gcg5i07/screen/79495769
- Products: https://marvelapp.com/prototype/gcg5i07/screen/79562591
- Login: https://marvelapp.com/prototype/gcg5i07/screen/79563949

# Requirements
- npm
- node

# Project Description
Nosso projeto consiste no desenvolvimento do site de um site para um petshop ecommerce:
- A página *home* representa a página inicial do site, com destaques de alguns produtos do site;
- As páginas *Alimentos*, *Brinquedos*, *Casinhas* e *Remédios* representam as categorias de produtos, onde são possíveis de visualizar os produtos que se encaixem nessa categoria, com as seguinte informações **nome** e **preço**;
- A página *login* é por onde o usuário realiza o **login** ou **cadastro** no site.
- A página *User* é onde o usuario pode ver seu perfil e o admin pode gerenciar o site.
- As paginas de *Cart* e *Checkout* fazem todo o fluxo da compra dos produtos

# Comments About the Code
 Nosso projeto foi feito utilizando os frameworks react e redux. Com isso, todas nossas páginas e funcionalidades são feitas em componentes e as informações são salvas na store.
 Para o roteamento das páginas, nós utilizamos o React Router.
 No react, nós separamos os componentes em /pages e /components dependendo da funcionalidade dele
 No redux criamos dois reducers. Um para o carrinho e outro para o usuario.
 
# Test Plan
Nossos testes foram realizados manualmente, realizando cada uma das funcionalidades
- Adicionar e remover produtos do carrinho (de um em um, ou vários)
- Fluxo de checkout funcionando e limpando o carrinho após uma compra (usuário precisa estar logado para poder comprar)
- Para fazer login, é necessário já ter uma conta, caso contrário, não loga
- É possível criar uma conta
- Para logar como admin, basta usar o user e senha "admin" (sem as aspas)
- Ao clicar nas setas no carrosel, ele muda a página em exibição
- Todos os botões funcionam, e levam para as páginas de destino desejadas
- Responsividade

# Test Results
Todos os fluxos listados acima funcionaram corretamente.
- As informaçoes do perfil vêm da API que consome do banco de dados
- As opçoes de admin (Gerenciar produtos e admins) conseguem mudar o banco de dados
- A navegaçao pelas páginas do site funcionam perfeitamente
- O site é responsivo para desktop
- O carrinho também esta funcionando, com o valor total sendo atualizado corretamente e o carrinho limpo depois de uma compra bem sucedida
- Quando uma compra é realizada, esta é adicionada ao histórico do usuário que a fez
- Os admins possuem acesso ao histórico de todas as compras realizadas

# Build Procedures
Para rodar o nosso site, precisa rodar os seguintes comandos nas respectivas pastas:
- my-server:
  ```bash
    node ./app.js
  ```
- my-app: 
  ```bash
    npm start
  ```
Para acessar o site, acesse [http://localhost:3000](http://localhost:3000)

# Problems
Tivemos alguns problemas com as libs que encontramos de carousel e no fim decidimos montar uma nós mesmos.

# Comments
