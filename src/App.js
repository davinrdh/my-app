import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/Home/HomePage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MenuPage from './pages/Menu/MenuPage';
import SigninPage from './pages/Auth/SigninPage';
import ProtectedRoutes from './pages/Auth/ProtectedRoutes';
import styled, { css } from 'styled-components';

function App() {
  return (
    <ContainerStyled mobile={true}>
      <Router>
        <Routes>
          <Route index path='/signin' element={<SigninPage />} />
          {/* <Route path='*' element={
            <ProtectedRoutes>
              <Route index element={<Navigate to={'/home'} />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/menu' element={<MenuPage />} />
            </ProtectedRoutes>}>
          </Route> */}
          <Route path='' element={<Navigate to={'/signin'} />}></Route>
          <Route path='/home' element={<HomePage />} />
          <Route path='/menu' element={<MenuPage />} />
        </Routes>
      </Router>
    </ContainerStyled>
  );
}

export default App;

const ContainerStyled = styled.div`
  width: 25%;
  // display: flex;
  // justify-content: center;
  margin: auto;

  @media (max-width: 768px) {
    ${({ mobile }) =>
    mobile &&
    css`
        width: 100%;
      `}
  }
`