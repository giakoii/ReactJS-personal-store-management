import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import LoginPage from "../pages/LoginPage/LoginPage";

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
        path: "*",
        page: NotFoundPage
    }
];
