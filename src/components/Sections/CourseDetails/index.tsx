import CourseDetailCard from '../../CourseDetailCard';

function CourseDetails() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h3 className="wow zoomIn" data-wow-delay=".2s">Ementa</h3>
            <h2 className="wow fadeInUp" data-wow-delay=".4s">Como estão divididas as seções de front-end</h2>
            <p className="wow fadeInUp" data-wow-delay=".6s">
              O curso é dividido em 8 seções, cada uma com um objetivo específico.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <CourseDetailCard
          title="Introdução ao Front-end e Javascript Assíncrono"
          topics={ [
            {
              title: 'Criação de projetos com Vite',
              isNew: false,
            },
            {
              title: 'Promises',
              isNew: false,
            },
            {
              title: 'Async Await',
              isNew: false,
            },
            {
              title: 'Testes assíncronos',
              isNew: false,
            },
            {
              title: 'Novo projeto Ichoveu',
              isNew: true,
            },
          ] }
          description="Os primeiros passos em um novo mundo"
          numberOfDays={ 6 }
          sessionNumber={ 1 }
        />
        <CourseDetailCard
          title="Introdução ao React"
          topics={ [
            {
              title: 'Criação de projetos React + Typescript com Vite',
              isNew: true,
            },
            {
              title: 'Criação de componentes funcionais',
              isNew: false,
            },
            {
              title: 'Introdução ao TypeScript',
              isNew: false,
            },
            {
              title: 'Props',
              isNew: false,
            },
            {
              title: 'Tipagem de props com TypeScript',
              isNew: true,
            },
            {
              title: 'Renderização condicional',
              isNew: false,
            },
            {
              title: 'Renderização de listas',
              isNew: false,
            },
            {
              title: 'Estilização e utilização de imagens em componentes',
              isNew: false,
            },
            {
              title: 'Event Handlers',
              isNew: false,
            },
            {
              title: 'Utilizando estados com o hook useState',
              isNew: true,
            },
            {
              title: 'Criando estados com tipos genéricos',
              isNew: true,
            },
            {
              title: 'Formulários',
              isNew: false,
            },
            {
              title: 'Elevação de estado',
              isNew: false,
            },
            {
              title: 'Validando campos',
              isNew: false,
            },
          ] }
          description="A base para o desenvolvimento front-end"
          numberOfDays={ 8 }
          sessionNumber={ 2 }
        />
        <CourseDetailCard
          title="Avançando em React"
          topics={ [
            {
              title: 'React Router (com componentes funcionais)',
              isNew: true,
            },
            {
              title: 'Rotas dinâmicas',
              isNew: false,
            },
            {
              title: 'Outlet',
              isNew: true,
            },
            {
              title: 'Hook useLocation',
              isNew: true,
            },
            {
              title: 'Hook useEffect',
              isNew: true,
            },
          ] }
          description="Aprofundando no desenvolvimento front-end"
          numberOfDays={ 7 }
          sessionNumber={ 3 }
        />
        <CourseDetailCard
          title="Testando aplicações React"
          topics={ [
            {
              title: 'Configurando ambiente de teste',
              isNew: false,
            },
            {
              title: 'React Testing Library',
              isNew: false,
            },
            {
              title: 'Testando um componente',
              isNew: false,
            },
            {
              title: 'Testando eventos',
              isNew: false,
            },
            {
              title: 'Mocks',
              isNew: false,
            },
            {
              title: 'Testando rotas',
              isNew: false,
            },
          ] }
          description="Aprendendo a testar aplicações React"
          numberOfDays={ 5 }
          sessionNumber={ 4 }
        />
        <CourseDetailCard
          title="Estilização e metodologias ágeis"
          topics={ [
            {
              title: 'Estilização',
              isNew: true,
            },
            {
              title: 'Manifesto ágil',
              isNew: false,
            },
            {
              title: 'Kanban',
              isNew: false,
            },
            {
              title: 'Scrum',
              isNew: false,
            },
          ] }
          description="Aprofundando na estilização e metodologias ágeis"
          numberOfDays={ 7 }
          sessionNumber={ 5 }
        />
        <CourseDetailCard
          title="Gerenciamento de estados com Redux"
          topics={ [
            {
              title: 'Peças do Redux',
              isNew: false,
            },
            {
              title: 'Redux Dev Tools',
              isNew: false,
            },
            {
              title: 'Redux no React',
              isNew: false,
            },
            {
              title: 'Lib react-redux (hooks useSelector e useDispatch)',
              isNew: true,
            },
            {
              title: 'Redux Thunk',
              isNew: false,
            },
            {
              title: 'Testes com Redux',
              isNew: false,
            },
          ] }
          description="A ferramenta de gerenciamento de estados mais utilizado no mercado"
          numberOfDays={ 9 }
          sessionNumber={ 6 }
        />
        <CourseDetailCard
          title="Componentes de classe, ContextAPI e
          Hooks customizados"
          topics={ [
            {
              title: 'Componentes de classes e ciclo de vida',
              isNew: false,
            },
            {
              title: 'ContextAPI',
              isNew: false,
            },
            {
              title: 'Criação de Hooks Customizados',
              isNew: false,
            },
            {
              title: 'Utilização de Typescript',
              isNew: true,
            },
          ] }
          description="Os toques finais para o desenvolvimento front-end"
          numberOfDays={ 8 }
          sessionNumber={ 7 }
        />
        <CourseDetailCard
          title="Projeto final"
          topics={ [
            {
              title: 'Utilizar Redux para gerenciar estado.',
              isNew: false,
            },
            {
              title: 'Utilizar a biblioteca React-Redux.',
              isNew: false,
            },
            {
              title: 'Utilizar a Context API do React para gerenciar estado.',
              isNew: false,
            },
            {
              title: 'Utilizar o React Hook useState.',
              isNew: false,
            },
            {
              title: 'Utilizar o React Hook useContext.',
              isNew: false,
            },
            {
              title: 'Utilizar o React Hook useEffect.',
              isNew: false,
            },
            {
              title: 'Criar Hooks customizados.',
              isNew: false,
            },
          ] }
          description="O projeto final do curso"
          numberOfDays={ 12 }
          sessionNumber={ 8 }
        />
      </div>
    </div>
  );
}

export default CourseDetails;
