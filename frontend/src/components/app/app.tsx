import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../consts';
import { Layout, SignLayout, PrivateRoute } from '../index';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import {
  IntroPage,
  MainPage,
  LoginPage,
  RegisterPage,
  QuestionaryPage,
  AccountPage,
  TrainingCatalogPage,
  MyPurchasesPage,
  UserPage,
  TrainingPage,
  FriendsPage,
  BalancePage,
  CoachTrainingsPage,
  OrdersPage,
  CreateTrainingPage,
  UsersCatalogPage,
  NotFoundPage
} from '../../pages';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { checkAuthAction } from '../../store/api-actions';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<IntroPage />} />
          <Route element={<SignLayout />} >
            <Route path={AppRoute.Login} element={<LoginPage />} />
            <Route path={AppRoute.Register} element={<RegisterPage />} />
            <Route
              path={AppRoute.Questionary}
              element={
                <PrivateRoute>
                  <QuestionaryPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route path={AppRoute.Main} element={<MainPage />} />
            <Route path={AppRoute.Account} element={<AccountPage />} />
            <Route path={AppRoute.TrainingCatalog} element={<TrainingCatalogPage />} />
            <Route path={AppRoute.MyPurchases} element={<MyPurchasesPage />} />
            <Route
              path={`${AppRoute.Trainings}/:trainingId`}
              element={<TrainingPage />}
            />
            <Route path={AppRoute.Friends} element={<FriendsPage />} />
            <Route path={AppRoute.Balance} element={<BalancePage />} />
            <Route path={AppRoute.CoachTrainings} element={<CoachTrainingsPage />} />
            <Route path={AppRoute.Orders} element={<OrdersPage />} />
            <Route path={AppRoute.CreateTraining} element={<CreateTrainingPage />} />
            <Route path={AppRoute.Users} element={<UsersCatalogPage />} />
            <Route path={`${AppRoute.Users}/:userId`} element={<UserPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
