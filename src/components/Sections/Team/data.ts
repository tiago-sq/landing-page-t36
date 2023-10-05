import { TeamMemberCardProps } from '../../TeamMemberCard';
import frames from '../../../assets/images/members/frames.png';
import teph from '../../../assets/images/members/teph.png';
import filipe from '../../../assets/images/members/filipe.png';
import dani from '../../../assets/images/members/dani.png';
import felipe from '../../../assets/images/members/felipe.png';
import tiago from '../../../assets/images/members/tiago.png';
import renato from '../../../assets/images/members/renato.png';
import jay from '../../../assets/images/members/jay.png';
import carol from '../../../assets/images/members/carol.png';

type TeamMemberData = TeamMemberCardProps[];

export const data: TeamMemberData = [
  {
    name: 'Felipe Trindade',
    teamRole: 'Coordenação',
    imgSrc: felipe,
    linkedinUrl: 'https://www.linkedin.com/in/felipetrindade/',
    githubUrl: 'https://github.com/ftrindade87',
  },
  {
    name: 'Stéphanie "Teph" Moraes',
    teamRole: 'Experiência',
    imgSrc: teph,
    linkedinUrl: 'https://www.linkedin.com/in/stephaniemoraes/',
    goodreadsUrl: 'https://www.goodreads.com/user/show/161335548-st-phanie-santos',
  },
  {
    name: 'Danielli "Dani" Olegário',
    teamRole: 'Soft Skills e Carreira',
    imgSrc: dani,
    linkedinUrl: 'https://www.linkedin.com/in/danielliolegario/',
  },
  {
    name: 'Jay Marchiore',
    teamRole: 'Soft Skills e Carreira',
    imgSrc: jay,
    linkedinUrl: 'https://www.linkedin.com/in/jay-marchiore/',
  },
  {
    name: 'Carol Lima',
    teamRole: 'Soft Skills e Carreira',
    imgSrc: carol,
    linkedinUrl: 'https://www.linkedin.com/in/caroline-lima/',
  },
  {
    name: 'Tiago "Frames" Quadros',
    teamRole: 'Instrução',
    imgSrc: frames,
    linkedinUrl: 'https://www.linkedin.com/in/tiagosq/',
    githubUrl: 'https://github.com/tiago-sq',
  },
  {
    name: 'Renato Calzzetta Moraes Freire',
    teamRole: 'Instrução',
    imgSrc: renato,
    linkedinUrl: 'https://www.linkedin.com/in/renato-freire/',
    githubUrl: 'https://github.com/renatofreire',
  },
  {
    name: 'Filipe Santana',
    teamRole: 'Instrução',
    imgSrc: filipe,
    linkedinUrl: 'https://www.linkedin.com/in/filipesantanadev/',
    githubUrl: 'https://github.com/FilipeSkmc',
  },
  {
    name: 'Tiago de Almeida Paz',
    teamRole: 'Instrução',
    imgSrc: tiago,
    linkedinUrl: 'http://linkedin.com/in/tiago-de-almeida-paz/',
    githubUrl: 'https://github.com/TiagoPaz2000',
  },
];
