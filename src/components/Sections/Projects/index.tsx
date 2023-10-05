import { Card } from './Card';
import { PROJECTS_LIST } from './data';

function Projects() {
  return (
    <div className="container">
      <div className="section-title">
        <h3 className="wow zoomIn" data-wow-delay=".2s" style={ { visibility: 'visible', animationDelay: '0.2s' } }>Projetos</h3>
        <h2 className="wow fadeInUp" data-wow-delay=".4s" style={ { visibility: 'visible', animationDelay: '0.4s' } }>Conheça os projetos que você vai criar durante o módulo</h2>
      </div>
      {
        PROJECTS_LIST.map((project, index) => (
          <Card key={ project.title } odd={ (index + 1) % 2 === 0 } { ...project } />
        ))
      }
    </div>
  );
}

export default Projects;
