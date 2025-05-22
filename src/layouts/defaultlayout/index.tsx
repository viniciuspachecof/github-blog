import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './style';
import { Header } from '../../components/header';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
}
