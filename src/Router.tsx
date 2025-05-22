import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/defaultlayout';
import { Home } from './pages/home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/info" element={} /> */}
        <Route />
      </Route>
    </Routes>
  );
}
