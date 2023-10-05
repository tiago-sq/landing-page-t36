function CallToAction() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
          <div className="cta-content">
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Bora dominar o desenvolvimento
              <br />
              {' '}
              front-end?
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".4s">
              Mas antes, vem cá conhecer mais sobre a nossa regra de progressão por período. É bem legal!
            </p>
            <div className="button wow fadeInUp" data-wow-delay=".6s">
              <a href="https://youtu.be/U1Wc6tzor4o" className="btn d-inline-flex align-items-center">
                <i className="lni lni-youtube" style={ { fontSize: '24px' } } />
                {' '}
                Regra de Progressão
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
