import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/defaultlayout';
import { Home } from './pages/home';
import { InfoPost } from './pages/infoPost';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/infoPost/:numberPost" element={<InfoPost />} />
        <Route />
      </Route>
    </Routes>
  );
}
