import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Bars } from "react-loader-spinner";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import { Layout } from "../Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operation";
import { selectIsRefresing } from "../../redux/auth/selectors";
import RestictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactPage"));

export default function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefresing = useSelector(selectIsRefresing);

  return isRefresing ? (
    <p>please wait</p>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestictedRoute component={<RegisterPage />} redirectTo="/" />
          }
        />
        <Route
          path="/login"
          element={
            <RestictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
      </Routes>
    </Layout>
  );
}
