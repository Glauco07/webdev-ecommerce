# webdev-ecommerce

# Group
Felipe Alegria Rollo Dias - 9293501

Glauco Henrique Borges da Costa - 10295134

Luca Faria Curcio - 10295502

# Navigation Diagram
https://miro.com/app/board/o9J_lDGk59Y=/

# Protype
- Home: https://marvelapp.com/prototype/gcg5i07/screen/79495769
- Products: https://marvelapp.com/prototype/gcg5i07/screen/79562591
- Login: https://marvelapp.com/prototype/gcg5i07/screen/79563949

# Requirements
- npm

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
- Adicionar e remover produtos do carrinho
- Fluxo de checkout funcionando e limpando o carrinho após uma compra
- Login aceita qualquer usuario e senha e para cadastrar, quaisquer informaçoes sao aceitas também.
- Para logar como admin, basta usar o user "admin" (Sem as aspas)

# Test Results
Todos os fluxos listados acima funcionaram corretamente.
- As informaçoes do perfil de usuario serão sempre as mesmas
- As opçoes de admin (Gerenciar produtos e admins) por enquanto não conseguem mudar o banco de dados mockado.
- A navegaçao pelas páginas do site funcionam perfeitamente
- O carrinho também esta funcionando, com o valor total sendo atualizado corretamente e o carrinho limpo depois de uma compra bem sucedida.


# Build Procedures
Para rodar o nosso site, precisa ter npm instalado.
Com isso, basta rodar npm install e npm start na pasta my-app do projeto.

# Problems
Tivemos alguns problemas com as libs que encontramos de carousel e no fim decidimos montar uma nós mesmos.

# Comments
