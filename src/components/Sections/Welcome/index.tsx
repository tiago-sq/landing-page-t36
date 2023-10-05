import mockup from '../../../assets/images/hero/mockup-front.png';

function Welcome() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-12 col-12">
          <div className="hero-content">
            <h1 className="wow fadeInLeft" data-wow-delay=".4s">Front-end</h1>
            <p
              className="wow fadeInLeft"
              data-wow-delay=".6s"
            >
              Boas-vindas ao módulo mais
              {' '}
              <strong style={ { color: '#1DB700' } }>estiloso</strong>
              {' '}
              da Trybe.
            </p>
            <div className="button wow fadeInLeft" data-wow-delay=".8s">
              <a
                href="https://app.betrybe.com/learn"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <i className="lni lni-rocket" />
                Começar Estudos
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-12">
          <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
            <img src={ mockup } alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
