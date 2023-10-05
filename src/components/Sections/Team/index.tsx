import TeamMemberCard from '../../TeamMemberCard';
import { data } from './data';

function Team() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h3 className="wow zoomIn" data-wow-delay=".2s" style={ { visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn' } }>Time Trybe</h3>
            <h2 className="wow fadeInUp" data-wow-delay=".4s" style={ { visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' } }>Conheça o Time que vai te acompanhar em Front-end</h2>
            <p className="wow fadeInUp" data-wow-delay=".6s" style={ { visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' } }>
              Este time está aqui para te ajudar no que for preciso para vivenciar este módulo da melhor forma possível.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        { data && data.map((member) => (
          <TeamMemberCard
            key={ member.name }
            name={ member.name }
            teamRole={ member.teamRole }
            imgSrc={ member.imgSrc }
            linkedinUrl={ member.linkedinUrl }
            instagramUrl={ member.instagramUrl }
            githubUrl={ member.githubUrl }
            twitterUrl={ member.twitterUrl }
            personalWebsiteUrl={ member.personalWebsiteUrl }
            youtubeUrl={ member.youtubeUrl }
            goodreadsUrl={ member.goodreadsUrl }
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
