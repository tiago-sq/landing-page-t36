import './TechCard.css';
import { TechDataType } from './tech-data';

function TechCard({ icon: Icon, title, description, delay }: TechDataType) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="single-feature wow fadeInUp" data-wow-delay={ delay }>
        <div className="tech-card">
          <Icon />
        </div>
        <h3 style={ { marginTop: 30, textAlign: 'center' } }>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TechCard;
