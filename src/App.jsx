import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Stage1 from './stages/stage1/Stage1';
import Stage2 from './stages/stage2/Stage2';
import Stage3 from './stages/stage3/Stage3';

function App() {
  return (
    <Layout>
      <Header>
        <Title>Todo List</Title>
        <Nav>
          <StyledNavLink to="/">Stage 1</StyledNavLink>
          <StyledNavLink to="/stage2">Stage 2</StyledNavLink>
          <StyledNavLink to="/stage3">Stage 3</StyledNavLink>
        </Nav>
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<Stage1 />} />
          <Route path="/stage2" element={<Stage2 />} />
          <Route path="/stage3" element={<Stage3 />} />
        </Routes>
      </Main>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  max-width: 600px;
  padding: 32px 20px 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text.primary};
`;

const Nav = styled.nav`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: 24px;
`;

const StyledNavLink = styled(NavLink)`
  padding: 8px 20px;
  border-radius: ${({ theme }) => theme.radius};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  background: ${({ theme }) => theme.bg.secondary};
  border: 1px solid ${({ theme }) => theme.border};
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ theme }) => theme.bg.hover};
  }

  &.active {
    background: ${({ theme }) => theme.accent.primary};
    color: #ffffff;
    border-color: ${({ theme }) => theme.accent.primary};
  }
`;

const Main = styled.main`
  width: 100%;
  max-width: 600px;
  padding: 0 20px 40px;
`;
