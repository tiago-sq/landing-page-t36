import iChoveu from '../../../assets/images/projects/iChoveu.svg';
import rtl from '../../../assets/images/projects/rtl.png';
import onlineStore from '../../../assets/images/projects/online-store.svg';
import tunes from '../../../assets/images/projects/tunes.svg';
import wallet from '../../../assets/images/projects/wallet.svg';
import recipesApp from '../../../assets/images/projects/recipes-app.svg';
import starWars from '../../../assets/images/projects/star-wars.svg';
import passwordManager from '../../../assets/images/projects/password-manager.svg';

export const PROJECTS_LIST = [
  {
    title: 'iChoveu ✨ 25 pontos',
    image: iChoveu,
    description: 'Projeto que aborda funções assíncronas e requisições a API. Você irá desenvolver uma aplicação que consulta a API chamada weatherapi e com ela conseguirá exibir a previsão do tempo para a cidade pesquisada.',
  },
  {
    title: 'Password Manager ✨ 30 pontos',
    image: passwordManager,
    description: 'Projeto em React com TypeScript onde são desenvolvidas habilidades de controle de estado, eventos em react passagem de props, renderização condicional elevação de estado listagem de componentes de maneira dinâmica. Você irá desenvolver uma aplicação que cria e gerencia senhas utilizadas em sites e aplicativos.',
  },
  {
    title: 'TrybeTunes ✨ 45 pontos ',
    image: tunes,
    description: 'Projeto que aborda efeitos colaterais do React, requisições e rotas com o React Router DOM. Você irá desenvolver uma aplicação semelhante ao iTunes onde, após fazer o login, será possível pesquisar por artistas e ver álbuns e músicas relacionadas a ele. Além disso, será possível favoritar músicas,vê-las em uma página separadas e alterar as informações de usuário.',
  },
  {
    title: 'React Testing Library ✨ 20 pontos',
    image: rtl,
    description: 'Projeto em React e TypeScript onde serão desenvolvidas as habilidades de testes de integração com a biblioteca React Testing Library. Você realizará testes de integração com a React Testing Library em uma aplicação que simula uma pokedex.',
  },
  {
    title: 'Online Store ✨ 30 pontos',
    image: onlineStore,
    description: 'Projeto em grupo que utiliza React e TypeScript para praticar todo conhecimento adquirido até o momento no módulo de Front-end. Você desenvolverá uma loja online, utilizando a API do Mercado Livre e nessa aplicação será possível adicionar e gerenciar produtos no seu carrinho e preencher um formulário de compra e avaliação dos produtos.',
  },
  {
    title: 'TrybeWallet ✨ 50 pontos',
    image: wallet,
    description: 'Projeto em React e TypeScript onde são desenvolvidas habilidades de estado global com Redux . Você irá desenvolver uma carteira de controle de gastos pessoais, com conversor de moedas, utilizando a API de câmbio para atualizar os valores de acordo com a cotação do dia. Além disso, irá testar sua aplicação utilizando React Testing Library.',
  },
  {
    title: 'Star Wars - Planets Search',
    image: starWars,
    description: 'Projeto em React e TypeScript onde são desenvolvidas habilidades de estado global com Context API com auxílio de hooks customizados. Você desenvolverá uma aplicação que lista planetas do universo Star Wars, utilizando uma API. Nesta aplicação você poderá adicionar diversos filtros de busca para filtrar e ordenar os planetas que deseja. Além disso, irá garantir a qualidade do seu código com testes de integração com o React Testing Library.',
  },
  {
    title: 'Recipes App',
    image: recipesApp,
    description: `Projeto em grupo, utilizando React e TypeScript para praticar todo conhecimento adquirido no módulo de Front-end.
    Você irá desenvolver uma aplicação de receitas, com diversas páginas, como: Login, Comidas, Bebidas, Detalhe da receita, Finalizados, Favoritos e Perfil. Para desenvolver essa aplicação você irá consumir duas APIs utilizando diversos endpoints.`,
  },
];
