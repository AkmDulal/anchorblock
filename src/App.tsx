import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Dashboard from '@pages/Dashboard/Dashboard';
import SignIn from '@pages/Authentication/SignIn';
import SignUp from '@pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
import PrivateRoute from "./services/PrivateRoute"
function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route element={<DefaultLayout />}>
            <Route index element={<Dashboard />} />
            {routes.map((routes, index) => {
              const { path, component: Component } = routes;
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <Component />
                  }
                />
              );
            })}

          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
