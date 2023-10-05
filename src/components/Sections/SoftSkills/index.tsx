/* eslint-disable react/no-multi-comp */
import {
  Lightbulb,
  Brain,
  UsersFour,
  Handshake,
  LinkedinLogo,
  GithubLogo,
  GitBranch,
  PresentationChart,
} from '@phosphor-icons/react';

import './index.css';

interface Skill {
  icon: React.ComponentType;
  title: string;
  delay: string;
  description: string;
}

const skillData: Skill[] = [
  { icon: Lightbulb, title: 'Criatividade e Inovação', delay: '.2s', description: 'Criatividade na resolução de problemas e produção de ideias originais.' },
  { icon: UsersFour, title: 'Colaboração', delay: '.6s', description: 'A importância da colaboração em times de desenvolvimento, e como desenvolvê-la.' },
  { icon: Handshake, title: 'Criatividade + Colaboração', delay: '.2s', description: 'Como utilizar a colaboração para aumentar a criatividade.' },
  { icon: LinkedinLogo, title: 'Linkedin', delay: '.4s', description: 'Como construir um perfil estratégico.' },
  { icon: GithubLogo, title: 'Github', delay: '.6s', description: 'Desenvolvendo um GitHub campeão.' },
  { icon: GitBranch, title: 'Projetos em grupo', delay: '.6s', description: 'Aprimorando a colaboração através de metodologias ágeis.' },
];

function SkillCard({ icon: Icon, title, delay, description }:Skill) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="single-feature wow fadeInUp" data-wow-delay={ delay }>
        <div className="iconBg">
          <Icon />
        </div>
        <h3 style={ { marginTop: 30, textAlign: 'center' } }>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function SoftSkills() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="section-title" style={ { width: '100%' } }>
            <h3 className="wow zoomIn" data-wow-delay=".2s" style={ { color: '#7e18de' } }>
              SoftSkills e Carreira
            </h3>

            <p className="wow fadeInUp" data-wow-delay=".6s">
              O módulo também está recheado de conteúdos importantes para o desenvolvimento de soft skills chave no mercado de trabalho, e para a construção da sua carreira como dev.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        {skillData.map((skill, index) => (
          <SkillCard key={ index } { ...skill } />
        ))}
      </div>
    </div>
  );
}

export default SoftSkills;
