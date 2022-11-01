import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import MoveTopButton from '@/layouts/MoveTopButton';
import { LayoutContentWrapper, LayoutWrapper } from './styles';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Header>Angular / Angular-cli</Header>
      <LayoutContentWrapper>{children}</LayoutContentWrapper>
      <Footer />
      <MoveTopButton />
    </LayoutWrapper>
  );
};

export default Layout;
