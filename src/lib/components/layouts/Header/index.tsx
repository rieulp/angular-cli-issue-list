import { Link } from 'react-router-dom';
import { HeaderWrapper } from './styles';

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1 className="title">{children}</h1>
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
