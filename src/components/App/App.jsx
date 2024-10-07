import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import { Layout } from "../Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefresing } from "../../redux/auth/selectors";
import RestictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { Hourglass } from "react-loader-spinner";
import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactPage"));

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefresing = useSelector(selectIsRefresing);

  return isRefresing ? (
    <div className={css.spiner}>
      <Hourglass />
    </div>
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
