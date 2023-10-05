import {
  Atom,
  Code,
  FileTsx,
  Textbox,
  Browser,
  FileCss,
} from '@phosphor-icons/react';

export type TechDataType = {
  title: string;
  delay: string;
  description: string;
  color?: string;
  icon: React.ComponentType;
};

export const techData:TechDataType[] = [
  {
    icon: Atom,
    title: 'React',
    description: 'A biblioteca front-end mais utilizada do mundo está aqui. Aprenderemos como podemos usá-la para construir aplicações',
    color: '#1DB700',
    delay: '.2s',
  },
  {
    icon: Code,
    title: 'React Hooks',
    description: 'Vamos explorar os Hooks, um método moderno para construir aplicações React, a partir da segunda seção do módulo de front-end.',
    color: '#1DB700',
    delay: '.4s',
  },
  {
    icon: FileTsx,
    title: 'TypeScript + Vite',
    description: 'TypeScript e Vite, duas tecnologias que estão em alta no mercado e que vão te ajudar a construir aplicações mais robustas e performáticas.',
    color: '#1DB700',
    delay: '.6s',
  },
  {
    icon: Textbox,
    title: 'Formulários',
    description: 'Exploraremos a criação e validação de formulários no React, aprimorando a interatividade e segurança de nossas aplicações.',
    color: '#1DB700',
    delay: '.2s',
  },
  {
    icon: Browser,
    title: 'React Router',
    description: 'Com o React Router, desenvolveremos rotas dinâmicas, facilitando a navegação entre componentes e páginas.',
    color: '#1DB700',
    delay: '.4s',
  },
  {
    icon: FileCss,
    title: 'Estilização',
    description: 'Aplicar estilos personalizados e explorar técnicas avançadas para deixar suas aplicações visualmente deslumbrantes e consistentes.',
    color: '#1DB700',
    delay: '.6s',
  },
];
