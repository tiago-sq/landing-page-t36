export type TeamMemberCardProps = {
  name: string;
  teamRole: string;
  imgSrc: string;
  linkedinUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  personalWebsiteUrl?: string;
  goodreadsUrl?: string;
};

function TeamMemberCard({
  name,
  teamRole,
  imgSrc,
  linkedinUrl,
  githubUrl = '',
  twitterUrl = '',
  instagramUrl = '',
  personalWebsiteUrl = '',
  youtubeUrl = '',
  goodreadsUrl = '',
}: TeamMemberCardProps) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div
        className="single-team wow fadeInUp"
        data-wow-delay=".2s"
        style={ {
          visibility: 'visible',
          animationDelay: '0.6s',
          animationName: 'fadeInUp',
        } }
      >
        <div className="image">
          <img alt="#" data-pagespeed-url-hash="4182764257" src={ imgSrc } />
        </div>
        <div className="content">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="text">
                <h4>{name}</h4>
                <h5>{teamRole}</h5>
              </div>
            </div>
            <div className="col-12">
              <ul className="social">
                {githubUrl && (
                  <li>
                    <a href={ githubUrl } target="_blank" rel="noreferrer">
                      <i className="lni lni-github-original" />
                    </a>
                  </li>
                )}
                <li>
                  <a href={ linkedinUrl } target="_blank" rel="noreferrer">
                    <i className="lni lni-linkedin-original" />
                  </a>
                </li>
                {instagramUrl && (
                  <li>
                    <a href={ instagramUrl } target="_blank" rel="noreferrer">
                      <i className="lni lni-instagram-original" />
                    </a>
                  </li>
                )}
                {twitterUrl && (
                  <li>
                    <a href={ twitterUrl } target="_blank" rel="noreferrer">
                      <i className="lni lni-twitter-original" />
                    </a>
                  </li>
                )}
                {personalWebsiteUrl && (
                  <li>
                    <a
                      href={ personalWebsiteUrl }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="lni lni-world" />
                    </a>
                  </li>
                )}
                {youtubeUrl && (
                  <li>
                    <a href={ youtubeUrl } target="_blank" rel="noreferrer">
                      <i className="lni lni-youtube" />
                    </a>
                  </li>
                )}
                {goodreadsUrl && (
                  <li>
                    <a href={ goodreadsUrl } target="_blank" rel="noreferrer">
                      <i className="lni lni-goodreads" />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
