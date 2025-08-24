import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import App from '../App'
import Login from '../pages/Login';
import Register from '../pages/Register'
import loginAction from "./Actions/loginAction";
import registerAction from "./Actions/registerActions";
import loginLoader from "./loaders/loginLoader";
import registerLoader from "./loaders/registerLoader";
import ResetLink from '../pages/ResetLink';
import resetLinkAction from "./Actions/resetAction";
import resetLinkLoader from "./loaders/resetLinkLoader";
import ResetPassword from '../pages/ResetPassword';
import resetPasswordAction from "./Actions/resetPasswordAction";
import resetPasswordLoader from "./loaders/resetPasswordLoader";
import appLoader from "./loaders/appLoader";
import appAction from "./Actions/appAction";
import Conversation from "../pages/Conversation";
import conversationLoader from "./loaders/conversationLoader";
import conversationAction from "./Actions/conversationAction";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: appLoader,
        action: appAction,
        children: [
            {
                path: '/:conversationId',
                element: <Conversation />,
                loader: conversationLoader,
                action: conversationAction,
            },
        ]
    },
    {
        path: '/register',
        element: <Register />,
        loader: registerLoader,
        action: registerAction,
    },
    {
        path: '/login',
        element: <Login />,
        loader: loginLoader,
        action: loginAction,
    },
    {
        path: '/reset-link',
        element: <ResetLink />,
        loader: resetLinkLoader,
        action: resetLinkAction,
    },
    {
        path: '/reset-password',
        element: <ResetPassword />,
        loader: resetPasswordLoader,
        action: resetPasswordAction,
    }
]);

export default router;