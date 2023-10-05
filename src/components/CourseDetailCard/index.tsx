import { Star } from '@phosphor-icons/react';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

type CourseDetailCardProps = {
  title: string;
  topics: {
    title: string;
    isNew?: boolean;
  }[];
  description: string;
  numberOfDays: number;
  sessionNumber: number;
};

function CourseDetailCard({ title, topics, description, numberOfDays, sessionNumber }: CourseDetailCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const initialTopics = topics.slice(0, 3);
  const restOfTopics = topics.slice(3);

  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div
        className="single-table wow fadeInUp"
        data-wow-delay=".2s"
      >
        <div className="table-head" style={ { position: 'relative' } }>
          <h4 className="title">{ title }</h4>
          <p>{description}</p>
          <div className="price">
            <h2 className="amount">
              {numberOfDays}
              <span className="duration"> Dias de conteúdo e projetos</span>
            </h2>
          </div>
          <div className="container-background">{sessionNumber}</div>
        </div>
        <div className="table-content">
          <h4 className="middle-title">O que será visto:</h4>
          <ul className="table-list">
            {
              initialTopics.map((topic) => (
                <li key={ topic.title }>
                  {
                    topic.isNew
                      ? (
                        <i style={ { display: 'flex', alignItems: 'center' } }>
                          <Star size={ 15 } color="#FFE500" weight="fill" />
                        </i>
                      )
                      : <i className="lni lni-checkmark-circle" />
                  }
                  {' '}
                  {
                    topic.isNew ? (
                      <Tooltip title="Novo" placement="top-end">
                        <strong style={ { color: '#1DB700' } }>
                          { topic.title }
                        </strong>
                      </Tooltip>
                    )
                      : topic.title
                  }
                </li>
              ))
            }
            {
              isExpanded && restOfTopics.map((topic) => (
                <li key={ topic.title }>
                  {
                    topic.isNew
                      ? (
                        <i style={ { display: 'flex', justifyContent: 'center' } }>
                          <Star size={ 15 } color="#FFE500" weight="fill" />
                        </i>
                      )
                      : <i className="lni lni-checkmark-circle" />
                  }
                  {' '}
                  {
                    topic.isNew ? (
                      <Tooltip title="Novo" placement="top-end">
                        <strong style={ { color: '#1DB700' } }>
                          { topic.title }
                        </strong>
                      </Tooltip>
                    )
                      : topic.title
                  }
                </li>
              ))
            }
          </ul>

          {
            restOfTopics.length > 0 && (
              <button className="show btn" onClick={ () => setIsExpanded(!isExpanded) }>
                {isExpanded ? (
                  <i className="lni lni-chevron-up" />
                )
                  : <i className="lni lni-chevron-down" />}
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default CourseDetailCard;
