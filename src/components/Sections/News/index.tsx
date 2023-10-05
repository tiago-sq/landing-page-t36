import TechCard from './TechCard'; // Importe o componente TechCard
import { techData } from './tech-data';

function News() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title" style={ { width: '100%' } }>
            <h3 className="wow zoomIn" data-wow-delay=".2s">
              Novidades
            </h3>
            <h2 className="wow fadeInUp" data-wow-delay=".4s">
              O módulo de Front-end
              <br />
              está melhorando a cada dia!
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".6s">
              A Turma 34 começa com muitas novidades: tecnologias, projetos inovadores e muita, muita prática!
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        {techData.map((tech, index) => (
          <TechCard key={ index } { ...tech } />
        ))}
      </div>
    </div>
  );
}

export default News;
