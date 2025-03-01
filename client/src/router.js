import { createBrowserRoute } from 'react-router-dom';
import Login from './views/login';
import Register from './views/Register';

const router = createBrowserRoute([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]);


export default router;
