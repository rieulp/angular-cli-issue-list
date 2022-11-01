import theme from '@/styles/theme';
import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
`;
export const LayoutContentWrapper = styled.div`
  max-width: 1280px;
  padding: 1rem;
  min-height: calc(100vh - 162px);
  margin: 0 auto;

  @media ${theme.device.tablet} {
    min-height: calc(100vh - 150px);
  }
`;
