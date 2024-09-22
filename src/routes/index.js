import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationForm from "../pages/LoginPage/RegistrationForm";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/Login',
        page: LoginPage,
        isShowHeader: false
    },
    {
      path: '/Register',
        page: RegistrationForm,
        isShowHeader: false
    },
    {
        path: "*",
        page: NotFoundPage
    }
];
