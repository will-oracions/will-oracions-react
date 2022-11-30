import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Coding from '../pages/Coding';
import Projects from '../pages/Projects';
import Certifications from '../pages/Certifications';
import Skills from '../pages/Skills';
import Resume from '../pages/Resume';
import AppLayout from '../layout/AppLayout';
import NotFound from '../pages/NotFound';

export const AppRoutes = () => {
  // const { pathname, hash, key } = useLocation();

  // React.useEffect(() => {
  //   // if not a hash link, scroll to top
  //   if (hash === '') {
  //     window.scrollTo(0, 0);
  //   }
  //   // else scroll to id
  //   else {
  //     setTimeout(() => {
  //       const id = hash.replace('#', '');
  //       const element = document.getElementById(id);
  //       if (element) {
  //         element.scrollIntoView();
  //       }
  //     }, 0);
  //   }
  // }, [pathname, hash, key]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='coding' element={<Coding />} />
          <Route path='projects' element={<Projects />} />
          <Route path='certifications' element={<Certifications />} />
          <Route path='Skills' element={<Skills />} />

          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;