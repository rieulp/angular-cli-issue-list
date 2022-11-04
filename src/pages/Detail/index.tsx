import LoadingBar from '@/components/LoadingBar';
import Markdown from '@/components/Markdown';
import useIssue from '@/hooks/useIssue';
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { ContentWrapper, TitleWrapper, UserWrapper } from './styles';

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) navigate('/');

  const { issue, error } = useIssue(id);
  const dateString = useMemo(() => {
    if (!issue) return '';
    const date = new Date(issue.created_at);
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
  }, [issue]);
  if (error) return <Navigate to="/notfound" replace />;
  if (!issue) return <LoadingBar />;
  return (
    <div>
      <TitleWrapper>
        <UserWrapper>
          <div className="user_avatar">
            <img src={issue.author_url} />
          </div>
        </UserWrapper>
        <div>
          <h1 className="title">
            <span className="issue-number">#{issue.number}</span> {issue.title}
          </h1>
          <div className="info">
            <a
              href={`https://github.com/${issue.author}`}
              className="author"
              target="_blank"
              rel="noreferrer"
            >
              @{issue.author}
            </a>
            <span className="date">{dateString}</span>

            <div className="comments">
              <span className="comment-number">{issue.comments} </span>
              comments
            </div>
          </div>
        </div>
      </TitleWrapper>
      <ContentWrapper>
        <Markdown content={issue.body || ''} />
      </ContentWrapper>
    </div>
  );
};

export default Detail;
