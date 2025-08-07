import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import App from '../App'
import Register from '../pages/Register'
import registerAction from "./Actions/registerActions";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/register',
        element: <Register />,
        action: registerAction,
    },
]);

export default router;