import StatisticPage from 'pages/StatisticPage/StatisticPage.js';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Loader } from '../components';
import ForgotPassword from './ForgotPassword/ForgotPassword';

// import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage/SettingsPage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <Loader
            height={'120'}
            width={'120'}
            color={'#4A56E2'}
            center={true}
          />
        }
      >
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<HomePage />}>
              <Route path="statistic" element={<StatisticPage />} />
            </Route>
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/signUp"
            element={<PublicRoute redirectTo="/" children={<RegisterPage />} />}
          />
          <Route
            path="/login"
            element={<PublicRoute redirectTo="/" children={<LoginPage />} />}
          />
          <Route
            path="/forgot-password"
            element={
              <PublicRoute redirectTo="/" children={<ForgotPassword />} />
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};
