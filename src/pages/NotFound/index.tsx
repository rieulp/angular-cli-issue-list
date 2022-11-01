import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundWrapper } from './styles';

const NotFound = () => {
  const navigate = useNavigate();
  const onClickBackButton = useCallback(() => {
    navigate('/');
  }, []);
  return (
    <NotFoundWrapper>
      <h1>NOT FOUND</h1>
      <button onClick={onClickBackButton}>목록으로 가기</button>
    </NotFoundWrapper>
  );
};

export default NotFound;
