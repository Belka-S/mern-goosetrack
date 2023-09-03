import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useError } from 'store/selectors';
import { ThemeProvider } from 'styled-components';

import { useThemeColors } from 'components/MainLayout/ThemeToggler/ThemeContextProvider';
import { GlobalStyle } from 'styles/Basic/globalStyles.styled';

import PrivateRoutes from 'components/shared/Routes/PrivateRoutes';
import PubliceRourtes from 'components/shared/Routes/PubliceRoutes';
import MainLayout from 'components/MainLayout/MainLayout';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import ChoosedMonth from 'pages/CalendarPage/ChoosedMonth/ChoosedMonth';
import ChoosedDay from 'pages/CalendarPage/ChoosedDay/ChoosedDay';
import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';
import Loader from 'components/shared/Loader/Loader';
import MainPage from 'pages/MainPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ForgotPwdPage from 'pages/ForgotPwdPage/ForgotPwdPage';
import ResetPwdPage from 'pages/ResetPwdPage/ResetPwdPage';
import AuthGoogle from 'components/shared/AuthGoogle/AuthGoogle';
import RegisterPage from 'pages/RegisterPage/RegisterPage';

import routes from 'components/routes.js';

// const MainLayout = lazy(() => import('./components/MainLayout/MainLayout'));
// const ProfilePage = lazy(() => import('./components/ProfilePage/ProfilePage'));
// // const CalendarPage = lazy(() => import('./components/CalendarPage/CalendarPage'));
// // const ChoosedMonth = lazy(() => import('./components/CalendarPage/ChoosedMonth/ChoosedMonth'));
// // const ChoosedDay = lazy(() => import('./components/CalendarPage/ChoosedDay/ChoosedDay'));
// // const StatisticsPage = lazy(() => import('./components/StatisticsPage/StatisticsPage'));
// const AuthGoogle = lazy(() => import('./components/shared/AuthGoogle/AuthGoogle'));
// const MainPage = lazy(() => import('./pages/MainPage'));
// const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));

function App() {
  const error = useError();
  const theme = useThemeColors().theme;
  if (error) {
    toast.error(error.message);
  }

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<PubliceRourtes />}>
            <Route path={routes.mainPage} element={<MainPage isHomePage={true} />} />
            <Route path={routes.registerPage} element={<RegisterPage />} />
            <Route path={routes.loginPage} element={<LoginPage />} />
            <Route path={routes.authGoogle} element={<AuthGoogle />} />
            <Route path={routes.forgotPassword} element={<ForgotPwdPage />} />
            <Route path={routes.resetPassword} element={<ResetPwdPage />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path={routes.mainLayout} element={<MainLayout />}>
              <Route path={routes.profilePage} element={<ProfilePage />} />
              <Route path={routes.calendarPage} element={<CalendarPage />}>
                <Route path={routes.calendarMonth} element={<ChoosedMonth />} />
                <Route path={routes.calendarDay} element={<ChoosedDay />} />
              </Route>
              <Route path={routes.statisticsPage} element={<StatisticsPage />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <ToastContainer hideProgressBar closeOnClick theme={theme.toastify.theme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
